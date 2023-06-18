        // FEITO INTERFACE

interface ICustomer {
    name: string;
    age: number;
}

interface IAdress {
    street: string;
}

interface ICustomerProfile extends ICustomer, IAdress {
    id: number | string
}

//vou criar um objeto herdando a herança 
const NewProfile: ICustomerProfile = {
    name: "Marcello",
    age: 40,
    street: "Rua 1001",
    id: "user001"
}


        // FEITO COM TYPE

type TCustomer = {
    name: string;
    age: number;
    id: number | string;
}

type TAdress = {
    street: string;
}

type TCustomerProfile = TCustomer & TAdress;

//vou criar um objeto herdando a herança
const NewProfile2: TCustomerProfile = {
    name: "Marcello",
    age: 40,
    street: "Rua 1001",
    id: "user002"
}