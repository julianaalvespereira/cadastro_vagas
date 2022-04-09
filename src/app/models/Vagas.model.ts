export class Vaga{
    id!: number;
    descricao!: string;
    salario!: number;
    local!: string    

    constructor(id:number,descricao:string,salario:number,local:string){
        this.id = id;
        this.descricao = descricao;
        this.salario = salario;
        this.local = local       
    }
}