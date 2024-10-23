let heroi = {
    nome: "Herói X", 
    xp: 9500        
};
let nivel;

if (heroi.xp < 1000) {
    nivel = "Ferro";
} else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    nivel = "Bronze";
} else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    nivel = "Prata";
} else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
    nivel = "Ouro";
} else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    nivel = "Platina";
} else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    nivel = "Ascendente";
} else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    nivel = "Imortal";
} else if (heroi.xp >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Nível desconhecido";
}

console.log("O herói de nome " + heroi.nome + " Está no nível de " + nivel);

