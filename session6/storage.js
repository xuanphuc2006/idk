const str = "hello world"

const student = {
    name: "Duong",
    age: 15
}

const student2 = {
    name: "phuc",
    age: 15
}


const arr = [ student,student2]

const stringtifyArray = JSON.stringify(arr)

localStorage.setItem("keyword", stringtifyArray)

const value = localStorage.getItem("keyword")

const parsedValue = JSON.parse(value )

localStorage.setItem("session", str )
localStorage.getItem("session" )
localStorage.removeItem("session" )