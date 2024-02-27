
class Aresta {
    constructor(origem, destino, peso) {
        this.origem = origem;
        this.destino = destino;
        this.peso = peso;
    }
    
    
}

class Grafo {
    //Criando o Objeto Grafo
    constructor(vertices) {
        this.V = vertices;
        this.grafo = [];
    }

    //Adicionando Nova Aresta no proprio Grafo
    AdicionarAresta(origem, destino, peso) {
        this.grafo.push(new Aresta(origem, destino, peso));
    }

    //Procurando a raiz do conjunto,
    encontrar(subset, i) {
        if (subset[i] == -1)
            return i;
        return this.encontrar(subset, subset[i]);
    }
    //Unindo informações de vertice com o outro...
    unir(subset, x, y) {
        let raiz_x = this.encontrar(subset, x);
        let raiz_y = this.encontrar(subset, y);
        subset[raiz_x] = raiz_y;
    }

    //inicialização do algoritimo
    kruskal() {
        let resultado = [];
        let i = 0;
        let e = 0;
        //Fazendo uma ordenação baseado no peso de forma crescente.
        this.grafo.sort((a, b) => a.peso - b.peso);
        let subset = new Array(this.V).fill(-1);
        //definindo as raizes dos vertices pra -1 sinalizando que cada vertice está em seu proprio subconjunto
        

        //Verificando e definindo o menor Caminho
        while (e < this.V - 1 && i < this.grafo.length) {

            let { origem, destino, peso } = this.grafo[i++];
            let raiz_origem = this.encontrar(subset, origem); 
            let raiz_destino = this.encontrar(subset, destino);

            if (raiz_origem !== raiz_destino) {
                resultado.push({ origem, destino, peso });
                this.unir(subset, raiz_origem, raiz_destino);
                e++;
            }
        }

        // Enviando Resultados Para o Front-End
        let pesototal = 0;
        document.querySelector(".Vertices_Criados.T2").innerHTML +=`<H1>Resultado Árvore Minima:</H1>`
        for (let { origem, destino, peso } of resultado) {
            pesototal+=parseInt(peso);
            document.querySelector(".Vertices_Criados.T2").innerHTML +=
            `
            <div class="VerticeCriadosContainer">
                <p class="OrigemContainer">Origem: <p class="Origem">${origem}</p></p>
                <p class="DestinoContainer">Destino: <p class="Destino">${destino}</p></p>
                <p class="PesoContainer">Peso: <p class="Peso">${peso}</p></p>
            </div>
            `
        }
        document.querySelector(".Vertices_Criados.T2").innerHTML +=`<h1>Peso Total</h1>
        <P class="TOTAL">${pesototal}</P>`
    }
}





