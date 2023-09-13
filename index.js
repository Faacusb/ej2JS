 const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// Punto 1
// Las pizzas que tengan un id impar.


const pizzaImpar = (pizzasArray) => {
  pizzasArray.forEach((pizza) => { if (pizza.id%2 ===1) {
  
    return  console.log(`La ${pizza.nombre} tiene el id ${pizza.id} y es impar.`)
  }   
  });
  }
  pizzaImpar(pizzas)




// Punto 2

//  Responder: ¿Hay alguna pizza que valga menos de $600?


const pizzaMenorA600 = pizzas.find((pizza)=> pizza.precio <600)
const pizzaMenorA600Name = pizzaMenorA600.nombre
      

console.log(`Si, la pizza que vale menos de $600 es la ${pizzaMenorA600Name}`)

//   El nombre de cada pizza con su respectivo precio.



const cadaNombre = pizzas.forEach(pizzaNombre => console.log(`El producto:  ${pizzaNombre.nombre} sale: $ ${pizzaNombre.precio}`))



// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 

// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.


const pizzasEIngredientes = pizzas.forEach(gustos => console.log(`Estas son nuestras pizzas:  ${gustos.nombre} y sus ingredientes son:  ${gustos.ingredientes}`))