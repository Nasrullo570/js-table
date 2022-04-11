let fucti = ['olma', 'anor', 'uzum', 'apelsin']

let x = ''

for (const iii of fucti) {
    x = x + `<li> ${iii}</li>`
}

document.getElementById('zzz').innerHTML = x


let name = [{
        names: 'Anvar',
        age: 26,
        number: +998991553047
    },
    {
        names: 'Ali',
        age: 25,
        number: +998991553011
    },
    {
        names: 'Mansur',
        age: 24,
        number: +998991553055
    },
]
let y = ''
for (let i = 0; i < name.length; i++) {
    y = y + `<tbody><tr><td>${name[i].names}</td> <td>${name[i].age}</td> <td>${name[i].number}</td></tr></tbody>`
}

document.getElementById('pp').innerHTML = y