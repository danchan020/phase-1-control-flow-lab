

function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return `This one is on me!`;}
  else if (400<feet && feet<=2000){
    return `That will be twenty bucks.`;}   
  else if (2000<feet && feet <2500){
      return `I will gladly take your thirty bucks.`;}
  else {
      return `No can do.`;}
}
  

function ternaryCheckCity(destination){return destination === `NYC` ? `Ok, sounds good.` : `No go.`};



function switchOnCharmFromTip(charm){
  switch(charm){
    case `generous`: 
      return "Thank you so much.";
      break;
  case `not as generous`:
      return "Thank you.";
      break;
  default:
     return `Bye.`;
      break;
}
}