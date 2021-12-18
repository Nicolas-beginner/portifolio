export default class CreateGraph {
    constructor(MostUsedLanguages) {
        this.Container = document.querySelector(`.Grafico`)
        this.MostUsedLanguages = MostUsedLanguages
        this.width = 45
        this.base = 1000
        this.languagesConfigGraph = {
            HTML: "#F81818",
            SCSS: "#CF649A",
            JavaScript: "#FFE739",
            CSS: "#A7DCFF",
        };
    }
    init() {
        const GraphItemDescriptionContainer = document.querySelector(".GraphDescription")
        Object.keys(this.MostUsedLanguages[0]).map((language) => {
            const GraphItemDiv = document.createElement("div")
            const GraphItemDescription = document.createElement("div")

            GraphItemDiv.style.backgroundColor = this.languagesConfigGraph[language]
            GraphItemDescription.style.backgroundColor = this.languagesConfigGraph[language]
            GraphItemDiv.style.height = this.MostUsedLanguages[0][language] / this.base + 'px'
            GraphItemDiv.style.width = this.width + 'px'
            GraphItemDescription.innerHTML = `<p class="NameGraph"> ${this.MostUsedLanguages[0][language]} Bytes escritos em ${language}</p>`

            GraphItemDiv.setAttribute("class", "GraficoItem")
            this.Container.appendChild(GraphItemDiv)

            GraphItemDescription.setAttribute("class", "GraphDescriptionItem")
            GraphItemDescriptionContainer.appendChild(GraphItemDescription)
        })
    }
}