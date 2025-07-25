// Task 1
// var btn = document.querySelector("button")
// var p = document.querySelector("p")

// btn.addEventListener('click' , function(){
//     p.textContent = "Change Hogaya"
// })

// Task 2

// var img1 = document.querySelector(".image1");
// var img2 = document.querySelector(".image2");
// var btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   var src1 = img1.src;
//   var src2 = img2.src;
//   img1.src = src2;
//   img2.src = src1;

// });

// Task 3

// var inps = document.querySelectorAll('input[type="text"]');
// var form = document.querySelector('form');
// var h1 = document.querySelector('h1');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     for (var i = 0; i < inps.length; i++) {
//         if (inps[i].value.trim() === '') {
//             h1.textContent = "This error";
//             h1.style.color = 'red';
//             break;
//         }
//     }
// });

// Task 4

// var h1 = document.querySelector('h1');
// var start = document.querySelector('#start')
// var end = document.querySelector('#end')

// var int;
// start.addEventListener('click' , function(){
//     var count =0;
//     int  = setInterval(function(){
//         h1.textContent = count;
//         count++;
//     } , 1000);
// })

// end.addEventListener('click' , function(){
//     clearInterval(int)
// })

// Task 5

// var input = document.querySelector('input');
// var ul = document.querySelector('ul')
// var add = document.querySelector('#add');
// var remove = document.querySelector('#remove');

// var li ;
// add.addEventListener('click' , function(){
//     if(input.value === ''){}
//     else{
//         li =  document.createElement('li')
//         li.textContent = input.value;
//         ul.appendChild(li)
//         input.value ='';
//     }
// })

// remove.addEventListener('click', function() {
//     if (ul.lastChild) {
//         ul.removeChild(ul.lastChild);
//     }
// });

// Task 6

// var button = document.querySelectorAll('.nav-btn')
// var texts = document.querySelectorAll('h3')

// texts[0].style.display = 'block'
// texts[0].style.width = '50%'

// button.forEach(function(div ,index){
//     div.addEventListener('click' , function(){
//         hideAllText();
//         texts[index].style.display ='block';
//         texts[index].style.width = '50%';
//     })
// })

// function hideAllText(){
//     texts.forEach(function(text){
//         text.style.display ='none'
//     })
// }

//Task 7

// var p = document.querySelector("#progressbar")

// var count =0;
// var int  = setInterval(function(){
//     if(count === 100){
//         clearInterval(int);
//     }
//     count++;
//     p.style.width = count+'%';
// }, 200)

// Task 8
// const data = [
//   {
//     name: "Harshit",
//     src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
//   },
//   {
//     name: "Venkatesh",
//     src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//   },
//   {
//     name: "Bhavik",
//     src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//   }
// ];

// const input = document.querySelector("input");
// const peopleDiv = document.querySelector("#people");

// function displayPeople(list) {
//   let html = "";

//   if (list.length === 0) {
//     html = "<p>No people found.</p>";
//   } else {
//     list.forEach((person) => {
//       html += `<div class="person-card">
//         <div class="avatar">
//           <img src="${person.src}" alt="${person.name}" />
//         </div>
//         <h2>${person.name}</h2>
//       </div>`;
//     });
//   }

//   peopleDiv.innerHTML = html;
// }

// // Show all on load
// displayPeople(data);

// // Filter on input
// input.addEventListener("input", function () {
//   const search = input.value.toLowerCase();
//   const filtered = data.filter((p) =>
//     p.name.toLowerCase().startsWith(search)
//   );
//   displayPeople(filtered);
// });