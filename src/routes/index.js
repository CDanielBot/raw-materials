import {
    LoginContainer, RegisterContainer, HomeContainer,
    ManageAccountContainer, InfoContainer, MyProfileContainer
} from '../views/containers'
import { NotFoundPage } from '../views/components/shared'
import NavigationRoute from './NavigationRoute'
import { myProfileActions } from '../state/ducks/myprofile'

export { NavigationRoute }

// TODO -> not working as expected... it should be called when directly accesing an url
const dispatchTabChange = (tabIndex) => {
    myProfileActions.changeTab(tabIndex)
}

export const routes = [
    {
        path: '/login',
        hideNav: true,
        exact: true,
        component: LoginContainer,
    },
    {
        path: '/register',
        hideNav: true,
        exact: true,
        component: RegisterContainer,
    },
    {
        path: '/home',
        exact: true,
        component: HomeContainer,
    },
    {
        path: '/manage-account',
        exact: true,
        component: ManageAccountContainer,
        requiresAuthentication: true,
    },
    {
        path: '/',
        exact: true,
        component: HomeContainer,
    },
    {
        path: '/profile/products',
        exact: true,
        component: MyProfileContainer,
        requiresAuthentication: true,
        onEnter: dispatchTabChange(0)
    },
    {
        path: '/profile/offers',
        exact: true,
        component: MyProfileContainer,
        requiresAuthentication: true,
        onEnter: dispatchTabChange(1)
    },
    {
        path: '/profile/chat/:id',
        component: MyProfileContainer,
        requiresAuthentication: true,
        onEnter: dispatchTabChange(2)
    },
    {
        path: '/info/:id',
        component: InfoContainer,
    },
    {
        path: '*',
        hideNav: true,
        component: NotFoundPage,
    },
]
