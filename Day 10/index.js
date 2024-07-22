/* 
██████╗  █████╗ ██╗   ██╗     ██╗ ██████╗        ███████╗██╗   ██╗███████╗███╗   ██╗████████╗    ██╗  ██╗ █████╗ ███╗   ██╗██████╗ ██╗     ██╗███╗   ██╗ ██████╗ 
██╔══██╗██╔══██╗╚██╗ ██╔╝    ███║██╔═████╗██╗    ██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝    ██║  ██║██╔══██╗████╗  ██║██╔══██╗██║     ██║████╗  ██║██╔════╝ 
██║  ██║███████║ ╚████╔╝     ╚██║██║██╔██║╚═╝    █████╗  ██║   ██║█████╗  ██╔██╗ ██║   ██║       ███████║███████║██╔██╗ ██║██║  ██║██║     ██║██╔██╗ ██║██║  ███╗
██║  ██║██╔══██║  ╚██╔╝       ██║████╔╝██║██╗    ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║       ██╔══██║██╔══██║██║╚██╗██║██║  ██║██║     ██║██║╚██╗██║██║   ██║
██████╔╝██║  ██║   ██║        ██║╚██████╔╝╚═╝    ███████╗ ╚████╔╝ ███████╗██║ ╚████║   ██║       ██║  ██║██║  ██║██║ ╚████║██████╔╝███████╗██║██║ ╚████║╚██████╔╝
╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═╝ ╚═════╝        ╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
*/


/**************************************************** Task 1 ****************************************************/
let btn1 = document.getElementById('btn-1');
let para = document.querySelector('#para1');
function changePara() {
    para.textContent = "Para has been changed";
}
btn1.addEventListener('click', changePara);

/**************************************************** Task 2 ****************************************************/
let img1 = document.getElementById('img1');
function dblClick(){
    img1.setAttribute('src', 'day10.png');
};

img1.addEventListener("dblclick", dblClick);

/**************************************************** Task 3 ****************************************************/
let div1 = document.getElementById('div1');
function mouseOverFunc () {
    div1.style.backgroundColor = 'orange';
};

div1.addEventListener("mouseover", mouseOverFunc);

/**************************************************** Task 4 ****************************************************/
function mouseOutFunc () {
    div1.style.backgroundColor = "";
};

div1.addEventListener("mouseout", mouseOutFunc);

/**************************************************** Task 5 ****************************************************/
let inpt1 = document.getElementById('floatingPassword');

function keyDown (e) {
    console.log(e.key);
};

inpt1.addEventListener("keydown", keyDown);

/**************************************************** Task 6 ****************************************************/

let inpt2 = document.getElementById('floatingText');
let newPara = document.getElementById('newPara');
function keyupFunc (e) {
    newPara.textContent = e.target.value
};

inpt2.addEventListener("keyup", keyupFunc);

/**************************************************** Task 7 ****************************************************/
let sbtBtn = document.getElementById('myForm');
function PreventDefaultSubmit (e){
    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach(function(value, index){
        // obj = {x[key]} 
        console.log(value, )
        obj[index] = value
    });
    console.log(obj)

    e.preventDefault();
};

sbtBtn.addEventListener("submit", PreventDefaultSubmit)

/**************************************************** Task 8 ****************************************************/
let para3 = document.getElementById('selected_value');
let selectElement = document.getElementById('country');

selectElement.addEventListener('change', function(){
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    para3.innerText = `I live in ${selectedOption.text}`;
    para3.style.color = `blue`;
})

/**************************************************** Task 9 ****************************************************/
const list = document.getElementById('myList');

list.addEventListener('click', function(event) {
  // Check if the clicked element is a list item
  console.log(event.target);
  console.log(event.target.nodeName);
  
  if (event.target && event.target.nodeName === 'LI') {
      console.log(event.target.textContent);
    }
});

/**************************************************** Task 9 ****************************************************/
const parent = document.getElementById('parent');
const addButtons = document.getElementById('addButtons');
parent.addEventListener('click', (e)=>{
    e.target.value == "BUTTON" && alert("Button Clciked");
})

addButtons.addEventListener("click", ()=>{
    const newButtons = document.createElement("button");
    newButtons.textContent = "New Buttons";
    document.getElementById("parent").appendChild(newButtons)
})


















