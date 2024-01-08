let allData = JSON.parse(localStorage.getItem('data'));

function renderContent(title)
{
    console.log(title);
    for (let i = 0; i < allData.length; i++)
    {
        if (allData[i].title === title)
        {
            localStorage.setItem('id2', i);
        }
    }
}

// click handlers to determine which content to render in music description page
document.getElementById('Thriller').addEventListener('click', function() {
    renderContent('Thriller');
});

document.getElementById('Tickets to My Downfall').addEventListener('click', function()
{
    renderContent('Tickets to My Downfall');
});

// this code was modified from: https://www.w3schools.com/cssref/css3_pr_transform.php

let rowPosition1 = 0;
const leftArrow1 = document.getElementById('left-arrow1');
const rightArrow1 = document.getElementById('right-arrow1');

leftArrow1.addEventListener('click', () => {
    if(rowPosition1!==-75){
        rowPosition1 -= 15;
        document.getElementById('album1').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('album3').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('album4').style.transform = `translateX(${rowPosition1}em)`;
    }
    console.log("left arrow clicked");
});
rightArrow1.addEventListener('click', () => {
    if(rowPosition1!==75){
        rowPosition1 += 15;
        document.getElementById('album1').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('album3').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('album4').style.transform = `translateX(${rowPosition1}em)`;
    }
    console.log("right arrow clicked");
});

let rowPosition2 = 0;
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');

leftArrow2.addEventListener('click', () => {
    if(rowPosition2!==-75){
        rowPosition2 -= 15;
        document.getElementById('Thriller').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('album7').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('album8').style.transform = `translateX(${rowPosition2}em)`;
    }
    console.log("left arrow 2 clicked");
});
rightArrow2.addEventListener('click', () => {
    if(rowPosition2!==75){
        rowPosition2 += 15;
        document.getElementById('Thriller').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('album7').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('album8').style.transform = `translateX(${rowPosition2}em)`;
    }
    console.log("right arrow 2 clicked");
});

let rowPosition3 = 0;
const leftArrow3 = document.getElementById('left-arrow3');
const rightArrow3 = document.getElementById('right-arrow3');

leftArrow3.addEventListener('click', () => {
    if(rowPosition3!==-75){
        rowPosition3 -= 15;
        document.getElementById('album9').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('album10').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('Tickets to My Downfall').style.transform = `translateX(${rowPosition3}em)`;
    }
    console.log("left arrow 3 clicked");
});
rightArrow3.addEventListener('click', () => {
    if(rowPosition3!==75){
        rowPosition3 += 15;
        document.getElementById('album9').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('album10').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('Tickets to My Downfall').style.transform = `translateX(${rowPosition3}em)`;
    }
    console.log("right arrow 3 clicked");
});