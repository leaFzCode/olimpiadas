function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // se campoPesquisa for uma string sem nada
    // == -> compara valores, não atribui valores a variavel
    // padronizar utilizando ' ! ' para simbolizar o vazio igual usado na linha 43
    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum atleta encontrado. Você precisar digitar algo relacionado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se dado titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para cada resultado.
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) { 
        section.innerHTML = "Nada foi encontrado"
        return
    }

    // Insere o HTML gerado na seção.
    section.innerHTML = resultados;
}