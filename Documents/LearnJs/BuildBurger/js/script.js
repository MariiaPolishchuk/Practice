
// const SIZE_SMALL = {
//     name: 'Small',
//     price: 50,
//     calories: 20
// };

// const SIZE_MEDIUM = {
//     name: 'Medium',
//     price: 75,
//     calories: 30
// };

// const SIZE_LARGE = {
//     name: 'Large',
//     price: 100,
//     calories: 40
// };

// const TOPPING_CHEESE = {
//     name: 'Cheese',
//     price: 10,
//     calories: 20
// };

// const TOPPING_SALAD = {
//     name: 'Salad',
//     price: 20,
//     calories: 5
// };

// const TOPPING_POTATO = {
//     name: 'Potato',
//     price: 15,
//     calories: 10
// };

// const TOPPING_SPICE = {
//     name: 'Spice',
//     price: 15,
//     calories: 0
// };

// const TOPPING_MAYO = {
//     name: 'Mayo',
//     price: 20,
//     calories: 5
// };

// document.addEventListener('DOMContentLoaded', function () {
//     const sizeElement = document.getElementById('size');
//     const cheeseButton = document.getElementById('cheese');
//     const saladButton = document.getElementById('salad');
//     const potatoButton = document.getElementById('potato');
//     const spiceButton = document.getElementById('spice');
//     const mayoButton = document.getElementById('mayo');
//     const sendButton = document.getElementById('sendButton');
//     const resultElement = document.getElementById('res');

//     let selectedOptions = {
//         size: null,
//         modifiers: []
//     };

//     sizeElement.addEventListener('change', function () {
//         selectedOptions.size = getSize();
//         updateResult();
//     });

//     cheeseButton.addEventListener('click', function () {
//         addModifier(TOPPING_CHEESE);
//     });

//     saladButton.addEventListener('click', function () {
//         addModifier(TOPPING_SALAD);
//     });

//     potatoButton.addEventListener('click', function () {
//         addModifier(TOPPING_POTATO);
//     });

//     spiceButton.addEventListener('click', function () {
//         addModifier(TOPPING_SPICE);
//     });

//     mayoButton.addEventListener('click', function () {
//         addModifier(TOPPING_MAYO);
//     });

//     sendButton.addEventListener('click', function () {
//         selectedOptions.size = getSize();
//         updateResult();

//         if (confirm(`Check your order:\n\n${resultElement.textContent}\n\nDo you want to confirm?`)) {
//             alert('Your order has been confirmed!');
//             resetOrder();
//         } else {
//             alert('Your order has been canceled.');
//         }
//         resultElement.innerText = 'THANK YOU!!'
//         resultElement.classList.add('thank')
//         setTimeout(function () {
//             resultElement.innerText = '';
//             resultElement.classList.remove('thank');
//             resultElement.classList.remove('result');
//         }, 5000);
//     });

//     function addModifier(modifier) {
//         selectedOptions.modifiers.push(modifier);
//         updateResult();
//     }

//     function getSize() {
//         const sizeValue = sizeElement.value;
//         switch (sizeValue) {
//             case 'small':
//                 return SIZE_SMALL;
//             case 'medium':
//                 return SIZE_MEDIUM;
//             case 'large':
//                 return SIZE_LARGE;
//             default:
//                 return null;
//         }
//     }

//     function calculateCalories() {
//         let totalCalories = selectedOptions.size ? selectedOptions.size.calories : 0;
//         for (let modifier of selectedOptions.modifiers) {
//             totalCalories += modifier.calories;
//         }
//         return totalCalories;
//     }

//     function updateResult() {
//         let resultText = '';
//         if (selectedOptions.size) {
//             resultText += `Size: ${selectedOptions.size.name}`;
//         } else {
//             resultText += `\nSize: Not selected`;
//         }
//         resultText += `\nAdditional: `;
//         if (selectedOptions.modifiers.length > 0) {
//             for (let modifier of selectedOptions.modifiers) {
//                 resultText += `${modifier.name}, `;
//             }
//         } else {
//             resultText += `None`;
//         }
//         resultText += `\nTotal Calories: ${calculateCalories()}`;
//         resultElement.textContent = resultText;
//         resultElement.classList.add('result')
//     }

//     function resetOrder() {
//         selectedOptions = {
//             size: null,
//             modifiers: []
//         };
//         sizeElement.value = '';
//         updateResult();
//     }
// });

const SIZE_SMALL = { price: 50, calories: 20 };
const SIZE_MEDIUM = { price: 75, calories: 30 };
const SIZE_LARGE = { price: 100, calories: 40 };

const TOPPING_CHEESE = { price: 10, calories: 20 };
const TOPPING_SALAD = { price: 20, calories: 5 };
const TOPPING_POTATO = { price: 15, calories: 10 };
const TOPPING_SPICE = { price: 15, calories: 0 };
const TOPPING_MAYO = { price: 20, calories: 5 };

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = new Hamburger(SIZE_SMALL);

    document.getElementById('size').addEventListener("change", function () {
        const selectedSize = this.value;
        if (selectedSize === 'small') {
            hamburger.size = SIZE_SMALL;
        }

        if (selectedSize === 'medium') {
            hamburger.size = SIZE_MEDIUM;
        }
        if (selectedSize === 'large') {
            hamburger.size = SIZE_LARGE;
        }
    })

    document.getElementById("cheese").addEventListener("click", function () {
        hamburger.addModifier(TOPPING_CHEESE);
    });

    document.getElementById("salad").addEventListener("click", function () {
        hamburger.addModifier(TOPPING_SALAD)
    })

    document.getElementById("potato").addEventListener('click', function () {
        hamburger.addModifier(TOPPING_POTATO)
    })

    document.getElementById('spice').addEventListener('click', function () {
        hamburger.addModifier(TOPPING_SPICE)
    })

    document.getElementById('mayo').addEventListener('click', function () {
        hamburger.addModifier(TOPPING_MAYO)
    })

    document.getElementById('sendButton').addEventListener('click', function () {
        const price = hamburger.getPrice();
        const calories = hamburger.getCalories();
        const resultEl = document.getElementById('res')
        resultEl.innerHTML = `Price: ${price} Tenge; Calories: ${calories}; <button id="clearButton">Clear Results</button>`;
        document.getElementById('clearButton').addEventListener('click', function () {
            resultEl.innerHTML = '';
            hamburger.size = SIZE_SMALL;
            hamburger.modifiers = [];
            document.getElementById('size').value = 'small';
        })
    })


    function Hamburger(size) {
        this.size = size;
        this.modifiers = [];
    }

    Hamburger.prototype.addModifier = function (modifier) {
        this.modifiers.push(modifier);
    };

    Hamburger.prototype.getPrice = function () {
        let total = this.size.price;
        for (let modifier of this.modifiers) {
            total += modifier.price;
        }
        return total;
    };

    Hamburger.prototype.getCalories = function () {
        let total = this.size.calories;
        for (let modifier of this.modifiers) {
            total += modifier.calories;
        }
        return total;
    };
})