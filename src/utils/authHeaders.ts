type AxiosRequestHeaders = Record<string, string | number | boolean>;

export default function authHeader(): AxiosRequestHeaders {
    const access = localStorage.getItem('access')
    if (access) {
        return { "Authorization": 'Bearer ' + access };
    } else {
        return {}
    }
}