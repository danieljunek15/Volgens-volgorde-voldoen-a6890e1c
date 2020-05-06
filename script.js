const check = ['Parijs', '8', 'Ijselmeer',
['Volkswagen', 'Audi', 'Opel', 'Porsche', 'BMW', 'Mercedes', 'Mercedes-Benz'],
["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];
var count = 0; 

const toetsVragen = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel benen heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Noem een duits automerk",
    "Noem een waddeneiland",
];
document.getElementById('Hooftstad').innerHTML = toetsVragen[0];
document.getElementById('Poten').innerHTML = toetsVragen[1];
document.getElementById('Grootste').innerHTML = toetsVragen[2];
document.getElementById('Duits').innerHTML = toetsVragen[3];
document.getElementById('Eiland').innerHTML = toetsVragen[4];

function Conteroleer() {
    const Frankrijk = document.getElementById('Frankrijk').value;
    const Spin = document.getElementById('Spin').value;
    const Meer = document.getElementById('Meer').value;
    const Automerk = document.getElementById('Automerk').value;
    const Waddeneiland = document.getElementById('Waddeneiland').value;
    if (Frankrijk == check[0]) {
        document.getElementById('Frankrijk').style.backgroundColor = "green";
        count += 1;
    } else {
        document.getElementById('Frankrijk').style.backgroundColor = "red";
    }
    if (Spin == check[1]) {
        document.getElementById('Spin').style.backgroundColor = "green";
        count += 1;
    } else {
        document.getElementById('Spin').style.backgroundColor = "red";
    }
    if (Meer == check[2]){
        document.getElementById('Meer').style.backgroundColor = "green";
        count += 1;
    } else {
        document.getElementById('Meer').style.backgroundColor = "red";
    }
    if (check[3].includes(Automerk)) {
        document.getElementById('Automerk').style.backgroundColor = "green";
        count += 1;
    } 
    else {
        document.getElementById('Automerk').style.backgroundColor = "red";
    }
    if (check[4].includes(Waddeneiland)) {
        document.getElementById('Waddeneiland').style.backgroundColor = "green";
        count += 1;
    }
    else {
        document.getElementById('Waddeneiland').style.backgroundColor = "red";
    }
    if (count > 5) {
        count = 0;
    }
    if (count == 5) {
        document.getElementById('score').innerHTML = "Je hebt alles goed";
    }
    else if (count < 5) {
        document.getElementById('score').innerHTML = "Jouw score is:" + count;
    }
}


