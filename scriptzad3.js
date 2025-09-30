let number1 = 6;
let number2 = 2;
let operationType = "/";


switch (operationType) {
    case "+":
        ((number1+number2)%2)==0 ? console.log(number1+number2+" i jest to liczba parzysta"):console.log(number1+number2+" i jest to liczba nie parzysta");
    break;
    case "-":
    ((number1-number2)%2)==0 ? console.log(number1-number2+" i jest to liczba parzysta"):console.log(number1-number2+" i jest to liczba nie parzysta");
    break;
    case "*":
    ((number1*number2)%2)==0 ? console.log(number1*number2+" i jest to liczba parzysta"):console.log(number1*number2+" i jest to liczba nie parzysta");
    break;
    case "/":
        if (number2==0) {console.log("Działanie nie może być wykonane z powodu dzielenia przez zero.")} else if (((number1/number2)%2)==0) {console.log(number1/number2+" i jest to liczba parzysta")} else console.log(number1/number2+" i jest to liczba nie parzysta");;
    break;
    default:
        console.log("Wybrano nieprawidłową operację.")
} 