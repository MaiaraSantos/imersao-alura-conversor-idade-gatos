function calculo() {
  var resultado = document.getElementById("idade-gato").value;

  switch (resultado) {
    case "1": idade = "15 anos";
      break;
    case "2": idade = "24 anos";
      break;
    case "3": idade = "28 anos";
      break;
    case "4": idade = "32 anos";
      break;
    case "5": idade = "36 anos";
      break;
    case "6": idade = "40 anos";
      break;
    case "7": idade = "44 anos";
      break;
    case "8": idade = "48 anos";
      break;
    case "9": idade = "52 anos";
      break;
    case "10": idade = "56 anos";
      break;
    case "11": idade = "60 anos";
      break;
    case "12": idade = "64 anos";
      break;
    case "13": idade = "68 anos";
      break;
    case "14": idade = "72 anos";
      break;
    case "15": idade = "76 anos";
      break;
    case "16": idade = "80 anos";
      break;
    case "17": idade = "84 anos";
      break;
    case "18": idade = "88 anos";
      break;
    case "19": idade = "89 anos";
      break;
    case "20": idade = "93 anos";
      break;
    case "21": idade = "96 anos";
      break;
    case "22": idade = "99 anos";
      break;
    case "23": idade = "103 anos";
      break;
    default: idade = "Idade inválida. Tente de novo.";
  }
  return document.getElementById("resultado").value = idade;
}