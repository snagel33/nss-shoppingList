const groceries = [
    {
        id: 1,
        name: "Milk",
        price: 2.99 
    },
    {
        id: 2,
        name: "Eggs",
        price: 2.59
    },
    {
        id: 3,
        name: "Pizza rolls",
        price: 4.99
    },
    {
        id: 4,
        name: "Chicken",
        price: 6.99
    },
    {
        id: 5,
        name: "Apples",
        price: 1.49 
    },
    {
        id: 6,
        name: "Sandwhich buns",
        price: 1.99
    }
]

//code to add new items to the grocery list with an id

const addToShoppingList = (name, price) => {
    const newGrocery = {
        name: name,
        price: price
    }
    const lastIndex = groceries.length - 1
    const currentLastGrocery = groceries[lastIndex]
    const maxId = currentLastGrocery.id
    const idForNewGrocery = maxId + 1
    newGrocery.id = idForNewGrocery
    newGrocery.dateCreated = new Date ().toLocaleDateString()
    groceries.push(newGrocery)
}

addToShoppingList("Steak", 12.99)
addToShoppingList("Oranges", 4.00)
addToShoppingList("Yogurt", 5.99)
addToShoppingList("Potatoes", 4.99)
addToShoppingList("Salsa", 4.29)

console.log(groceries)

//putting all groceries that are >8.00 into an array

const expensiveGroceries = () => {
    const expensiveGroceriesArray = []
    for(const grocery of groceries) {
        if(grocery.price > 8.00) {
            expensiveGroceriesArray.push(grocery)
        }
    }
        return expensiveGroceriesArray
    }   
const allExpensiveGroceries = expensiveGroceries()

console.log(allExpensiveGroceries)