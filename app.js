function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
    let resultados = ""

//para cada dado dentro da lista de dados
for(let dado of dados) {
    resultados += `
        <div class="item-resultado">
            <a href="#" target="_blank"><h2>${dado.nome}</h2></a>
            <span class="time">Time:${dado.time}</span>
            <span class="posicao">Posição:${dado.posicao}</span>
            <p class="descricao-meta">${dado.descricao}</p> 
            <a href=${dado.link} target="_blank">Mais informações.</a>
        </div>

`
}

section.innerHTML = resultados

}

function filtrar(){
    const input = document.querySelector("#filtrar").value
    let section = document.getElementById("resultados-pesquisa")
    let resultados = ""
    for(let dado of dados){

    if(dado.nome.toLowerCase().includes(input.toLowerCase())
    || dado.time.toLowerCase().includes(input.toLowerCase())
    || dado.posicao.toLowerCase().includes(input.toLowerCase())) 

{
         
    resultados += `
        <div class="item-resultado">
            <a href="#" target="_blank"><h2>${dado.nome}</h2></a>
            <span class="time">Time:${dado.time}</span>
            <span class="posicao">Posição:${dado.posicao}</span>
            <p class="descricao-meta">${dado.descricao}</p> 
            <a href=${dado.link} target="_blank">Mais informações.</a>
        
        </div>
                  
         
        `
              
}

}

if (!resultados){
    resultados = "<p>Nada foi encontrado</p>"

}
section.innerHTML = resultados

}


