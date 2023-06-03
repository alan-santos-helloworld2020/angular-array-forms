export interface ICliente {
    nome:string;
    cpf:string;
    email:string | null;
    contatos:[
        {
            telefone:string | null;
            celular:string | null;
        }
    ]
}
