function uniTotal (string) {
    return [...string].reduce((acc, char) => acc + char.charCodeAt(),0);
    }