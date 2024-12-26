import { Cliente } from "./Cliente";

export class PessoaFisica extends Cliente{
    private _cpf : string;


	constructor(id: number , nome: string, genero: number, cor: string,tel: string,deficiencia: number, endereco: string, taxa: number ,cpf: string) {
        super(id,nome,genero,cor,tel,deficiencia,endereco,taxa)
        this._cpf = cpf
	}


  
	public get cpf(): string {
		return this._cpf;
	}

    
	public set cpf(value: string) {
		this._cpf = value;
	}
    
     
    public visualizar(): void {
        super.visualizar();
        console.log("CPF " + this._cpf)
    }



}