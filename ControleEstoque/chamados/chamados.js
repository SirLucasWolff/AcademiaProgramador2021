var chamado = new Object();
chamado.id = 0;
chamado.titulo = "";
chamado.descricao = "";
chamado.equipamento = "";
chamado.data = "";

var chamados;
var id;
var cabecalho = ['iD', 'TÍtulo', 'Descrição', 'Equipamento', 'Data'];

function initList() {
    chamados = new Array();
    id = 1;
}

function adicionarchamado() {

    if (chamados == undefined) {
        initList();
    }

    chamadoTemp = new Object();
    chamadoTemp.id = ++id;
    chamadoTemp.titulo = document.getElementById("titulo").value;
    chamadoTemp.descricao = document.getElementById("descricao").value;
    chamadoTemp.equipamento = document.getElementById("equipamento").value;
    chamadoTemp.data = document.getElementById("data").value;
    chamados.push(chamadoTemp);

    criarTabela(cabecalho, chamados);
    MudarCorBotao();
}

function removerChamados(id) {
    var length = chamados.length;
    for (var i = 0; i <= length; i++) {
        if (chamados[i].id == id) {
            chamados.splice(i, 1);
            break;
        }
    }
    criarTabela(cabecalho, chamados);
}

//exemplo retirado de: https://stackoverflow.com/questions/27681838/create-table-with-javascript-array-and-object
// modificado para incluir um botão e id
function criarTabela(labels, objects) {
    var table = document.createElement('table');
    table.className = "table";
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var theadTr = document.createElement('tr');
    for (var i = 0; i < labels.length; i++) {
        var theadTh = document.createElement('th');
        theadTh.scope = "col";
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);

    var id;
    for (j = 0; j < objects.length; j++) {
        var tbodyTr = document.createElement('tr');
        for (k = 0; k < labels.length; k++) {
            var tbodyTd = document.createElement('td');
            if (labels[k] == 'id') {
                id = objects[j].id;
            }
            tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
            tbodyTr.appendChild(tbodyTd);
        }
        var button = document.createElement('div');
        button.innerHTML = '<td><button type="button" class="btn btn-secondary btn-sm" onclick="removerChamados(' + id + ')">Remover</button></td>';
        tbodyTr.appendChild(button);
        tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    document.getElementById('listaChamados').innerHTML = "";
    document.getElementById('listaChamados').appendChild(table);
}


function MudarCorBotao() {
    var Button = document.getElementById('botaoCadastrar');
    Button.style = 'background-color: #198754';
}

function voltar() {
    window.history.back();
}