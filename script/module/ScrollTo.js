export default class ScrollTo {
    constructor(Buttons) {
        this.sectionsName = document.querySelectorAll(Buttons)
        this.sectionToCome = null
    }

    selectSection(e) {
        e.preventDefault()
        let Classe = e.target.getAttribute('href')
        this.sectionToCome = document.querySelector(Classe)
        window.scrollTo({
            behavior: "smooth",
            top: this.sectionToCome.offsetTop
        })
    }

    init() {
        this.sectionsName.forEach((section) => {
            section.addEventListener("click", this.selectSection)
        })
    }
}