let { token } = Cookies.get();
console.log(token);

export const getToken = () => token
console.log(getToken());

export const getUserData = () => {
  const decodedToken = token ? jwt_decode(token) : undefined;
  return decodedToken;
};
console.log(getUserData());

export const removeCookies = (key) => {
  Cookies.remove(key);
};

export const isAdmin = () => {
  let decodedToken = getUserData();
  return decodedToken.role == "ADMIN";
};

export const isSuperAdmin = () => {
    let decodedToken = getUserData();
    return decodedToken.role == "CEO";
}
export const isActiveAccount = () => {
  let decodedToken = getUserData();
  return decodedToken.isActive;
};
