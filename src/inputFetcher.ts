import { resConverter } from "./utils/promise-helpers.js";
import { EventEmitter } from "./update/event-emiter.js";
import { btnAtualizaPagina } from "./update/btnF5.js";

export const inputFetcher = (inputValue : string) : void => {
    const nickName = inputValue;
    const urlApi = 'https://api.github.com/users/';
    const urlApiUser = urlApi + nickName;
    
    fetch(urlApiUser)
        .then(resConverter)
        .then(res => {
            EventEmitter.pub('resultado', res);
            btnAtualizaPagina();
        })
        .catch(err => console.log(`não possível se conectar a Api: ${err}`))
}