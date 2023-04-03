import { formIndex } from "../utils/dom-data.js"
import { listenToForm } from "../utils/form-helpers.js"
import { domUpdater } from "./dom-injector.js"

export function btnAtualizaPagina () : void {
    document.querySelector('[data-botao="voltar"]')?.addEventListener('click', () => {
        domUpdater(formIndex)

        const input = <HTMLInputElement>document.querySelector('[data-input]');
        const form = <HTMLElement>document.querySelector('[data-formulario=""]');
        
        listenToForm(input, form)
    })
}