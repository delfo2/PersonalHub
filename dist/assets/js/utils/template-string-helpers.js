export function formatDate(value) {
    return new Date(value).toLocaleDateString();
}
export function nullChecker(value) {
    if (value) {
        return '';
    }
    else {
        return ' escondido';
    }
}
