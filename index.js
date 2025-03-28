import retornaSerieDia from "./serie/serie.jsnode";

let data = new Date();
let diaSemana = data.getDay();

let serieDoDia = retornaSerieDia(diaSemana);

console.log("Serie do dia: "+serieDoDia);