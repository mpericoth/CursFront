setTimeout(() => {
    const ej =
      window.prompt(`1. Crea dues variable numèriques i assigna dos números, Suma’ls i mostra el valor per
    consola.
    2. Utilitzant tant les cometes simples com les dobles per a inicialitzar la variable, crea
    un programa que mostri en una finestra:
    I’m = I am
    You’re = You are
    
    3. Implementa un programa que comprovi que les dades introduïdes són números.
    4. Fes un programa que demani dos números a l’usuari i informi per pantalla de quin és
    el menor i el major, o si són iguals.
    5. Fes un programa que demani un número a l’usuari i calculi si és parell o senar.
    6. Fes un programa que demani a l’usuari l’altura i el pes i mostri per pantalla el seu
    índex de massa corporal (IMC)
    7. Considerant la següent assignació: let marca="total"+ 16 +4
    obté per consola total20`);
  
    switch (Number(ej)) {
      case 1: //1
        const num1Ej1 = 5;
        const num2Ej1 = 10;
  
        console.log(num1Ej1 + num2Ej1);
        break;
      case 2: //2
        const string1 = "I'm= I am\nYou're=You are";
        window.alert(string1);
        break;
      case 3:
        //3
        const num = window.prompt("Introduce un numero: ");
        if (isNaN(parseInt(num)) || isNaN(parseFloat(num))) {
          document.getElementById("Ej3").innerHTML = "No es un numero";
        } else document.getElementById("Ej3").innerHTML = "Es un numero";
  
        break;
      case 4:
        //4
        const num1Ej4 = window.prompt("Introduce un numero: ");
        const num2Ej4 = window.prompt("Introduce un numero: ");
        if (num1Ej4 == num2Ej4) {
          document.getElementById("Ej4").innerHTML = "Son iguales";
        } else if (num1Ej4 > num2Ej4) {
          document.getElementById("Ej4").innerHTML = "El primero es mayor";
        } else document.getElementById("Ej4").innerHTML = "El segundo es mayor";
  
        break;
      case 5:
        //5
        const numParell = window.prompt("Introduce un numero");
        if (numParell % 2 == 0) {
          document.getElementById("Ej5").innerHTML = "Es parell";
        } else document.getElementById("Ej5").innerHTML = "No es parell";
  
        break;
      case 6:
        //6
        const peso = window.prompt("Introduce tu peso");
        const altura = window.prompt("Introduce tu altura");
        document.getElementById("Ej6").innerHTML =
          "El imc es: " + (peso / (Math.pow(altura,2))).toFixed(2);
  
        break;
      case 7:
        const marca = "total" + (16 + 4);
        console.log(marca);
        break;
    }
  }, 500);
  
  /*
  let d = new Date();
  document.getElementById("demo").innerHTML = d;
  console.log(d);
  d = new Date();
  setTimeout(() => {
    window.alert(d);
  }, 1000);
  */
  