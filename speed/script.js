window.addEventListener('DOMContentLoaded', (event) => {
    
});

const cpuCards = ['image/black/card-c1.png', 'image/black/card-c2.png', 'image/black/card-c3.png', 'image/black/card-c4.png',
    'image/black/card-c5.png', 'image/black/card-c6.png', 'image/black/card-c7.png', 'image/black/card-c8.png',
    'image/black/card-c9.png', 'image/black/card-c10.png', 'image/black/card-c11.png', 'image/black/card-c12.png',
    'image/black/card-c13.png', 'image/black/card-s1.png', 'image/black/card-s2.png', 'image/black/card-s3.png',
    'image/black/card-s4.png', 'image/black/card-s5.png', 'image/black/card-s6.png', 'image/black/card-s7.png',
    'image/black/card-s8.png', 'image/black/card-s9.png', 'image/black/card-s10.png', 'image/black/card-s11.png',
    'image/black/card-s12.png', 'image/black/card-s13.png']
const pCards = ['image/red/card-d1.png', 'image/red/card-d2.png', 'image/red/card-d3.png', 'image/red/card-d4.png',
    'image/red/card-d5.png', 'image/red/card-d6.png', 'image/red/card-d7.png', 'image/red/card-d8.png',
    'image/red/card-d9.png', 'image/red/card-d10.png', 'image/red/card-d11.png', 'image/red/card-d12.png',
    'image/red/card-d13.png', 'image/red/card-h1.png', 'image/red/card-h2.png', 'image/red/card-h3.png',
    'image/red/card-h4.png', 'image/red/card-h5.png', 'image/red/card-h6.png', 'image/red/card-h7.png',
    'image/red/card-h8.png', 'image/red/card-h9.png', 'image/red/card-h10.png', 'image/red/card-h11.png',
    'image/red/card-h12.png', 'image/red/card-h13.png']
// let Cpic = Array.from(document.querySelectorAll(".cimg"))
let Ppic = document.querySelectorAll(".pimg")
let field1 = document.querySelector(".field-c1")
let field2 = document.querySelector(".field-c2")
let RanCpudeck = []
let Rnumber = []
// let field = []
// for(let i = 0; i < 26; i++){
//     let num = Math.floor(Math.random() * cpuCards.length) ;
//     cpuHands = cpuCards.splice(num,1)
//     RanCpudeck.push(cpuHands)
//     // console.log(RanCpudeck)
// }

// for(let i =0; i < 26; i++){
//     Cpic[i].src = RanCpudeck[i]
// }
// let imgBox = []
// class bringArray{
//         constructor(){

//         }
//         Map(){
//             cpuCards.map(function(value,index){
//                 return Cpic[index].src = cpuCards[index]
//             });
//         }
// }
// const obj = {
//     prop1: 1,
//     prop2: cpuCards.map(function(value,index){
//         return Cpic[index].src = cpuCards[index]
//     }),

// };
// obj.prop2
// console.log(obj.prop2)
// console.log(obj)
// let tbox = []
// const newarray = cpuCards.map(function(value,index){
//             return Cpic[index].src = cpuCards[index]
// })
// console.log(newarray)


let tbox = []
let items
function Getrid() {
    localStorage.key1 = 1
    tbox.unshift(cpuCards[0])
    console.log(tbox)
    cpuCards.shift()
    console.log(cpuCards)
    let remove_El = document.getElementById("field2")
    remove_El.remove()
    let field1 = document.getElementById('field1');
    let field2_div = document.createElement('div');
    let field1_field2 = field1.appendChild(field2_div);
    field1_field2.setAttribute("id", "field2")
    let field2 = document.getElementById('field2');
    for (let i = 0; i < Cpic.length; i++) {
        let img = document.createElement('img')
        let cards = field2.appendChild(img)
        cards.className = "cimg"
    }
    Cpic = Array.from(document.querySelectorAll(".cimg"))
    // items = cpuCards.map(function(value,index){
    //     return Cpic[index].src = cpuCards[index]
    // })
    console.log(Cpic.length)
    for(let i = 0; i < Cpic.length; i++){
        Cpic[i].src = cpuCards[i]
    }
    console.log(tbox)
    Movecardtofield()
}
function Movecardtofield(){
    let comofield = document.getElementById("common_field");
    let comofield_div = document.createElement('div');
    comofield.appendChild(comofield_div).setAttribute("id", "common_field2");
    let coommon_field2 = document.getElementById("common_field2")
    let fimg = document.createElement('img')
    let filedcards = coommon_field2.appendChild(fimg)
    filedcards.className = "fimg"
    filedcards.src = tbox[0]
}
// function Reload(){
// }
// const test = new bringArray
// test.Map()(
let newarray
function Start() {
    let field1 = document.getElementById('field1');
    let field2_div = document.createElement('div');
    let field1_field2 = field1.appendChild(field2_div);
    field1_field2.setAttribute("id", "field2")
    let field2 = document.getElementById('field2');
    for (let i = 0; i < 4; i++) {
        let img = document.createElement('img')
        let cards = field2.appendChild(img)
        cards.className = "cimg"
    }
    Cpic = Array.from(document.querySelectorAll(".cimg"))
    // newarray = cpuCards.map(function (value, index) {
    //     return Cpic[index].src = cpuCards[index]
    // })
    for(let i = 0; i < Cpic.length; i++){
        Cpic[i].src = cpuCards[i]
    }
    console.log(newarray)

}






let trash = document.getElementById('btn')
trash.addEventListener("click", Getrid)
let start = document.getElementById('btn-1')
start.addEventListener("click", Start)
