export default function initTypeWiriter(elemento) {
    let text = '';

    elemento.innerHTML.split('').forEach((letra, i) => {
        elemento.innerHTML = ''
        setTimeout(() => {
            elemento.innerHTML = text += letra
            console.log(elemento)
        }
            , i * 30)
    })
}