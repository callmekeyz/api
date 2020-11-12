import ajax from "ajax.js"
import{getElements, makeElements}from "elements.js"

ajax("https://dog.ceo/api/breeds/list/all",(data)=>{
    console.log(JSON.parse(data))
})

let b = getElements("body");
let container = makeElements("div",{class: :card})
container.style = "border: solid black 1px;"
b.append(container)