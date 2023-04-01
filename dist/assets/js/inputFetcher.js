import { resConverter } from "./utils/promise-helpers.js";
import { domUpdater } from "./update/dom-injector.js";
import { applyApiAtHtml } from "./utils/dom-data.js";
function action(api) {
    const apiInHtml = applyApiAtHtml(api);
    domUpdater(apiInHtml);
}
function atualizaPagina() {
    var _a;
    (_a = document.querySelector('[data-botao="voltar"]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        window.location.reload();
    });
}
export const inputFetcher = (inputValue) => {
    const nickName = inputValue;
    const urlApi = 'https://api.github.com/users/';
    const urlApiUser = urlApi + nickName;
    fetch(urlApiUser)
        .then(resConverter)
        .then(res => {
        action(res);
        atualizaPagina();
    })
        .catch(err => console.log(`não possível se conectar a Api: ${err}`));
};
