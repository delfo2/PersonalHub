import { listenToForm } from "./utils/form-helpers.js";
const input = document.querySelector('[data-input]');
const form = document.querySelector('[data-formulario=""]');
listenToForm(input, form);
