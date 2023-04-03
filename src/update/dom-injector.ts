const body : HTMLBodyElement = <HTMLBodyElement>document.querySelector('[data-body=""]');

export function domUpdater (api : string) : void {
    body.innerHTML = api;
}