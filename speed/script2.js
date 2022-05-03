const cpuCards = ['image/black/card-c1.png', 'image/black/card-c2.png', 'image/black/card-c3.png', 'image/black/card-c4.png',
    'image/black/card-c5.png', 'image/black/card-c6.png', 'image/black/card-c7.png', 'image/black/card-c8.png',
    'image/black/card-c9.png', 'image/black/card-c10.png', 'image/black/card-c11.png', 'image/black/card-c12.png',
    'image/black/card-c13.png', 'image/black/card-s1.png', 'image/black/card-s2.png', 'image/black/card-s3.png',
    'image/black/card-s4.png', 'image/black/card-s5.png', 'image/black/card-s6.png', 'image/black/card-s7.png',
    'image/black/card-s8.png', 'image/black/card-s9.png', 'image/black/card-s10.png', 'image/black/card-s11.png',
    'image/black/card-s12.png', 'image/black/card-s13.png']
    let Cpic = Array.from(document.querySelectorAll(".cimg"))
const newarray = cpuCards.map(function (value, index) {
    return Cpic[index].src = cpuCards[index]
})
console.log(newarray)
let tbox = []
function Getrid(){
    // const updatedArray = cpuCards.filter((card, index) => {
    //     return index !== 0;
    // })
        tbox.unshift(newarray[0])
        console.log(tbox)
        newarray.shift()

        // console.log(updatedArray);
        // Reload(updatedArray)
        Reload()
        

        // test.Map()
}
let items;
// function Reload(updatedArray){
//     items = cpuCards.map(function(value,index){
//         // return Cpic[index].src = newarray[index]
//         return Cpic[index].src = updatedArray[index]
//     })
// }
function Reload(){
    items = cpuCards.map(function(value,index){
        return Cpic[index].src = newarray[index]
        // return Cpic[index].src = updatedArray[index]
    })
}
let trash = document.getElementById('btn')
trash.addEventListener("click", Getrid)
// let reload = document.getElementById('btn-1')
// reload.addEventListener("click", Reload)
// function Start(){
//     for(let i = 0; i < 26; i++){
//         let filed  = document.getElementById('filed2');
//         let img = document.createElement('img')
//         let cards = filed.appendChild(img)
//         cards.className = "cimg"
//     }
//     Cpic = Array.from(document.querySelectorAll(".cimg"))
//     newarray = cpuCards.map(function(value,index){
//             return Cpic[index].src = cpuCards[index]
// })
// console.log(newarray)

// }

