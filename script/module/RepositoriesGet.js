import CreateGraph from "./CreateGraph";
export default class GetMostUsedLanguages {
    constructor() {
        this.RepositoryOwer = 'Nicolas-beginner';
        this.RepositoriesNames = [];
        this.MostUsedLanguages = [{ JavaScript: 0, CSS: 0, HTML: 0, SCSS: 0, }];
    }

    async FazendoRequisições() {
        try {
            let requestRespositories = await fetch(`https://api.github.com/users/${this.RepositoryOwer}/repos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/vnd.github.v3+json',
                }
            })
            let responseRepositories = await requestRespositories.json()
            if (!requestRespositories.ok) throw new Error("Desculpe algo deu errado durate a busca dos repositorioa")
            await responseRepositories.forEach(repo => this.RepositoriesNames.push(repo.name))

            let RequestLanguages = Promise.all(this.RepositoriesNames.map(async Name => {
                let request = await fetch(`https://api.github.com/repos/${this.RepositoryOwer}/${Name}/languages`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/vnd.github.v3+json',
                    }
                })
                if (!!request.ok === false) throw new Error()
                return await request.json();
            }))

            let Mos = (await RequestLanguages).map(language => language)
            if (Mos.length) this.SomandoObjetos(Mos)
        }
        catch {
            const graph = new CreateGraph(this.MostUsedLanguages)
            graph.alternativeTograph()
        }
    }

    SomandoObjetos(Dados) {
        Dados.forEach((dado) => {
            if (dado.JavaScript !== undefined) {
                this.MostUsedLanguages[0].JavaScript += dado.JavaScript
            }
            if (dado.CSS !== undefined) {
                this.MostUsedLanguages[0].CSS += dado.CSS
            }
            if (dado.HTML !== undefined) {
                this.MostUsedLanguages[0].HTML += dado.HTML
            }
            if (dado.SCSS !== undefined) {
                this.MostUsedLanguages[0].SCSS += dado.SCSS
            }
        })
        const graph = new CreateGraph(this.MostUsedLanguages)
        graph.init()
    }
}
