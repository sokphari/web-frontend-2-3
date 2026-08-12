/*
let p = document.querySelector('p')
// console.log(p)
p.textContent = "Hello World"
console.log(p)


let span = document.getElementById('span')
console.log(span)
//apply Element Html from JS --> html
span.innerHTML = '<h1>JavaScript easy to study</h1>'

// apply style
span.style.color = 'red'
span.style.textAlign = 'center'

*/

let username = document.getElementById('username')
let save = document.getElementById('save')
// console.log(username)
// console.log(save)

save.addEventListener('click',function(parameter){
    parameter.preventDefault()
    console.log("username : " + username.value)
})







// function fnAlert(){
//     alert("Out of Stock")
// }
// fnAlert()



