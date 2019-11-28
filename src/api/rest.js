import axios from 'axios'
import FormData from 'form-data'

export const SERVER_URL = 'http://localhost:3001'
const REST_API = SERVER_URL + '/api/v1'

axios.interceptors.response.use((response) => {
    return Promise.resolve(response.data)
}, (error) => {
    // Do something with response error
    // if (error.response.status === 401) {
    //     console.log('unauthorized, logging out ...');
    //     auth.logout();
    //     router.replace('/auth/login');
    // }
    return Promise.reject(error.response);
})

export class SuggestionEndpoints {
    static searchSuggestions(suggestion) {
        return axios.get(`${REST_API}/suggestions`, { params: { suggestion: suggestion } })
    }
}

export class MessageEndpoints {
    static askPrice(productId, message, userId) {
        return axios.post(`${REST_API}/chatRooms/askPrice`, { productId: productId, message: message, userId: userId })
    }

    static findOffers(filter) {
        return axios.get(`${REST_API}/chatRooms`, { params: { ownerId: filter.ownerId, askerId: filter.askerId } })
    }

}

export class MaterialEndpoints {

    static filter(filter) {
        return axios.get(`${REST_API}/materials`, {
            params: {
                suggestion: filter.suggestion,
                userId: filter.userId
            }
        })
    }

    static create(newProduct, mainImage) {
        let data = new FormData()
        data.append('mainImage', mainImage)
        data.append('product', JSON.stringify(newProduct))

        return axios.post(`${REST_API}/materials`, data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data`,
            }
        })
    }

    static update(updateMaterial) {
        const materialId = updateMaterial.id
        delete updateMaterial.id
        return axios.put(`${REST_API}/materials/${materialId}`, { product: updateMaterial })
    }

    static delete(materialId) {
        return axios.delete(`${REST_API}/materials/${materialId}`)
    }
}

export class CompanyEndpoints {

    static filter(filter) {
        return axios.get(`${REST_API}/companies`, {
            params: {
                userId: filter.userId,
            }
        })
    }

    static create(newCompany) {
        return axios.post(`${REST_API}/companies`, newCompany)
    }

    static update(updateCompany) {
        const companyId = updateCompany.id
        delete updateCompany.id
        return axios.put(`${REST_API}/companies/${companyId}`, { company: updateCompany })
    }

    static delete(companyId) {
        return axios.delete(`${REST_API}/companies/${companyId}`)
    }
}

export class UserEndpoints {

    static signIn(email, password) {
        return axios.post(`${REST_API}/users/authenticate`, { user: { email: email, password: password } })
    }

    static signOut() {
        return axios.post(`${REST_API}/users/signOut`)
    }

    static getUserAccount(userId) {
        return axios.get(`${REST_API}/userAccounts`, {
            params: {
                userId: userId
            }
        })
    }

    static update(userId, email, oldPassword, newPassword) {
        return axios.post(`${REST_API}/users/updatePassword`, { user: { userId: userId, email: email, oldPassword: oldPassword, newPassword: newPassword } })
    }

    static register(userDetails) {
        return axios.post(`${REST_API}/users/register`, {
            user: {
                email: userDetails.email,
                password: userDetails.password,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                phoneNumber: userDetails.phoneNumber,
                accountType: userDetails.accountType
            },
            company: {
                fiscalCode: userDetails.fiscalCode,
                companyName: userDetails.companyName,
                licenseNumber: userDetails.licenseNumber,
                yearFounded: userDetails.yearFounded,
                address: userDetails.address,
                accountType: userDetails.accountType
            }
        })
    }

    static getAll() {
        return axios.get(`${REST_API}/users`)
    }
}
