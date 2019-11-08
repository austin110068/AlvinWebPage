document.querySelector('html').onclick = function(){
    alert('點殺小！');
}

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/small-wei.jpg'){
        myImage.setAttribute ('src', 'images/wei-nice.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/small-wei.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = '歡迎來的維維的網站！' + myName;
    }
}

if (!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '歡迎來的維維的網站！' + storedName;
}
myButton.onclick = function(){ /*button to change userID*/
    setUserName();
}