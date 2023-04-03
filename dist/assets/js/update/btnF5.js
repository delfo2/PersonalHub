import { formIndex } from "../utils/dom-data.js";
import { listenToForm } from "../utils/form-helpers.js";
import { domUpdater } from "./dom-injector.js";
export function btnAtualizaPagina() {
    var _a;
    (_a = document.querySelector('[data-botao="voltar"]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        domUpdater(formIndex);
        const input = document.querySelector('[data-input]');
        const form = document.querySelector('[data-formulario=""]');
        listenToForm(input, form);
    });
}
