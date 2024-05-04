// Captura todas as linhas da tabela
var linhasTabela = document.querySelectorAll('table');

// Itera sobre cada linha da tabela
linhasTabela.forEach(function(linha) {

    linha.addEventListener('dblclick', function() {

        event.target.parentNode.remove();
    });
});


//var tabela = document.querySelectorAll('table');