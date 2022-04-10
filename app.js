let fucti=['olma','anor','uzum','apelsin']

let x=''

for(const iii of fucti ){
    x=x+`<li> ${iii}</li>`
}

document.getElementById('zzz').innerHTML = x


let name=['Anvar', '25','+998991553047']
let y=''
for(let num of name){
    y=y+`<td> ${num}</td>`
}
document.getElementById('pp').innerHTML = y

let name1=['Sobirjon','20','+998994552619']
let s=''
for(let num1 of name1){
    s=s+`<td> ${num1} </td>`
}
document.getElementById('pp1').innerHTML =s;    

let name2 = ['Muxammadjon','18','+998997564424']
let h=''
for(let numd of name2 ){
    h=h+`<td> ${numd}</td>`

}
document.getElementById('ppq').innerHTML = h
    