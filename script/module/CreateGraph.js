export default class CreateGraph {
    constructor(MostUsedLanguages) {
        this.Container = document.querySelector(`.Grafico`)
        this.MostUsedLanguages = MostUsedLanguages
        this.width = 45
        this.base = 1000
    }
    init() {
        console.log(this.MostUsedLanguages)
        Object.keys(this.MostUsedLanguages[0]).map((language) => {
            const GraphItemDiv = document.createElement("div")
            const GraphItemDescription = document.createElement("div")
            const GraphItemDescriptionContainer = document.querySelector(".GraphDescription")

            switch (language) {
                case "SCSS":
                    GraphItemDiv.style.backgroundColor = '#CF649A'
                    GraphItemDescription.style.backgroundColor = "#CF649A"
                    GraphItemDiv.style.height = this.MostUsedLanguages[0].SCSS / this.base + 'px'
                    GraphItemDiv.style.width = this.width + 'px'
                    GraphItemDescription.innerHTML = `<p class="NameGraph">${language}</p>`
                    break;
                case "HTML":
                    GraphItemDiv.style.backgroundColor = '#F81818'
                    GraphItemDiv.style.height = this.MostUsedLanguages[0].HTML / this.base + 'px'
                    GraphItemDiv.style.width = this.width + 'px'
                    GraphItemDescription.style.backgroundColor = "#F81818"
                    GraphItemDescription.innerHTML = `<p class="NameGraph">${language}</p>`
                    break;
                case "JavaScript":
                    GraphItemDiv.style.backgroundColor = '#FFE739'
                    GraphItemDiv.style.height = this.MostUsedLanguages[0].JavaScript / this.base + 'px'
                    GraphItemDiv.style.width = this.width + 'px'
                    GraphItemDescription.style.backgroundColor = "#FFE739"
                    GraphItemDescription.innerHTML = `<p class="NameGraph">${language}</p>`
                    break;
                case "CSS":
                    GraphItemDiv.style.backgroundColor = '#A7DCFF'
                    GraphItemDiv.style.height = this.MostUsedLanguages[0].CSS / this.base + 'px'
                    GraphItemDiv.style.width = this.width + 'px'
                    GraphItemDescription.style.backgroundColor = "#A7DCFF"
                    GraphItemDescription.innerHTML = `<p class="NameGraph">${language}</p>`
                    break;
            }
            console.log(GraphItemDescription)
            GraphItemDiv.setAttribute("class", "GraficoItem")
            this.Container.appendChild(GraphItemDiv)

            GraphItemDescription.setAttribute("class", "GraphDescriptionItem")
            GraphItemDescriptionContainer.appendChild(GraphItemDescription)
        })
    }
}