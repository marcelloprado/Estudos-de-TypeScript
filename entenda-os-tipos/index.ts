function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
 }
 
 const userName = "Marcello"
 const isLogged = true
 
 sendMessage(userName, isLogged)

//  let idades: number[] = [12, 22, 39]; 
 let nomes: string[] = ['Marcello', 'Camila', 'Paçoca', 'Tobi'];
 let idades: Array<number> = [12, 22, 39];

//  let obj: any = {x:0};

 function imprimirCoordenadas(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
   }
   imprimirCoordenadas({ x: 3, y: 7 });

   let obj: { x: number; y:number } = { x: 3, y: 7 };