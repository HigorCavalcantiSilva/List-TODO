import Tarefas from "./tarefas.js";

export default class Controller {

    constructor(){
        this.tarefas = new Tarefas();
    }
    
    aoClicarAdicionar(){
        let atv = document.getElementById("atv").value;
        if(atv != ""){
            this.tarefas.cadastrar(atv);
            this.listarNaoFeitos();
            document.getElementById("atv").value = "";
        } else {
            alert("INSIRA ALGUM TEXTO NO CAMPO ANTES DE ADICIONAR!")
        }
    }

    listarNaoFeitos(){
        let lista = document.getElementById("nao-feitos");
        lista.innerHTML = "";
        this.tarefas.buscarNaoFeitas().forEach(item => {
            lista.innerHTML += `<li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-8">${item.desc}</div>
                                        <div class="col-md-2"><img width="40" src="./assets/ok0.png" onclick="controller.aoClicarOK(${item.id})"></div>
                                        <div class="col-md-2"><img width="40" src="./assets/trash.png" onclick="controller.aoClicarExcluir(${item.id})"></div>
                                    </div>
                                </li>`;
        });
    }

    listarFeitos(){
        let lista = document.getElementById("feitos");
        lista.innerHTML = "";
        this.tarefas.buscarFeitas().forEach(item => {
            lista.innerHTML += `<li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-8">${item.desc}</div>
                                        <div class="col-md-2"><img width="40" src="./assets/ok1.png" onclick="controller.aoClicarOK(${item.id})"></div>
                                        <div class="col-md-2"><img width="40" src="./assets/trash.png" onclick="controller.aoClicarExcluir(${item.id})"></div>
                                    </div>
                                </li>`;
        });
    }

    aoClicarOK(id){
        this.tarefas.alterarParaFeito(id);
        this.listarFeitos();
        this.listarNaoFeitos();
    }

    aoClicarExcluir(id){
        this.tarefas.excluirTarefa(id);
        this.listarFeitos();
        this.listarNaoFeitos();
    }

}