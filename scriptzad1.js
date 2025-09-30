let userName = "krzysztof";
let userAge = 44;
let likesJavaScript = true;
let userHobby = "pływanie";
let userCity = "Gorzów Wlkp";
let userNameCorrected = "Krzysztof";
let userAge10 = userAge + 10;
let ofAge = userAge >= 18 ? true : false;
let isWarsawCitizen = userCity == "Warszawa" ? true : false;
let likesJSAndIsAdult;
if ((ofAge == true) & (likesJavaScript == true)) {
  likesJSAndIsAdult = true;
} else likesJSAndIsAdult = false;
let Welcome = `Cześć ${userNameCorrected} masz już ${userAge} lata.`;
likesJavaScript == true ? (Welcome += ` Fajnie że lubisz JS.`) : false;
isWarsawCitizen == true ? (Welcome += ` Widzę że mieszkasz w Warszawie`) : false;
Welcome += ` Twoje hobby ${userHobby} jest bardzo ciekawe`;
