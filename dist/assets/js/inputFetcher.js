import { resConverter } from "./utils/promise-helpers";
export const inputFetcher = (inputValue) => {
    const nickName = inputValue;
    const urlApi = 'https://api.github.com/users/';
    const urlApiUser = urlApi + nickName;
    fetch(urlApiUser)
        .then(resConverter)
        .then(res => {
        if (res)
            console.log(res);
    });
};
