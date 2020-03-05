

const steak = [
  'season steak generously with salt, pepper and garlic powder',
  'place in ziplock bag',
  'cook in sous vide at 120 F for 1-2 hours',
  'remove from bag and pat dry',
  'heat pan with grapeseed oil and a quarter stick of butter',
  'cook steak for 30-60 seconds per side using a spoon to baste with butter',
  'rest for 10 mintutes',
  'enjoy'
]

const brusselSprouts = [
  'wash burussel srouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinger and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'place in flat side down',
  'cook for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy',
]

const mashPotatoes = [
  'boil water',
  'tear open bag of of instant potato mix and pour into bowl',
  'pour in water',
  'mix',
  'enjoy'
] 

// Iteration 1 With function hell
// addFood(steak[0], '#steak', function(){
//   addFood(steak[1], '#steak', function(){
//     addFood(steak[2], '#steak', function(){
//       addFood(steak[3], '#steak', function(){
//         addFood(steak[4], '#steak', function(){
//           addFood(steak[5], '#steak', function(){

//           })
//         })
//       })
//     })
//   })
// })

// function makefood(step, id){
//   for (let i=0; i<step.length; i++){
//     console.log(i)
//     addFood(steak[i], '#steak', function(){
//     })
//   } console.log(id)
// }

//         function makefood(step, id){
//           console.log(id)
//           for (let i=0; i<step.length; i++){
//             console.log( `${i+1}. ${step[i]}`)
//             addFood(step[i], id)
//           }
//           console.log(`${id} is DONE `)
//           console.log('____________________');
//         }
       
// makefood(steak, '#steak')
// makefood(brusselSprouts, '#brusselSprouts')
//             // makefood(mashPotatoes, '#mashPotatoes')


// // Iteration 2 DONE:
// // Using a promise, make food creates stake and then mashed potatoes

// let foodpromise = new Promise((resolve, rej) => {
//     //resolve('Steak is DONE')
// });

// foodpromise.then(function(value){
//   makefood(mashPotatoes, '#mashPotatoes');
// });


// addFood(steak[0], '#steak', function(){
//   addFood(steak[1], '#steak', function(){
  
//   })
// })
// foodpromise.then(function(value){
//   console.log(value)
//   makefood(mashPotatoes, '#mashPotatoes');
// })


// Async function and stuff

async function prepareMeal(steps, id){
  for(let step of steps){
    await addFood(step, id)
  }
  document.querySelector('#table').innerHTML += `<img src=images/${id.replace('#','')}.jpg />`

}

// prepareMeal(steak, '#steak')
// prepareMeal(brusselSprouts, '#brusselSprouts')
// prepareMeal(mashPotatoes, '#mashPotatoes')


Promise.all([
  prepareMeal(steak, '#steak'),
  prepareMeal(brusselSprouts, '#brusselSprouts'),
  prepareMeal(mashPotatoes, '#mashPotatoes').then(res =>{
    document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is Served </button>`
  })
])












