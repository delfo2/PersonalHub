export function formatDate (value : string) : string {
    return new Date(value).toLocaleDateString();
}

export function nullChecker (value : string | null) : string {
    if(value) {
        return '';
    } else {
        return ' escondido';
    }
}