import { resConverter } from "./utils/promise-helpers.js";
import { domUpdater } from "./update/dom-injector.js";
import { applyApiAtHtml } from "./utils/dom-data.js";
function action(api) {
    const apiInHtml = applyApiAtHtml(api);
    domUpdater(apiInHtml);
}
export const inputFetcher = (inputValue) => {
    const nickName = inputValue;
    const urlApi = 'https://api.github.com/users/';
    const urlApiUser = urlApi + nickName;
    fetch(urlApiUser)
        .then(resConverter)
        .then(res => { action(res); })
        .catch(err => console.log(`não possível se conectar a Api: ${err}`));
};
