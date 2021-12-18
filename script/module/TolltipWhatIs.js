export default class Tolltip {
    constructor(dd) {
        this.sectionDD = document.querySelectorAll(dd)
    }

    ManipulationElement(e) {
        e.target.classList.toggle("ativo")
        e.target.nextElementSibling.classList.toggle("ativo")
    }

    init() {
        this.sectionDD.forEach((dd, i) => {
            dd.previousElementSibling.addEventListener("click", this.ManipulationElement)
            if (i === 0) {
                dd.previousElementSibling.click()
            }
        })
    }
}