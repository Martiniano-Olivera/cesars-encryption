
function decrypt() {
    let encryptedValue = document.getElementById("encryptedValue").value;
    encryptedValue = encryptedValue.toUpperCase();
    let encryptedValueSplitted = encryptedValue.split('');
    let result=[];
    encryptedValueSplitted.forEach(letter => {
        result.push(findInDictionary(letter));
    });
    result = result.join('').toUpperCase();
    document.getElementById("result").innerHTML = result;

}

function findInDictionary(letter) {
    var specialCharactersRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    for (let index = 0; index < dictionary.length; index++) {
        if ((!(specialCharactersRegex.test(letter))) && letter === dictionary[index]) {
            return dictionary[index-13];
        }
        else{
            if (specialCharactersRegex.test(letter)){
                return letter;
            }
        }
    }
}

let dictionary = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];



//? Ingresar una palabra
//? Buscarla dentro del diccionario
//? Cuando la encuentre, guardar la posición en la que lo encuentre, ya que por ejemplo si encuentra la letra A en la posición 40
//? en el array diccionario, como empieza desde el 0, la letra A está en la posición 39 del array, y en la posición 40 del array, va a estar el valor
//? de la letra A en el diccionario
//? Por ejemplo, si la letra A está en la posición 40, en el array va a estar en la posición 39, y en la posición 40 va a estar el numero 27, 
//? que es la posición de la A en el diccionario