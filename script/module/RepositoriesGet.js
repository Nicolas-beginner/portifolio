import { token } from "./Private.json"
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
                    'Authorization': `Bearer ${token}`,
                }
            })
            let responseRepositories = await requestRespositories.json()
            if (!!requestRespositories.ok === false) throw new Error(requestRespositories.text())
            await responseRepositories.forEach(repo => this.RepositoriesNames.push(repo.name))

            let RequestLanguages = Promise.all(this.RepositoriesNames.map(async Name => {
                let request = await fetch(`https://api.github.com/repos/${this.RepositoryOwer}/${Name}/languages`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/vnd.github.v3+json',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                if (!!request.ok === false) throw new Error(request.status)
                return await request.json();
            }))

            let Mos = (await RequestLanguages).map(language => language)
            if (Mos.length) this.SomandoObjetos(Mos)
        }
        catch (erro) {
            console.log(erro)
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
