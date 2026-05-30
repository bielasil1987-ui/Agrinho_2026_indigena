// Objeto contendo os dados interativos
const dadosIndigenas = {
    natureza: {
        titulo: "Frutos Nativos e a Natureza",
        texto: "A relação com a terra é sagrada. Muitos frutos encontrados na mata, como o urucum, possuem papel fundamental na alimentação, na pintura corporal e em rituais. A extração é feita com profundo respeito ao tempo da natureza."
    },
    artesanato: {
        titulo: "A Arte da Cestaria e Artesanato",
        texto: "O artesanato indígena vai muito além da estética; é utilitário e carrega a identidade de cada povo. A cestaria, feita com fibras naturais, exige habilidade manual passada de geração em geração."
    },
    tradicao: {
        titulo: "Tradições e Saberes",
        texto: "Os saberes são transmitidos oralmente pelos mais velhos. As lendas, os cantos e as danças não são apenas histórias, são a forma de manter viva a memória, a espiritualidade e a educação das crianças da aldeia."
    }
};

// Função acionada ao clicar em um cartão
function mostrarInformacao(temaSelecionado) {
    // Busca os elementos HTML pelo ID
    const painel = document.getElementById("painel-info");
    const titulo = document.getElementById("titulo-info");
    const texto = document.getElementById("texto-info");

    // Pega os dados correspondentes ao tema clicado
    const dados = dadosIndigenas[temaSelecionado];

    // Atualiza o conteúdo na tela
    titulo.innerText = dados.titulo;
    texto.innerText = dados.texto;

    // Remove a classe 'oculto' para exibir o painel
    painel.classList.remove("oculto");
}

// Função para fechar o painel de informação
function fecharInformacao() {
    const painel = document.getElementById("painel-info");
    // Adiciona a classe 'oculto' novamente
    painel.classList.add("oculto");
}