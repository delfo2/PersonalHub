const body = document.querySelector('[data-body=""]');
export function domUpdater(api) {
    body.innerHTML = api;
}
