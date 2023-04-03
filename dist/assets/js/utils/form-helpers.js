import { inputFetcher } from "../inputFetcher.js";
export function listenToForm(input, form) {
    if (input && form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            inputFetcher(input.value);
        });
    }
    else {
        throw Error('Não foi possível achar o Form ou o Input.');
    }
}
