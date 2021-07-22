
function decrypt() {
    let encryptedValue = document.getElementById("encryptedValue").value;
    encryptedValue = encryptedValue.toUpperCase();
/*  
    !Probé y no funcionó, por que el valor ascii es distinto a la ubicación por diccionario, por ejemplo
    !si yo ingreso la A mayúscula, y le resto 13, el valor ascii que me devuelve, corresponde a un número, y no a una letra.
    let decryptedValueArray = [];
    
    for (let index = 0; index < encryptedValue.length; index++) {
        // decryptedValueArray.push(encryptedValue[index]);
        decryptedValueArray.push(encryptedValue.charCodeAt(index));
    }
    console.log("🚀 ~ file: index.js ~ line 10 ~ decrypt ~ decryptedValueArray", decryptedValueArray);
    decryptedValueArray.forEach(element => {
    console.log("🚀 ~ file: index.js ~ line 13 ~ decrypt ~ element", element);
        
    }); */


    //TODO Crear diccionario con letras y valor de letra equivalente a su posición en el diccionario
    //TODO de ahí recorrer y realizar las restas correspondientes.
    
    document.getElementById("result").innerHTML = encryptedValue;

}


let dictionary = [
    'a','0',
    'b','1',
    'c','2',
    'd','3',
    'e','4',
    'f','5',
    'g','6',
    'h','7',
    'i','8',
    'j','9',
    'k','10',
    'l','11',
    'm','12',
    'm','13',
    'n','14',
    'o','15',
    'p','16',
    'q','17',
    'r','18',
    's','19',
    't','20',
    'u','21',
    'v','22',
    'w','23',
    'x','24',
    'y','25',
    'z','26',
    'A','27',
    'B','28',
    'C','29',
    'D','30',
    'E','31',
    'F','32',
    'G','33',
    'H','34',
    'I','35',
    'J','36',
    'K','37',
    'L','38',
    'M','39',
    'N','40',
    'O','41',
    'P','42',
    'Q','43',
    'R','44',
    'S','45',
    'T','46',
    'U','47',
    'V','48',
    'W','49',
    'X','50',
    'Y','51',
    'Z','52',
];



//? Ingresar una palabra
//? Buscarla dentro del diccionario
//? Cuando la encuentre, guardar la posición en la que lo encuentre, ya que por ejemplo si encuentra la letra A en la posición 40
//? en el array diccionario, como empieza desde el 0, la letra A está en la posición 39 del array, y en la posición 40 del array, va a estar el valor
//? de la letra A en el diccionario
//? Por ejemplo, si la letra A está en la posición 40, en el array va a estar en la posición 39, y en la posición 40 va a estar el numero 27, 
//? que es la posición de la A en el diccionario