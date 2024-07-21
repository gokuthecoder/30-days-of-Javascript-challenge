/*
██████╗  █████╗ ██╗   ██╗     █████╗        ██████╗  ██████╗ ███╗   ███╗    ███╗   ███╗ █████╗ ███╗   ██╗██╗██████╗ ██╗   ██╗██╗      █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╗    ██╔══██╗██╔═══██╗████╗ ████║    ████╗ ████║██╔══██╗████╗  ██║██║██╔══██╗██║   ██║██║     ██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║  ██║███████║ ╚████╔╝     ╚██████║╚═╝    ██║  ██║██║   ██║██╔████╔██║    ██╔████╔██║███████║██╔██╗ ██║██║██████╔╝██║   ██║██║     ███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║  ██║██╔══██║  ╚██╔╝       ╚═══██║██╗    ██║  ██║██║   ██║██║╚██╔╝██║    ██║╚██╔╝██║██╔══██║██║╚██╗██║██║██╔═══╝ ██║   ██║██║     ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
██████╔╝██║  ██║   ██║        █████╔╝╚═╝    ██████╔╝╚██████╔╝██║ ╚═╝ ██║    ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║██║     ╚██████╔╝███████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚════╝        ╚═════╝  ╚═════╝ ╚═╝     ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝      ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
*/


/*********************************************** task 1 ***********************************************/
let element1 = document.getElementById('para');
element1.innerText = 'Introduction to mySQL'

/*********************************************** task 2 ***********************************************/
let secondPara = document.querySelector('.colorpara').style.backgroundColor = 'red'

/*********************************************** task 3 ***********************************************/
let element2 = document.createElement('div');
element2.textContent = 'Hii i am a div';
element2.textContent = 'Hii i am a div';
element2.style.border = '2px solid black';
document.body.appendChild(element2);

/*********************************************** task 4 ***********************************************/
let newList = document.createElement('li');
newList.textContent = "Task 3";

let uList = document.getElementById('ul-list-item').appendChild(newList);

/*********************************************** task 5 ***********************************************/
let selectImg = document.querySelector('img');
selectImg.setAttribute('src', 'image.png');

/*********************************************** task 6 ***********************************************/
let element4 = document.querySelector('h2');
element4.classList.add('head-2')
element4.classList.remove('head-2')

/*********************************************** task 7 ***********************************************/
let head3 = document.querySelector('h3');
head3.remove();

/*********************************************** task 8 ***********************************************/
let uListItem = document.getElementById('last-list-remove');
uListItem.lastElementChild.remove();

/*********************************************** task 9 ***********************************************/
function clickme() {
    let element5 = document.querySelector('#change-para');
    element5.textContent = 'Hey i have changed now';
};

document.getElementById('myBtn').addEventListener('click', clickme)

/*********************************************** task 10 ***********************************************/
let element6 = document.getElementById('bordered-color');
function changeBorder() {
    element6.style.border = '2px solid blue';
}

element6.addEventListener('mouseover', changeBorder)




