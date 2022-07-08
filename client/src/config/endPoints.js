const { REACT_APP_HOST: host } = process.env;

export const singUp = () => `${host}/signup`;
export const signIn = () => `${host}/signin`;
export const signOut = () => `${host}/logout`;
export const checkAuth = () => `${host}/auth`;
