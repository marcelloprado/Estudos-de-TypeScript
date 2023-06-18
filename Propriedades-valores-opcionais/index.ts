type Customer = {
    firstname: string;
    lastName?: string;
    age: number;
}

const newCustomer: Customer = {
    firstname: "Marcello",
    age: 52,
}

console.log(newCustomer);
 
function printName(firstname: string, lastName?: string) {
    console.log(`O primeiro nome é: ${firstname}`);
    console.log(`O último nome é: ${lastName}`);
}

printName("Marcello", "não preciso do seundo parâmetro")

