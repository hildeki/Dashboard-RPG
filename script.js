// Seleciona os itens
const input = document.getElementById('taskInput');
const botao = document.getElementById('taskBtn');
const lista = document.getElementById('taskList');

// Botão funcionando
botao.addEventListener('click', function() {
    
    // Texto digitado
    const botaoTexto = input.value.trim();

    // Verifica se está vazio
    if (botaoTexto === '') {
        return;
    }

    // Criação do item digitado
    const novoItem = document.createElement('li');

    // Botão texto
    novoItem.textContent = botaoTexto

    // Adiciona na lista
    lista.appendChild(novoItem);

    // Criação do botão de exclusão
    const novoBotao = document.createElement('button');

    // Texto de exclusão do botão
    novoBotao.textContent = "X";

    // Botão exclusão
    novoItem.appendChild(novoBotao);

    // Execução do botão de exclusão
    novoBotao.addEventListener('click', function() {

        //Exclusão do item
        novoItem.remove();
    })

    // Limpa input
    input.value = '';
});    