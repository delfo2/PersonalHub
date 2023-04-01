import { inputFetcher } from "./inputFetcher.js";
const input = document.querySelector('[data-input]');
const form = document.querySelector('[data-formulario=""]');
if (input && form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputFetcher(input.value);
    });
}
else {
    throw Error('Não foi possível achar o Form ou o Input.');
}
