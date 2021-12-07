export default class CreateGraph {
    constructor(MostUsedLanguages) {
        this.Container = document.querySelector(`.Grafico`)
        this.MostUsedLanguages = MostUsedLanguages
    }
    init() {
        console.log(this.MostUsedLanguages)
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(this.drawChart);

    }
    drawChart() {
        let Data = new google.visualization.arrayToDataTable([
            ['Language', "Bytes Escritos No Github", { role: "annotation" }],
            ["JavaScript", 63, '#FFE739', 'Js'],
            ["CSS", 63, '#FFE739', 'css3'],
            ["HTML", 63, '#FFE739', 'Hml5'],
            ["SCSS", 63, '#FFE739', 'Scss'],
        ])
        const Draw = new google.visualization.ColumnChart(this.Container);
        Draw.draw(Data)
    }

}