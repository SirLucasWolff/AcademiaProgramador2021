var equipamento = new Object();
equipamento.id = 0;
equipamento.nome = ""; //texto
equipamento.preco = 0.0; //numero
equipamento.serie = "";
equipamento.fabricacao = "";
equipamento.fabricante = "";

var equipamentos;
var id;
var cabecalho = ['id', 'nome', 'preco', 'serie', 'fabricacao', 'fabricante'];

function initList() {
    equipamentos = new Array();
    id = 1;
}

function adicionarEquipamentos() {

    if (equipamentos == undefined) {
        initList();
    }
    
    var nome = document.getElementById("nome").value;
    if (nome.length < 6) { 
        //se a quantidade de caracteres do nome for menor que 6 cria a mensagem 
        alert("Deve ter um nome com no mínimo 6 caracteres");
    } else {
        equipTemp = new Object();
        equipTemp.id = ++id;
        equipTemp.nome = document.getElementById("nome").value;
        equipTemp.preco = document.getElementById("preco").value;
        equipTemp.serie = document.getElementById("numeroSerie").value;
        equipTemp.fabricacao = document.getElementById("dataFabricacao").value;
        equipTemp.fabricante = document.getElementById("fabricante").value;
        equipamentos.push(equipTemp);

        criarTabela(cabecalho, equipamentos);
    }
}

function removerEquipamento(id) {
    var length = equipamentos.length;
    for (var i = 0; i <= length; i++) {
        if (equipamentos[i].id == id) {
            equipamentos.splice(i, 1);
            break;
        }
    }
    criarTabela(cabecalho, equipamentos);
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
        button.innerHTML = '<td><button type="button" class="btn btn-secondary btn-sm" onclick="removerEquipamento(' + id + ')">Remover</button></td>';
        tbodyTr.appendChild(button);
        tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    document.getElementById('listaEquipamentos').innerHTML = "";
    document.getElementById('listaEquipamentos').appendChild(table);
}

function voltar() {
    window.history.back();
}