let nomeDoHeroi = "Zubu Mafu"
let xpDoHeroi = 99999
let nivelDoHerói = classificacao(xpDoHeroi)
function classificacao(xpDoHeroi){
if(xpDoHeroi <= 1000){
    return "Ferro"
}else if(xpDoHeroi <= 2000){
    return "Bronze"    
}else if(xpDoHeroi <= 5000){
    return "Prata"
}else if(xpDoHeroi <= 7000){
    return "Ouro"
}else if(xpDoHeroi <= 8000){
    return " Platina"
}else if(xpDoHeroi <= 10000){
    return "Imortal"
}else{
    return "GOD"
}}
console.log("O Herói de nome "+nomeDoHeroi+" está no nível "+nivelDoHerói)