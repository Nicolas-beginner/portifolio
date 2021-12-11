export default function initTypeWiriter(elemento) {
    let text = '';
    elemento.innerText.split('').forEach((letra, i) => {
        elemento.innerText = ''
        setTimeout(() => {
            elemento.innerText = text += letra
        }, i * 30)
    })
}