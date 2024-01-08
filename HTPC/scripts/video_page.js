let messi = document.getElementById("messi");
let originalMessiHeight = messi.style.height;
let originalMessiWidth = messi.style.width;
messi.addEventListener('mouseover', function()
{
    messi.src = "../images/messiwithicon.png";
    messi.alt = "twitch";
    messi.style.cursor = "pointer";
    messi.addEventListener('click', function()
    {
        window.location.href = "streaming_page_messi.html";
    });
});
messi.addEventListener('mouseout', function()
{
    messi.style.width = originalMessiWidth;
    messi.style.height = originalMessiHeight;
    messi.src = "../images/messi.jpg";
});

let lofi = document.getElementById("lofi");
let originalLofiHeight = lofi.style.height;
let originalLofiWidth = lofi.style.width;
lofi.addEventListener('mouseover', function()
{
    lofi.src = "../images/lofithumbnail.png";
    lofi.alt = "twitch";
    lofi.style.cursor = "pointer";
    lofi.addEventListener('click', function()
    {
        window.location.href = "streaming_page_lofigirl.html";
    });
});
lofi.addEventListener('mouseout', function()
{
    lofi.style.width = originalLofiWidth;
    lofi.style.height = originalLofiHeight;
    lofi.src = "../images/lofigirl.png";
});

let pew = document.getElementById("pew");
let originalPewHeight = pew.style.height;
let originalPewWidth = pew.style.width;
pew.addEventListener('mouseover', function()
{
    pew.src = "../images/pewdsthumbnail.png";
    pew.alt = "twitch";
    pew.style.cursor = "pointer";
    pew.addEventListener('click', function()
    {
        window.location.href = "streaming_page_pewdiepie.html";
    });
});
pew.addEventListener('mouseout', function()
{
    pew.style.width = originalPewWidth;
    pew.style.height = originalPewHeight;
    pew.src = "../images/pewdthumbnail.png";
});

// this code was modified from: https://www.w3schools.com/cssref/css3_pr_transform.php
let rowPosition1 = 0;
const leftArrow1 = document.getElementById('left-arrow1');
const rightArrow1 = document.getElementById('right-arrow1');

leftArrow1.addEventListener('click', () => {
    if(rowPosition1!==-75){
        rowPosition1 -= 15;
        document.getElementById('messi').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('fortnite').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('fivenights').style.transform = `translateX(${rowPosition1}em)`;
    }
    console.log("left arrow clicked");
});
rightArrow1.addEventListener('click', () => {
    if(rowPosition1!==75){
        rowPosition1 += 15;
        document.getElementById('messi').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('fortnite').style.transform = `translateX(${rowPosition1}em)`;
        document.getElementById('fivenights').style.transform = `translateX(${rowPosition1}em)`;
    }
    console.log("right arrow clicked");
});

let rowPosition2 = 0;
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');

leftArrow2.addEventListener('click', () => {
    if(rowPosition2!==-75){
        rowPosition2 -= 15;
        document.getElementById('pew').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('cricket').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('lofi').style.transform = `translateX(${rowPosition2}em)`;
    }
    console.log("left arrow 2 clicked");
});
rightArrow2.addEventListener('click', () => {
    if(rowPosition2!==75){
        rowPosition2 += 15;
        document.getElementById('pew').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('cricket').style.transform = `translateX(${rowPosition2}em)`;
        document.getElementById('lofi').style.transform = `translateX(${rowPosition2}em)`;
    }
    console.log("right arrow 2 clicked");
});

let rowPosition3 = 0;
const leftArrow3 = document.getElementById('left-arrow3');
const rightArrow3 = document.getElementById('right-arrow3');

leftArrow3.addEventListener('click', () => {
    if(rowPosition3!==-75){
        rowPosition3 -= 15;
        document.getElementById('impaulsive').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('tips').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('clash').style.transform = `translateX(${rowPosition3}em)`;
    }
    console.log("left arrow 3 clicked");
});
rightArrow3.addEventListener('click', () => {
    if(rowPosition3!==75){
        rowPosition3 += 15;
        document.getElementById('impaulsive').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('tips').style.transform = `translateX(${rowPosition3}em)`;
        document.getElementById('clash').style.transform = `translateX(${rowPosition3}em)`;
    }
    console.log("right arrow 3 clicked");
});