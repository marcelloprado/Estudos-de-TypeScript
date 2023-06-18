// enum Colors {
//     Red,
//     Blue,
//     Green
// }

// function showColor(color) {
//     console.log(color);
// }

// showColor(Colors.Blue); // Exibe "Vermelho"

// enum UserResponse {
//   No = 0,
//   Yes = 1,
// }

// function respondedEmail (recipient: string, UserResponse: UserResponse): void {
//   // ... salvar no banco se o usuário respondeu ou não
// }

// respondedEmail('Caroline', UserResponse.Yes);

// enum TradeType {
//   ACAO = 9281,
//   TESOURO_DIRETO = 3221,
//   TESOURO_SELIC = 6554,
// }

// saveTrade(TradeType.TESOURO_DIRETO);

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
}

const ok = StatusCodes.OK; //200
// pegando pela string
const indexOK = StatusCodes['ok']; //200
// pegando o nome Badrequest
const stringBadRequest = StatusCodes[400]; // BadRequest