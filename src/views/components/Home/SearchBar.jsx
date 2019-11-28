
import Autosuggest from 'react-autosuggest'
import React from 'react'
import { connect } from 'react-redux'
import { materialActions } from '../../../state/ducks/materials'
import { toastr } from 'react-redux-toastr'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    }
})

class SearchBar extends React.Component {

    constructor() {
        super()

        this.state = {
            text: '',
            suggestions: []
        }
    }

    // react-autosuggest
    renderInputComponent = (inputProps) => {
        const { classes, inputRef = () => { }, ref, ...other } = inputProps

        return (
            <div>
                <TextField
                    fullWidth
                    InputProps={{
                        inputRef: node => {
                            ref(node)
                            inputRef(node)
                        }
                    }}
                    {...other}
                />
            </div>
        )
    }

    _escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }

    _getSuggestions = (searchText) => {
        const escapedValue = this._escapeRegexCharacters(searchText.trim()).toLowerCase()

        if (escapedValue === '') {
            return Promise.resolve([])
        }

        return this.props.searchSuggestions(escapedValue)
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this._getSuggestions(value).then(suggestions => {
            suggestions = suggestions.map(suggestion => {
                return { name: suggestion.keyword, value: suggestion.keyword.toLowerCase() }
            })
            this.setState({
                suggestions: suggestions
            })
        })
    }

    onSuggestionSelected = async (event, { suggestion }) => {
        try {
            this.setState({ text: suggestion.name })
            await this.props.filter(suggestion.value)
        } catch (error) {
            toastr.error(error ? error.data.message : 'Backend down')
        }
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        })
    }

    getSuggestionValue = (suggestion) => {
        console.log(suggestion.name + ' is ')
        return suggestion.name
    }

    renderSuggestion = (suggestion, { query, isHighlighted }) => {
        const matches = match(suggestion.name, query)
        const parts = parse(suggestion.name, matches)

        return (
            <MenuItem selected={isHighlighted} component="div">
                <div>
                    {parts.map((part, index) => {
                        return part.highlight ? (
                            <span key={String(index)} style={{ fontWeight: 500 }}>
                                {part.text}
                            </span>
                        ) : (
                                <strong key={String(index)} style={{ fontWeight: 300 }}>
                                    {part.text}
                                </strong>
                            )
                    })}
                </div>
            </MenuItem>
        )
    }

    onChange = (event, { newValue, method }) => {
        this.setState({ text: newValue })
    }

    render() {
        const { text, suggestions } = this.state
        const { classes } = this.props
        const inputProps = {
            placeholder: "Start typing what you're interested in",
            value: text,
            onChange: this.onChange
        }

        return <div className={classes.root}>
            <Autosuggest
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderInputComponent={this.renderInputComponent}
                suggestions={suggestions}
                onSuggestionSelected={this.onSuggestionSelected}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                renderSuggestionsContainer={options => (
                    <Paper {...options.containerProps} square>
                        {options.children}
                    </Paper>
                )}
            />
        </div>
    }
}

export default withStyles(styles)(connect(null, { ...materialActions })(SearchBar))
