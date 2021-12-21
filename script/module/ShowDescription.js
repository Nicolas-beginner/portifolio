export default class ShowDescriptionFromElements {
    constructor(Element) {
        this.icons = document.querySelectorAll(Element)
        this.MouseOver = this.MouseOver.bind(this)
        this.MouseLeave = this.MouseLeave.bind(this)
    }

    MouseOver(e) {
        let Icon = document.querySelector(`[data-tolltip="${e.target.className}"]`)
        Icon.classList.add("show")
        setTimeout(() => {
            this.icons.forEach(icon => icon.removeEventListener('mouseover', this.MouseOver))
            this.icons.forEach(icon => icon.addEventListener('mouseleave', () => this.MouseLeave(Icon)))
        }, 1)
    }

    MouseLeave(Icon) {
        Icon.classList.remove("show")
        this.init()
    }

    init() {
        this.icons.forEach(icon => icon.addEventListener('mouseover', this.MouseOver))
    }
}