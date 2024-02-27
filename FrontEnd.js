// Funções para o  Front End 
let g ;


function voltarInicio(){
    document.querySelector(".Container_Inputs").style.display = "flex"
    document.querySelector(".AddAresta").style.display = "none"
    document.querySelector(".VerticesDisponiveis").style.display ="none"; 
    document.querySelector(".Vertices_Criados").style.display = "none"; 
    document.querySelector(".Vertices_Criados").innerHTML = "<H1>VERTICES DISPONIVEIS</H1>"; 
    document.querySelector(".VerticesDisponiveis").innerHTML ="<H1>VERTICES DISPONIVEIS</H1>"; 
    document.querySelector(".Vertices_Criados.T2").style.display ="none"; 

}
function CriarAresta(){
    const Origem = document.querySelector(".InputOrigem").value;
    const Destino = document.querySelector(".InputDestino").value;
    const Peso = document.querySelector(".InputPeso").value;
    g.AdicionarAresta(Origem, Destino, Peso);
    if(Origem > g.V-1|| Destino> g.V-1 || !Destino ||!Origem){
        alert("VERTICE NÃO EXISTE");
    }else{

    
    document.querySelector(".Vertices_Criados").innerHTML +=
    `
    <div class="VerticeCriadosContainer">
    
        <p class="OrigemContainer">Origem: <p class="Origem">${Origem}</p></p>
        <p class="DestinoContainer">Destino: <p class="Destino">${Destino}</p></p>
        <p class="PesoContainer">Peso: <p class="Peso">${Peso}</p></p>
    </div>
    `
    document.querySelector(".Vertices_Criados").style.display = "flex"
    }   

}
function CriarGrafo(){
    const Vertices = parseInt(document.querySelector(".NdeVerticesInput").value)
    document.querySelector(".Container_Inputs").style.display = "none"
    document.querySelector(".AddAresta").style.display = "flex"
    //Criando Grafo
    g = new Grafo(Vertices);
    document.querySelector(".VerticesDisponiveis").style.display = "flex"
    for(let i = 0; i<Vertices;i++){
        document.querySelector(".VerticesDisponiveis").innerHTML += `
         <p>${i}</p>
        `
    }

}
function Calcular(){
    
    document.querySelector(".Vertices_Criados.T2").innerHTML = "";
    //Chamando A função de Organizar Kruskal
    g.kruskal();
    document.querySelector(".Vertices_Criados.T2").style.display = "flex";
}
