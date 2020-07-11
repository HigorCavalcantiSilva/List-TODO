export default class Tarefas {

    constructor(){
        this.arrTarefas = [];
    }

    cadastrar(atv){
        let id;
        if(this.arrTarefas.length == 0){
            id = 1;
        } else {
            id = this.arrTarefas[this.arrTarefas.length - 1].id + 1;
        }
        this.arrTarefas.push({
            id: id,
            desc: atv,
            feito: false
        });
    }

    buscarNaoFeitas(){
        let res = [];
        this.arrTarefas.forEach(atv => {
            if(!atv.feito){
                res.push(atv);
            }
        });
        return res;
    }

    buscarFeitas(){
        let res = [];
        this.arrTarefas.forEach(atv => {
            if(atv.feito){
                res.push(atv);
            }
        });
        return res;
    }

    buscarItemPorId(id){
        for(let c = 0; c < this.arrTarefas.length; c++){
            if(this.arrTarefas[c].id == id){
                return c;
            }
        }
        return -1;
    }
    
    alterarParaFeito(id){
        let i = this.buscarItemPorId(id);
        this.arrTarefas[i].feito = !this.arrTarefas[i].feito;
    }

    excluirTarefa(id){
        let i = this.buscarItemPorId(id);
        this.arrTarefas.splice(i, 1);
    }

}