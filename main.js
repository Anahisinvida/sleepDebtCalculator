const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day){
  case "monday":
    return 8;
    break;
  case "tuesday":
    return 8;
    break;
   case "wednesday":
    return 8;
    break;
   case "thursday":
    return 8;
    break;
   case "friday":
    return 8;
    break;
   case "saturday":
    return 8;
    break;
   case "sunday":
    return 8;
    break;
   default:
    console.log(`Sorry, we are waiting a day of the day`);
  }
}

//para probar la consola, tienes que tomar LA FUNCIÓN y pasarle el parámetro. 
console.log(getSleepHours("Sunday"));

/* const getActualSleepHours = () => {
  return getSleepHours("monday")  
 + getSleepHours("tuesday") 
 + getSleepHours("wednesday") 
 + getSleepHours("thursday") 
 + getSleepHours("friday") 
 + getSleepHours("saturday") 
 + getSleepHours("sunday") ;
}
 */

const getActualSleepHours = () => 6 + 6 + 6 + 6 + 6 + 6 + 6;


//para hacer la suma de horas al día de la semana, hacemos un RETURN primero, luego la suma de los días de la semana que ya equivalen a 8. 
console.log(getActualSleepHours());

/* const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
} */

const getIdealSleepHours = idealHours => idealHours * 7;


//Tengo que ppensar en mis ideal número de horas de sueño, después creo una variable que me diga cuál es mi ideal de horas y regresar ese número multuplicado por los días de la semana. 
//console.log(getIdealSleepHours(6));

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(8);

 if(actualSleepHours === idealSleepHours) {
   console.log("You got the perfect amount of sleep.") 
 } else if (actualSleepHours < idealSleepHours){
   console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less slee than you needed this week. Get some rest`) 
 } else {
    console.log("You are sleeping too much") 
 }

 
}

//Con operadores lódigos tienes que comprar tus dos variables. 
console.log (calculateSleepDebt());
