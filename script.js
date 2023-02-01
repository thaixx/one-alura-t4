const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

/* As "chaves" de criptografia que utilizaremos são:
 `A letra "a" é convertida para "alul"`
 `A letra "e" é convertida para "eng"`
 `A letra "i" é convertida para "ilha"`
 `A letra "o" é convertida para "oin"`
 `A letra "u" é convertida para "lru"`*/

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "eng"] , ["i" , "ilha"], ["a" ,"alul"] , ["o" , "oin"], ["u" , "lru"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "eng"] , ["i" , "ilha"], ["a" ,"alul"] , ["o" , "oin"], ["u" , "lru"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}
