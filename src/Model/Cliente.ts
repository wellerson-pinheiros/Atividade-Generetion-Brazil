export abstract class Cliente {
   
    private _id: number;
    private _nome: string
    private _genero: number;
    private _cor: string;
    private _tel: string;
    private _deficiencia: number;
    private _endereco: string;
    private _taxa:number;
    


	constructor(id: number , nome: string, genero: number, cor: string,tel: string,deficiencia: number, endereco: string, taxa: number) {
	
    this._id = id;
    this._nome = nome
    this._genero = genero;
    this._cor = cor;
    this._tel = tel;
    this._deficiencia = deficiencia;
    this._endereco = endereco;
    this._taxa = taxa
    }
        
	public get id(): number {
		return this._id;
    }

    public get nome(): string {
        return this._nome
    }
   
	public get genero(): number {
		return this._genero;
	}

   
	public get cor(): string {
		return this._cor;
	}

	public get tel(): string {
		return this._tel;
	}

  
	public get Deficiencia(): number {
		return this._deficiencia;
	}

   
	public get endereco(): string {
		return this._endereco;
	}

    public get taxa(): number {
        return this._taxa
    }
   
	public set id(value: number) {
		this._id = value;
	}

    public set nome (value: string) {
        this._nome = value;
    }
 
	public set genero(value: number) {
		this._genero = value;
	}

   
	public set cor(value: string) {
		this._cor = value;
	}

    
	public set tel(value: string) {
		this._tel = value;
	}

	public set Deficiencia(value: number) {
		this._deficiencia = value;
	}

   
	public set endereco(value: string) {
		this._endereco = value;
	}
    
    public set taxa (value: number) {
        this._taxa = value;
    }

    visualizar(){

        let tipoDeficiencia: string = "";
          
        switch (this._deficiencia) {
            case 1:
                    "Sim"
                break;
            case 2:
                    "nao"
                break;    
           
        }

        console.log("Dados do Cliente ")
        console.log("***********************")
        console.log("Nome do cliente " + this._nome)
        console.log("Id do cliente" + this._id)
        console.log("Genero")
        console.log("Cor do cliente " + this._cor)
        console.log("tel : " + this._tel) 
        console.log('deficiente:  ' + this._deficiencia )
        console.log("endereço: " + this._endereco)
        console.log(" A taxa do cliente : " + this._taxa)
    }
    
}

	
	
