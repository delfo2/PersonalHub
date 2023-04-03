import { listenToForm } from "./utils/form-helpers.js";

const input : HTMLInputElement = <HTMLInputElement>document.querySelector('[data-input]');
const form = <HTMLElement>document.querySelector('[data-formulario=""]');

listenToForm(input, form);