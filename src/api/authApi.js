import { apiWithInterceptor, apiWithoutInterceptor } from '.';
export const loginApi =(login) => apiWithoutInterceptor.post( `/account/login`, {login} )
export const logoutApi = () => {
    return apiWithInterceptor.get( `/account/logout` ).then(() => {
        localStorage.removeItem('token');
    });
}