let allData = JSON.parse(localStorage.getItem('data'));
let allLists = JSON.parse(localStorage.getItem('lists'));
let allApps = JSON.parse(localStorage.getItem('apps'));
console.log(allApps)

// subscribe button (dropdown) and unsubscribe button
const subscribeButtonNetflix = document.querySelector(".subscribeButtonNetflix")
const subscribeButtonDisney = document.querySelector(".subscribeButtonDisney")
const subscribeButtonPrime = document.querySelector(".subscribeButtonPrime")
const subscribeButtonSpotify = document.querySelector(".subscribeButtonSpotify")
const subscribeButtonApple = document.querySelector(".subscribeButtonApple")
const subscribeButtonSoundCloud = document.querySelector(".subscribeButtonSoundCloud")
const subscribeButtonTwitch = document.querySelector(".subscribeButtonTwitch")
const subscribeButtonYoutube = document.querySelector(".subscribeButtonYoutube")
const subscribeButtonKick = document.querySelector(".subscribeButtonKick")

const showUnsubscribeNetflix = document.querySelector(".unsubscribeButtonNetflix")
const showUnsubscribeDisney = document.querySelector(".unsubscribeButtonDisney")
const showUnsubscribePrime = document.querySelector(".unsubscribeButtonPrime")
const showUnsubscribeSpotify = document.querySelector(".unsubscribeButtonSpotify")
const showUnsubscribeApple = document.querySelector(".unsubscribeButtonApple")
const showUnsubscribeSoundCloud = document.querySelector(".unsubscribeButtonSoundCloud")
const showUnsubscribeTwitch = document.querySelector(".unsubscribeButtonTwitch")
const showUnsubscribeYoutube = document.querySelector(".unsubscribeButtonYoutube")
const showUnsubscribeKick = document.querySelector(".unsubscribeButtonKick")

const netflixHeader = document.querySelector("#netflix-header");
const primeHeader = document.querySelector("#prime-header");
const disneyHeader = document.querySelector("#disney-header");
const spotifyHeader = document.querySelector("#spotify-header");
const appleHeader = document.querySelector("#apple-header");
const soundcloudHeader = document.querySelector("#soundcloud-header");
const twitchHeader = document.querySelector("#twitch-header");
const youtubeHeader = document.querySelector("#youtube-header");
const kickHeader = document.querySelector("#kick-header");

