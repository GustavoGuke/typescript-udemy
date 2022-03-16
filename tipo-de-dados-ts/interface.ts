// interface Pessoa {
//     name: string,
//     lastName: string,
//     age: number
// }

// const person:Pessoa ={
//     name: "Gustavo",
//     lastName:"Lima",
//     age: 27
// }

// function showPessoa(person:Pessoa){
//     console.log(person.name)
// }
// showPessoa(person)

// literal types

const what = (nameType: "Gustavo" | "Kessilin" | "Kerolin") => console.log(nameType)

what("Kessilin")