import { Decipher } from "crypto";
import { Cliente } from "./Cliente";

export class PessoaJuridica extends Cliente{

    private _cnpj: string;


	constructor(id: number , nome: string, genero: number, cor: string,tel: string,deficiencia: number, endereco: string, taxa: number ,cnpj: string) {

        super(id,nome,genero,cor,tel,deficiencia,endereco,taxa)
		this._cnpj = cnpj;
	}


    
	public get cnpj(): string {
		return this._cnpj;
	}

    
	public set cnpj(value: string) {
		this._cnpj = value;
	}

    visualizar(): void {
        super.visualizar()
        console.log('CNPJ' + this._cnpj)
    }

}