for(let i = 0; i < allApps.length; i++)
{
    if(allApps[i].state === "unsub")
    {
        loadUnsub(allApps[i].app);
    }
    else if(allApps[i].state === "sub")
    {
        console.log(allApps[i]);
        loadSub(allApps[i].app, i);
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}
// this block of code is taken from https://www.w3schools.com/howto/howto_js_dropdown.asp

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownNetflix(value)
{
  document.getElementById("myDropdownNetflix").classList.toggle("show");
  let index = checkApp("netflix");
  if(value)
  {
      console.log(value);
      allApps[index].plan = value.trim();
  }
  localStorage.setItem('apps', JSON.stringify(allApps));
}
  
function dropdownDisney(value) {
  document.getElementById("myDropdownDisney").classList.toggle("show");
  let index = checkApp("disney+")
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function dropdownPrime(value) {
  document.getElementById("myDropdownPrime").classList.toggle("show");
  let index = checkApp("prime");
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function dropdownSpotify(value) {
  document.getElementById("myDropdownSpotify").classList.toggle("show");
  let index = checkApp("spotify");
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function dropdownApple(value) {
  document.getElementById("myDropdownApple").classList.toggle("show");
  let index = checkApp("apple");
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function dropdownSoundCloud(value) {
  document.getElementById("myDropdownSoundCloud").classList.toggle("show");
  let index = checkApp("soundcloud")
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function dropdownTwitch(value) {
  document.getElementById("myDropdownTwitch").classList.toggle("show");
  let index = checkApp("twitch");
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function dropdownYoutube(value) {
  document.getElementById("myDropdownYoutube").classList.toggle("show");
  let index = checkApp("youtube");
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function dropdownKick(value) {
  document.getElementById("myDropdownKick").classList.toggle("show");
  let index = checkApp("kick");
    if(value)
    {
        console.log(value);
        allApps[index].plan = value.trim();
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}
  
// Close the dropdown menu if the user clicks
window.onclick = function(event) {
  if (!event.target.matches('.subscribeButtonKick')) {
    var dropdowns = document.getElementsByClassName("dropdown-content8");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'))
      {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonYoutube')) {
    var dropdowns = document.getElementsByClassName("dropdown-content7");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonTwitch')) {
    var dropdowns = document.getElementsByClassName("dropdown-content6");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonSoundCloud')) {
    var dropdowns = document.getElementsByClassName("dropdown-content5");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonApple')) {
    var dropdowns = document.getElementsByClassName("dropdown-content4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonSpotify')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonPrime')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonDisney')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.subscribeButtonNetflix')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function checkApp(appName){
    for(let i = 0; i < allApps.length; i++)
    {
        if(allApps[i].app === appName)
            return i;
    }
}

function loadUnsub(name)
{
    let text = "Unsubscribed <br> No Current Plan";
    if (String(name).valueOf() === "netflix")
    {
        netflixHeader.innerHTML = text;
        showUnsubscribeNetflix.setAttribute("hidden", "hidden");
        subscribeButtonNetflix.textContent = "Subscribe";
        subscribeButtonNetflix.style.marginTop = "30px"
        imageUnsubscribeApp('netflix')
    }
    else if (String(name).valueOf() === "disney+") {
        disneyHeader.innerHTML = text;
        showUnsubscribeDisney.setAttribute("hidden", "hidden");
        subscribeButtonDisney.textContent = "Subscribe";
        subscribeButtonDisney.style.marginTop = "30px"
        imageUnsubscribeApp('disney')
    }
    else if (String(name).valueOf() === "prime") {
        primeHeader.innerHTML = text;
        showUnsubscribePrime.setAttribute("hidden", "hidden");
        subscribeButtonPrime.textContent = "Subscribe";
        subscribeButtonPrime.style.marginTop = "30px"
        imageUnsubscribeApp('prime')
    }
    else if (String(name).valueOf() === "spotify") {
        spotifyHeader.innerHTML = text;
        showUnsubscribeSpotify.setAttribute("hidden", "hidden");
        subscribeButtonSpotify.textContent = "Subscribe";
        subscribeButtonSpotify.style.marginTop = "30px"
        imageUnsubscribeApp('spotify')
    }
    else if (String(name).valueOf() === "apple") {
        appleHeader.innerHTML = text;
        showUnsubscribeApple.setAttribute("hidden", "hidden");
        subscribeButtonApple.textContent = "Subscribe";
        subscribeButtonApple.style.marginTop = "30px"
        imageUnsubscribeApp('apple')
    }
    else if (String(name).valueOf() === "soundcloud") {
        soundcloudHeader.innerHTML = text;
        showUnsubscribeSoundCloud.setAttribute("hidden", "hidden");
        subscribeButtonSoundCloud.textContent = "Subscribe";
        subscribeButtonSoundCloud.style.marginTop = "30px"
        imageUnsubscribeApp('soundcloud')
    }
    else if (String(name).valueOf() === "twitch") {
        twitchHeader.innerHTML = "Unsubscribed <br> Free Plan";
        showUnsubscribeTwitch.setAttribute("hidden", "hidden");
        subscribeButtonTwitch.textContent = "Subscribe";
        subscribeButtonTwitch.style.marginTop = "30px"
        imageUnsubscribeApp('twitch')
    }
    else if (String(name).valueOf() === "youtube") {
        youtubeHeader.innerHTML = "Unsubscribed <br> Free Plan";
        showUnsubscribeYoutube.setAttribute("hidden", "hidden");
        subscribeButtonYoutube.textContent = "Subscribe";
        subscribeButtonYoutube.style.marginTop = "30px"
        imageUnsubscribeApp('youtube')
    }
    else if (String(name).valueOf() === "kick") {
        kickHeader.innerHTML = "Unsubscribed <br> Free Plan";
        showUnsubscribeKick.setAttribute("hidden", "hidden");
        subscribeButtonKick.textContent = "Subscribe";
        subscribeButtonKick.style.marginTop = "30px"
        imageUnsubscribeApp('kick')
    }
    localStorage.setItem('apps', JSON.stringify(allApps));
}

function unsubConfirm(name) {
  let text = "Are you sure you want to unsubscribe?";
  if (confirm(text) === true)
  {
    text = "Unsubscribed <br> No Current Plan"

    if (String(name).valueOf() === "netflix")
    {
      let index = checkApp("netflix");
      allApps[index].state = "unsub";
      allApps[index].plan = "No Current Plan";
      netflixHeader.innerHTML = text;
      showUnsubscribeNetflix.setAttribute("hidden", "hidden");
      subscribeButtonNetflix.textContent = "Subscribe";
      subscribeButtonNetflix.style.marginTop = "30px"
      imageUnsubscribeApp('netflix')
    }
    else if (String(name).valueOf() === "disney+") {
      let index = checkApp("disney+");
      allApps[index].state = "unsub";
      allApps[index].plan = "No Current Plan";
      disneyHeader.innerHTML = text;
      showUnsubscribeDisney.setAttribute("hidden", "hidden");
      subscribeButtonDisney.textContent = "Subscribe";
      subscribeButtonDisney.style.marginTop = "30px"
      imageUnsubscribeApp('disney')
    }
    else if (String(name).valueOf() === "prime") {
        let index = checkApp("prime");
        allApps[index].state = "unsub";
        allApps[index].plan = "No Current Plan";
      primeHeader.innerHTML = text;
      showUnsubscribePrime.setAttribute("hidden", "hidden");
      subscribeButtonPrime.textContent = "Subscribe";
      subscribeButtonPrime.style.marginTop = "30px"
      imageUnsubscribeApp('prime')
    }
    else if (String(name).valueOf() === "spotify") {
        let index = checkApp("spotify");
        allApps[index].state = "unsub";
        allApps[index].plan = "No Current Plan";
      spotifyHeader.innerHTML = text;
      showUnsubscribeSpotify.setAttribute("hidden", "hidden");
      subscribeButtonSpotify.textContent = "Subscribe";
      subscribeButtonSpotify.style.marginTop = "30px"
      imageUnsubscribeApp('spotify')
    }
    else if (String(name).valueOf() === "apple") {
        let index = checkApp("apple");
        allApps[index].state = "unsub";
        allApps[index].plan = "No Current Plan";
      appleHeader.innerHTML = text;
      showUnsubscribeApple.setAttribute("hidden", "hidden");
      subscribeButtonApple.textContent = "Subscribe";
      subscribeButtonApple.style.marginTop = "30px"
      imageUnsubscribeApp('apple')
    }
    else if (String(name).valueOf() === "soundcloud") {
        let index = checkApp("soundcloud");
        allApps[index].state = "unsub";
        allApps[index].plan = "No Current Plan";
      soundcloudHeader.innerHTML = text;
      showUnsubscribeSoundCloud.setAttribute("hidden", "hidden");
      subscribeButtonSoundCloud.textContent = "Subscribe";
      subscribeButtonSoundCloud.style.marginTop = "30px"
      imageUnsubscribeApp('soundcloud')
    }
    else if (String(name).valueOf() === "twitch") {
        let index = checkApp("twitch");
        allApps[index].state = "unsub";
        allApps[index].plan = "No Current Plan";
      twitchHeader.innerHTML = "Unsubscribed <br> Free Plan";
      showUnsubscribeTwitch.setAttribute("hidden", "hidden");
      subscribeButtonTwitch.textContent = "Subscribe";
      subscribeButtonTwitch.style.marginTop = "30px"
      imageUnsubscribeApp('twitch')
    }
    else if (String(name).valueOf() === "youtube") {
        let index = checkApp("youtube");
        console.log("hey", index);
        allApps[index].state = "unsub";
        allApps[index].plan = "No Current Plan";
      youtubeHeader.innerHTML = "Unsubscribed <br> Free Plan";
      showUnsubscribeYoutube.setAttribute("hidden", "hidden");
      subscribeButtonYoutube.textContent = "Subscribe";
      subscribeButtonYoutube.style.marginTop = "30px"
      imageUnsubscribeApp('youtube')
    }
    else if (String(name).valueOf() === "kick") {
        let index = checkApp("kick");
        allApps[index].state = "unsub";
        allApps[index].plan = "No Current Plan";
      kickHeader.innerHTML = "Unsubscribed <br> Free Plan";
      showUnsubscribeKick.setAttribute("hidden", "hidden");
      subscribeButtonKick.textContent = "Subscribe";
      subscribeButtonKick.style.marginTop = "30px"
      imageUnsubscribeApp('kick')
    }
  }
  localStorage.setItem('apps', JSON.stringify(allApps));
  console.log(allApps);
}

function loadSub(name, i)
{
    if (String(name).valueOf() === "netflix") {
        netflixHeader.innerHTML = "Subscribed <br> Current Plan: " + allApps[i].plan;
        subscribeButtonNetflix.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonNetflix.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeNetflix.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('netflix')
        console.log("ok")
    }
    else if (String(name).valueOf() === "disney+") {
        disneyHeader.innerHTML = "Subscribed <br> Current Plan: " + allApps[i].plan;
        subscribeButtonDisney.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonDisney.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeDisney.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('disney')
    }
    else if (String(name).valueOf() === "prime") {
        primeHeader.innerHTML = "Subscribed <br> Current Plan: " + allApps[i].plan;
        subscribeButtonPrime.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonPrime.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribePrime.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('prime')
    }
    else if (String(name).valueOf() === "spotify") {
        spotifyHeader.innerHTML = "Subscribed <br> Current Plan: " + allApps[i].plan;
        subscribeButtonSpotify.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonSpotify.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeSpotify.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('spotify')
    }
    else if (String(name).valueOf() === "apple") {
        appleHeader.innerHTML = "Subscribed <br> Current Plan: " + allApps[i].plan;
        subscribeButtonApple.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonApple.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeApple.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('apple')
    }
    else if (String(name).valueOf() === "soundcloud") {
        soundcloudHeader.innerHTML = "Subscribed <br> Current Plan: " + allApps[i].plan;
        subscribeButtonSoundCloud.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonSoundCloud.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeSoundCloud.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('soundcloud')
    }
    else if (String(name).valueOf() === "twitch") {
        twitchHeader.innerHTML = "Subscribed <br> Premium Plan: " + allApps[i].plan;
        subscribeButtonTwitch.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonTwitch.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeTwitch.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('twitch')
    }
    else if (String(name).valueOf() === "youtube") {
        youtubeHeader.innerHTML = "Subscribed <br> Premium Plan: " + allApps[i].plan;
        subscribeButtonYoutube.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonYoutube.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeYoutube.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('youtube')
    }
    else if (String(name).valueOf() === "kick") {
        kickHeader.innerHTML = "Subscribed <br> Premium Plan: " + allApps[i].plan;
        subscribeButtonKick.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
        subscribeButtonKick.style.marginTop = "25px"; // move button location so it's aligned evenly
        showUnsubscribeKick.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        imageSubscribeApp('kick')
    }

}

function subscribeOnClick(name) {
  text = "Would you like to subscribe?"
  if (confirm(text) === true){

    if (String(name).valueOf() === "netflix") {
        let index = checkApp("netflix");
        allApps[index].state = "sub";
      subscribeButtonNetflix.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonNetflix.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeNetflix.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        document.getElementById("myDropdownNetflix").classList.toggle("show");
      imageSubscribeApp('netflix')
      console.log("ok")
    }
    else if (String(name).valueOf() === "disney+") {
        let index = checkApp("disney+");
        allApps[index].state = "sub";
      subscribeButtonDisney.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonDisney.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeDisney.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed
        document.getElementById("myDropdownDisney").classList.toggle("show");
      imageSubscribeApp('disney')
    }
    else if (String(name).valueOf() === "prime") {
        let index = checkApp("prime");
        allApps[index].state = "sub";
      subscribeButtonPrime.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonPrime.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribePrime.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
        document.getElementById("myDropdownPrime").classList.toggle("show");
      imageSubscribeApp('prime')
    }
    else if (String(name).valueOf() === "spotify") {
        let index = checkApp("spotify");
        allApps[index].state = "sub";
      subscribeButtonSpotify.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonSpotify.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeSpotify.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
        document.getElementById("myDropdownSpotify").classList.toggle("show");
      imageSubscribeApp('spotify')
    }
    else if (String(name).valueOf() === "apple") {
        let index = checkApp("apple");
        allApps[index].state = "sub";
      subscribeButtonApple.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonApple.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeApple.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
        document.getElementById("myDropdownApple").classList.toggle("show");
      imageSubscribeApp('apple')
    }
    else if (String(name).valueOf() === "soundcloud") {
        let index = checkApp("soundcloud");
        allApps[index].state = "sub";
      subscribeButtonSoundCloud.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonSoundCloud.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeSoundCloud.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
        document.getElementById("myDropdownSoundCloud").classList.toggle("show");
      imageSubscribeApp('soundcloud')
    }
    else if (String(name).valueOf() === "twitch") {
        let index = checkApp("twitch");
        allApps[index].state = "sub";
      subscribeButtonTwitch.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonTwitch.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeTwitch.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
        document.getElementById("myDropdownTwitch").classList.toggle("show");
      imageSubscribeApp('twitch')
    }
    else if (String(name).valueOf() === "youtube") {
        let index = checkApp("youtube");
        allApps[index].state = "sub";
      subscribeButtonYoutube.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonYoutube.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeYoutube.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
        document.getElementById("myDropdownYoutube").classList.toggle("show");
      imageSubscribeApp('youtube')
    }
    else if (String(name).valueOf() === "kick") {
        let index = checkApp("kick");
        allApps[index].state = "sub";
      subscribeButtonKick.textContent = "Edit Plan"; // change button text to say edit plan since we are now subscribed
      subscribeButtonKick.style.marginTop = "25px"; // move button location so it's aligned evenly
      showUnsubscribeKick.removeAttribute("hidden"); // show unsubscribe button now that we are subscribed 
        document.getElementById("myDropdownKick").classList.toggle("show");
      imageSubscribeApp('kick')
    }
  }
  localStorage.setItem('apps', JSON.stringify(allApps));
  console.log(allApps);
}

//netflix
document.querySelector("#netflix6").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $6/month"})
document.querySelector("#netflix17").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $17/month"})
document.querySelector("#netflix21").addEventListener("click", function() {netflixHeader.innerHTML = "Subscribed <br> Current Plan: $21/month"})
//document.querySelector("#netflix6").addEventListener("click", saveData())
//document.querySelector("#netflix17").addEventListener("click", saveData())
//document.querySelector("#netflix21").addEventListener("click", saveData())


//prime
document.querySelector("#prime7").addEventListener("click", function() {primeHeader.innerHTML = "Subscribed <br> Current Plan: $7/month"})
document.querySelector("#prime15").addEventListener("click", function() {primeHeader.innerHTML = "Subscribed <br> Current Plan: $15/month"})

// disney plus
document.querySelector("#disney8").addEventListener("click" , function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $8/month"})
document.querySelector("#disney12").addEventListener("click" , function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $12/month"})
document.querySelector("#disney15").addEventListener("click" , function() {disneyHeader.innerHTML = "Subscribed <br> Current plan: $15/month"})

//spotify
document.querySelector("#spotify6").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $6/month"})
document.querySelector("#spotify11").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $11/month"})
document.querySelector("#spotify15").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $15/month"})
document.querySelector("#spotify17").addEventListener("click" , function() {spotifyHeader.innerHTML = "Subscribed <br> Current plan: $17/month"})

//apple music
document.querySelector("#apple6").addEventListener("click" , function() {appleHeader.innerHTML = "Subscribed <br> Current plan: $6/month"})
document.querySelector("#apple11").addEventListener("click" , function() {appleHeader.innerHTML = "Subscribed <br> Current plan: $11/month"})
document.querySelector("#apple17").addEventListener("click" , function() {appleHeader.innerHTML = "Subscribed <br> Current plan: $17/month"})

//soundcloud
document.querySelector("#soundcloud5").addEventListener("click" , function() {soundcloudHeader.innerHTML = "Subscribed <br> Current plan: $5/month"})
document.querySelector("#soundcloud10").addEventListener("click" , function() {soundcloudHeader.innerHTML = "Subscribed <br> Current plan: $10/month"})

// twitch
document.querySelector("#twitch14").addEventListener("click" , function() {twitchHeader.innerHTML = "Subscribed <br> Premium plan: $14/month"})

// youtube
document.querySelector("#youtube8").addEventListener("click" , function() {youtubeHeader.innerHTML = "Subscribed <br> Premium plan: $8/month"})
document.querySelector("#youtube14").addEventListener("click" , function() {youtubeHeader.innerHTML = "Subscribed <br> Premium plan: $14/month"})
document.querySelector("#youtube23").addEventListener("click" , function() {youtubeHeader.innerHTML = "Subscribed <br> Premium plan: $23/month"})

// youtube
document.querySelector("#kick5").addEventListener("click" , function() {kickHeader.innerHTML = "Subscribed <br> Premium plan: $5/month"})
document.querySelector("#kick10").addEventListener("click" , function() {kickHeader.innerHTML = "Subscribed <br> Premium plan: $10/month"})



// get id for button
//let subscribeButton = document.getElementById("subscribe-btn-SoundCloud");
//let subscribeButtonApple = document.getElementById("subscribe-btn-Apple");

// click event for that button
//subscribeButtonSoundCloud.addEventListener("click", imageSubscribeApp())

function imageSubscribeApp(name)
{   if (name === "soundcloud"){
      imgFilePath = "../images/soundcloud.png";
    }
    else if (name === "spotify"){
      imgFilePath = "../images/spotify.webp"
    }
    else if (name === 'apple') {
      imgFilePath = "../images/applemusic.png"
    }
    else if (name === 'netflix') {
      imgFilePath = "../images/netflix.png"
    }
    else if (name === 'prime') {
      imgFilePath = "../images/amazonicon.png"
    }
    else if (name === 'disney') {
      imgFilePath = "../images/disneyplus.png"
    }
    else if (name === 'twitch') {
      imgFilePath = "..images/twitch.png"
    }
    else if (name === 'youtube') {
      imgFilePath = "../images/youtube.webp"
    }
    else if (name === 'kick') {
      imgFilePath = "../images/kick.png"
    }
    // iterate through each allData object to add src to sub array and remove src from unsub array
    for (let i = 0; i < allData.length; i++)
    {
        // check if app belongs in object by checking media type
        if(allData[i].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub === -1)
            {
                allData[i].subscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub !== -1)
            {
                allData[i].unsubscribed.splice(indexUnsub, 1);
            }
        }
        // check if app belongs in object by checking media type
        if(allData[i].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub === -1)
            {
                allData[i].subscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub !== -1)
            {
                allData[i].unsubscribed.splice(indexUnsub, 1);
            }
        }
        if(allData[i].media === "TV" && (name === "netflix" || name === "prime" || name === "disney"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub === -1)
            {
                allData[i].subscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub !== -1)
            {
                allData[i].unsubscribed.splice(indexUnsub, 1);
            }
        }
          // check if app belongs in object by checking media type
          if(allData[i].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
          {
              // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
              let indexSub = allData[i].subscribed.indexOf(imgFilePath);
              if (indexSub === -1)
              {
                  allData[i].subscribed.push(imgFilePath);
              }
              // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
              let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
              if (indexUnsub !== -1)
              {
                  allData[i].unsubscribed.splice(indexUnsub, 1);
              }
          }
    }
    localStorage.setItem('data', JSON.stringify(allData));
    localStorage.setItem('lists', JSON.stringify(allLists));
    // iterate through each allLists object array, iterate through listItems object array of objects to add src to sub string array and remove src from unsub string array
    for(let j = 0; j < allLists.length; j++)
    {
        for(let k = 0; k < allLists[j].listItems.length; k++)
        {
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
            {
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub === -1)
                {
                    allLists[j].listItems[k].subscribed.push(imgFilePath);
                }
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub !== -1)
                {
                    allLists[j].listItems[k].unsubscribed.splice(indexUnsub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
            {
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub === -1)
                {
                    allLists[j].listItems[k].subscribed.push(imgFilePath);
                }
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub !== -1)
                {
                    allLists[j].listItems[k].unsubscribed.splice(indexUnsub, 1);
                }
            }
            if(allLists[j].listItems[k].media === "TV Show" && (name === "netflix" || name === "prime" || name === "disney"))
            {
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub === -1)
                {
                    allLists[j].listItems[k].subscribed.push(imgFilePath);
                }
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub !== -1)
                {
                    allLists[j].listItems[k].unsubscribed.splice(indexUnsub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
            {
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub === -1)
                {
                    allLists[j].listItems[k].subscribed.push(imgFilePath);
                }
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub !== -1)
                {
                    allLists[j].listItems[k].unsubscribed.splice(indexUnsub, 1);
                }
            }
        }
    }
    // save data
    localStorage.setItem('data', JSON.stringify(allData));
    localStorage.setItem('lists', JSON.stringify(allLists));

    // check apps are in right place
    console.log(allData);
    console.log(allLists);
}


function imageUnsubscribeApp(name)
{   if (name === "soundcloud"){
      imgFilePath = "../images/soundcloud.png";
    }
    else if (name === "spotify"){
      imgFilePath = "../images/spotify.webp"
    }
    else if (name === 'apple') {
      imgFilePath = "../images/applemusic.png"
    }
    else if (name === 'netflix') {
      imgFilePath = "../images/netflix.png"
    }
    else if (name === 'prime') {
      imgFilePath = "../images/amazonicon.png"
    }
    else if (name === 'disney') {
      imgFilePath = "../images/disneyplus.png"
    }
    else if (name === 'twitch') {
      imgFilePath = "..images/twitch.png"
    }
    else if (name === 'youtube') {
      imgFilePath = "../images/youtube.webp"
    }
    else if (name === 'kick') {
      imgFilePath = "../images/kick.png"
    }
    // iterate through each allData object to add src to sub array and remove src from unsub array
    for (let i = 0; i < allData.length; i++)
    {
        // check if app belongs in object by checking media type
        if(allData[i].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
        {
            // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
            let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
            if (indexUnsub === -1)
            {
                allData[i].unsubscribed.push(imgFilePath);
            }
            // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
            let indexSub = allData[i].subscribed.indexOf(imgFilePath);
            if (indexSub !== -1)
            {
                allData[i].subscribed.splice(indexSub, 1);
            }
        }
          // check if app belongs in object by checking media type
          if(allData[i].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
          {
              // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
              let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
              if (indexUnsub === -1)
              {
                  allData[i].unsubscribed.push(imgFilePath);
              }
              // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
              let indexSub = allData[i].subscribed.indexOf(imgFilePath);
              if (indexSub !== -1)
              {
                  allData[i].subscribed.splice(indexSub, 1);
              }
          }
            // check if app belongs in object by checking media type
            if(allData[i].media === "TV" && (name === "netflix" || name === "prime" || name === "disney"))
            {
                // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
                let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allData[i].unsubscribed.push(imgFilePath);
                }
                // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
                let indexSub = allData[i].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allData[i].subscribed.splice(indexSub, 1);
                }
            }
          // check if app belongs in object by checking media type
          if(allData[i].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
          {
              // check if src doesn't exist already in its sub list, then add it (-1 means doesn't exist, any other index is location of src string)
              let indexUnsub = allData[i].unsubscribed.indexOf(imgFilePath);
              if (indexUnsub === -1)
              {
                  allData[i].unsubscribed.push(imgFilePath);
              }
              // check if src exists in its unsub list, then remove it (-1 means doesn't exist, any other index is location of src string)
              let indexSub = allData[i].subscribed.indexOf(imgFilePath);
              if (indexSub !== -1)
              {
                  allData[i].subscribed.splice(indexSub, 1);
              }
          }
    }
    // iterate through each allLists object array, iterate through listItems object array of objects to add src to sub string array and remove src from unsub string array
    for(let j = 0; j < allLists.length; j++)
    {
        for(let k = 0; k < allLists[j].listItems.length; k++)
        {
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Music" && (name === "soundcloud" || name === "spotify" || name === "apple"))
            {
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allLists[j].listItems[k].unsubscribed.push(imgFilePath);
                }
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allLists[j].listItems[k].subscribed.splice(indexSub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Movie" && (name === "netflix" || name === "prime" || name === "disney"))
            {
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allLists[j].listItems[k].unsubscribed.push(imgFilePath);
                }
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allLists[j].listItems[k].subscribed.splice(indexSub, 1);
                }
            }
            if(allLists[j].listItems[k].media === "TV Show" && (name === "netflix" || name === "prime" || name === "disney"))
            {
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allLists[j].listItems[k].unsubscribed.push(imgFilePath);
                }
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allLists[j].listItems[k].subscribed.splice(indexSub, 1);
                }
            }
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Video" && (name === "twitch" || name === "youtube" || name === "kick"))
            {
                let indexUnsub = allLists[j].listItems[k].unsubscribed.indexOf(imgFilePath);
                if (indexUnsub === -1)
                {
                    allLists[j].listItems[k].unsubscribed.push(imgFilePath);
                }
                let indexSub = allLists[j].listItems[k].subscribed.indexOf(imgFilePath);
                if (indexSub !== -1)
                {
                    allLists[j].listItems[k].subscribed.splice(indexSub, 1);
                }
            }
        }
    }
    // save data
    localStorage.setItem('data', JSON.stringify(allData));
    localStorage.setItem('lists', JSON.stringify(allLists));

    // check apps are in right place
    console.log("last", allData);
    console.log(allLists);
};


/*
// clicking the button for the first time will work but it breaks after that because.. 
// can stil lclick on things, but the text is not updating

function saveData() {
  var inputData = document.querySelector('#netflix-header').innerHTML;
  localStorage.setItem('savedData', inputData);
  console.log("save")
  displayData()
}
// Function to display data from local storage
function displayData() {
  var savedData = localStorage.getItem('savedData');
  var displayElement = document.querySelector('#netflix-header');
  if (savedData) {
      displayElement.innerHTML =  savedData;
      console.log("save1")
  } else {
  }
}


function wtf() {
  // 

  var inputData1 = document.querySelector('#please').innerHTML;
  subscribeButtonNetflix.textContent = "ajajakjsdkajsdakdas"
  localStorage.setItem('savedData1', inputData1);
  console.log("wtf")
  console.log(allLists)
  console.log(allData)
  displayData1()
}
// Function to display data from local storage
function displayData1() {
  var savedData1 = localStorage.getItem('savedData1');
  var displayElement1 = document.querySelector('#please');
  if (savedData1) {
      displayElement1.innerHTML = savedData1;
      console.log("wtf1")
  } else {
  }
}

 localStorage.clear()
// Display data on page load
displayData()
displayData1()

var appData = [
  { name: "Netflix", subButton: "Description1", UnsubButton: "Version1" },
  { name: "Prime", subButton: "Description2", UnsubButton: "Version2" },
  // ... more apps
];

var appDataJSON = JSON.stringify(appData);

localStorage.setItem("appData", appDataJSON);

var storedAppDataJSON = localStorage.getItem("appData");
if (storedAppDataJSON) {
    var storedAppData = JSON.parse(storedAppDataJSON);
    // Now, storedAppData contains your array of string arrays or objects
}
*/