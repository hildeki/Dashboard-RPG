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

    // Limpa input
    input.value = '';
});