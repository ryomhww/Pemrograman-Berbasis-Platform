let studentsScore = [
    {
        name: 'andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    },
    {
        name: 'lala',
        score: 100
    }
];
let nilaitertinggi = [];

let nilai1 = 0;
let nilai2 = 0;

for (let i = 0; i < studentsScore.length; i++) {
    if (studentsScore[i].score >= nilai1) {
        nilai2 = nilai1;
        nilai1 = studentsScore[i].score;
    } else if (studentsScore[i].score > nilai2) {
        nilai2 = studentsScore[i].score;
    }
}
for (let i = 0; i < studentsScore.length; i++) {
    if (studentsScore[i].score === nilai1 || studentsScore[i].score === nilai2) {
        nilaitertinggi.push(studentsScore[i]);
    }
}
for (let i = 0; i < nilaitertinggi.length; i++) {
    console.log("Siswa dengan nilai tertinggi ke-" + (i + 1) + " adalah: " + nilaitertinggi[i].name);
    console.log("Nilainya adalah: " + nilaitertinggi[i].score);
}
