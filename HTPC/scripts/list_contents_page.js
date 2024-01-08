const storedId = localStorage.getItem('id3');
const id3 = parseInt(storedId, 10);
let allData = JSON.parse(localStorage.getItem('data'));
let allLists = JSON.parse(localStorage.getItem('lists'));
let avgRatings = [];
console.log(id3);
console.log(allLists[id3]);
document.addEventListener('DOMContentLoaded', function()
{
// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
    const resultsContainer = document.getElementById('listContainer');
    resultsContainer.innerHTML = '';

    allLists[id3].listItems.forEach(item =>
    {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item', 'd-flex');

        const contentImageContainer = document.createElement('div');
        contentImageContainer.classList.add('content-image-container', 'mr-4');

        const contentImage = document.createElement('img');
        contentImage.src = item.src;
        contentImage.style.width = "13rem";
        contentImage.style.height = "13rem";
        contentImage.alt = item.title;

        contentImageContainer.appendChild(contentImage);

        const contentDetailsContainer = document.createElement('div');
        contentDetailsContainer.classList.add('content-details-container', 'mr-4');

        const contentDetails = document.createElement('div');
        contentDetails.classList.add('content-details');
// ----------------------------------------------------------------------------------------------------------------
        avgRatings.push(item.avgRating);
        if (item.media === "Movie")
        {
            contentDetails.innerHTML = `
                    <h5>${item.title}</h5>
                    <div class="avg-rating starsContainer space-x-2">
                        <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                        <div class="starSearch" style=colors[1]>&#9733;</div>
                        <div class="starSearch" style=colors[2]>&#9733;</div>
                        <div class="starSearch" style=colors[3]>&#9733;</div>
                        <div class="starSearch" style=colors[4]>&#9733;</div>
                    </div>
                    <p>Total User Ratings: ${item.totalUserRatings}</p>
                    <p>Genre: ${item.tags[0]}</p>
                    <p>Year: ${item.year}</p>
                    <p>Duration: ${item.duration}</p>
                  `;
        }
        else if(item.media === "Music")
        {
            contentDetails.innerHTML = `
                    <h5>${item.title}</h5>
                    <div class="avg-rating starsContainer space-x-2">
                        <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                        <div class="starSearch" style=colors[1]>&#9733;</div>
                        <div class="starSearch" style=colors[2]>&#9733;</div>
                        <div class="starSearch" style=colors[3]>&#9733;</div>
                        <div class="starSearch" style=colors[4]>&#9733;</div>
                    </div>
                    <p>Total User Ratings: ${item.totalUserRatings}</p>
                    <p>Artist: ${item.artist}</p>
                    <p>Genre: ${item.genre}</p>
                    <p>Year: ${item.year}</p>
                    <p>Duration: ${item.duration}</p>
                  `;
        }
        else if(item.media === "TV")
        {
            contentDetails.innerHTML = `
                    <h5>${item.title}</h5>
                    <div class="avg-rating starsContainer space-x-2">
                        <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                        <div class="starSearch" style=colors[1]>&#9733;</div>
                        <div class="starSearch" style=colors[2]>&#9733;</div>
                        <div class="starSearch" style=colors[3]>&#9733;</div>
                        <div class="starSearch" style=colors[4]>&#9733;</div>
                    </div>
                    <p>Total User Ratings: ${item.totalUserRatings}</p>
                    <p>Genre: ${item.tags[0]}</p>
                    <p>Year: ${item.year}</p>
                    <p>Season: ${item.season}</p>
                    <p>Episodes: ${item.episodes}</p>
                  `;
        }
        else if(item.media === "Video")
        {
            contentDetails.innerHTML = `
                    <h5>${item.title}</h5>
                    <div class="avg-rating starsContainer space-x-2">
                        <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                        <div class="starSearch" style=colors[1]>&#9733;</div>
                        <div class="starSearch" style=colors[2]>&#9733;</div>
                        <div class="starSearch" style=colors[3]>&#9733;</div>
                        <div class="starSearch" style=colors[4]>&#9733;</div>
                    </div>
                    <p>Total User Ratings: ${item.totalUserRatings}</p>
                    <p>Channel: ${item.channel}</p>
                    <p>Genre: ${item.genre}</p>
                    <p>Duration: ${item.duration}</p>
                    `;
        }
// The following code is modified from: ---------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
        contentDetailsContainer.appendChild(contentDetails);

        const appsContainer = document.createElement('div');
        appsContainer.classList.add('apps-container', 'text-center');

        const subscribedAppsContainer = document.createElement('div');
        subscribedAppsContainer.classList.add('subscribed-apps');

        if(item.title === "PewDiePie Official Stream")
        {
            subscribedAppsContainer.classList.add('px-20', 'py-10','ml-20');
            subscribedAppsContainer.innerHTML = `<p class="px-3 text-center">Available On:</p>`;
            appsContainer.appendChild(subscribedAppsContainer);
            const imageElement = document.createElement('img');
            imageElement.src = "../images/twitch.png";
            imageElement.alt = "twitch";
            imageElement.style.width = "6rem";
            imageElement.style.height = "6rem";
            imageElement.style.cursor = "pointer";
            subscribedAppsContainer.appendChild(imageElement);
            imageElement.addEventListener('click', function(){
                window.location.href = "streaming_page_pewdiepie.html";
            });
        }
        else if(item.title === "Lofi Girl Official Stream")
        {
            subscribedAppsContainer.classList.add('px-20', 'py-10','ml-20');
            subscribedAppsContainer.innerHTML = `<p class="px-3">Available On:</p>`;
            appsContainer.appendChild(subscribedAppsContainer);
            const imageElement = document.createElement('img');
            imageElement.src = "../images/youtube.webp"
            imageElement.alt = "YT";
            imageElement.style.width = "6rem";
            imageElement.style.height = "6rem";
            imageElement.style.cursor = "pointer";
            subscribedAppsContainer.appendChild(imageElement);
            imageElement.addEventListener('click', function(){
                window.location.href = "streaming_page_lofigirl.html";
            });
        }
        else if(item.title === "Messi d'Or - Official Movie")
        {
            subscribedAppsContainer.classList.add('px-20', 'py-10','ml-20');
            subscribedAppsContainer.innerHTML = `<p class="px-3">Available On:</p>`;
            const imageElement = document.createElement('img');
            appsContainer.appendChild(subscribedAppsContainer);
            imageElement.src = "../images/youtube.webp"
            imageElement.alt = "YT";
            imageElement.style.width = "6rem";
            imageElement.style.height = "6rem";
            imageElement.style.cursor = "pointer";
            subscribedAppsContainer.appendChild(imageElement);
            imageElement.addEventListener('click', function(){
                window.location.href = "streaming_page_messi.html";
            });
        }
        else
        {
            subscribedAppsContainer.innerHTML = `<p class="px-3">Subscribed Apps:</p>`;
            appsContainer.appendChild(subscribedAppsContainer);
            subscribedAppsContainer.classList.add('px-5');

            item.subscribed.forEach(src => {
                const imageElement = createAppImage(src, 'subscribedApp', item.title);
                subscribedAppsContainer.appendChild(imageElement);
            });

            const unsubscribedAppsContainer = document.createElement('div');
            unsubscribedAppsContainer.classList.add('unsubscribed-apps');
            unsubscribedAppsContainer.innerHTML = `<p class="px-3">Unsubscribed Apps:</p>`;
            unsubscribedAppsContainer.classList.add('px-5');

            appsContainer.appendChild(unsubscribedAppsContainer);

            item.unsubscribed.forEach(src => {
                const imageElement = createAppImage(src, 'unsubscribedApp');
                unsubscribedAppsContainer.appendChild(imageElement);
            });
        }

        const deleteFunctionality = document.createElement('div');
        deleteFunctionality.innerHTML = `
                <button class="delete-button w-10 h-10">X</button>
                `;
        deleteFunctionality.classList.add('ml-auto', 'py-20');
        resultItem.appendChild(contentImageContainer);
        resultItem.appendChild(contentDetailsContainer);
        resultItem.appendChild(appsContainer);
        resultItem.appendChild(deleteFunctionality);

        // Append result item to result container
        resultContainer.appendChild(resultItem);
        resultsContainer.appendChild(resultContainer);

        let deleteButton = resultContainer.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            deleteItem(this, item.title);
        });
// -----------------------------------------------------------------------------------------------------------------
        console.log(item.title);
        console.log(item.avgRating);
    });

    renderStarColors();
});

function deleteItem(button, itemTitle)
{
    for(let i = 0; i < allLists[id3].listItems.length; i++)
    {
        if(allLists[id3].listItems[i].title === itemTitle)
        {
            console.log("raaa", itemTitle);
            allLists[id3].listItems.splice(i, 1);
            break;
        }
    }
    console.log(allLists);
    localStorage.setItem('lists', JSON.stringify(allLists));
    let listItem = button.parentNode.parentNode.parentNode;
    listItem.remove();
}

// The following code is modified from: -----------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
function createAppImage(src, alt, title) {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.alt = alt;
    imageElement.style.width = "6rem";
    imageElement.style.height = "6rem";
    imageElement.style.cursor = "pointer";

    // Add click event listener
    imageElement.addEventListener('click', function() {
        let location = "";
        if(src === "../images/netflix.png" || src === "../images/amazonicon.png" || src === "../images/disneyplus.png")
        {
            if(title === "Spider-Man: Across the Spider-Verse")
                location = alt === 'subscribedApp' ? 'streaming_page_spiderman.html' : 'subscriptions_page_final.html';
            else if(title === "Guardians of the Galaxy Vol. 3")
                location = alt === 'subscribedApp' ? 'streaming_page_guardians.html' : 'subscriptions_page_final.html';
            else if(title === "Wednesday")
                location = alt === 'subscribedApp' ? 'streaming_page_wednesday.html' : 'subscriptions_page_final.html';
            else
                location = 'subscriptions_page_final.html';
            window.location.href = location;
        }
        else if(src === "../images/youtube.webp" || src === "../images/twitch.png" || src === "../images/kick.png")
        {
            if(title === "Messi d'Or - Official Movie")
                location = alt === 'subscribedApp' ? 'streaming_page_messi.html' : 'subscriptions_page_final.html';
            else if(title === "Lofi Girl")
                location = alt === 'subscribedApp' ? 'streaming_page_lofigirl.html' : 'subscriptions_page_final.html';
            window.location.href = location;
        }
        else if(src === "../images/spotify.webp" || src === "../images/applemusic.png" || src === "../images/soundcloud.png")
        {
            if(title === "Thriller" && alt === 'subscribedApp')
            {
                document.querySelector('#MJ').classList.remove('hidden');
                document.querySelector('#MGK').classList.add('hidden');
            }
            else if(title === "Tickets to My Downfall" && alt === 'subscribedApp')
            {
                document.querySelector('#MGK').classList.remove('hidden');
                document.querySelector('#MJ').classList.add('hidden');
            }
            else
            {
                location = 'subscriptions_page_final.html';
                window.location.href = location;
            }
        }
    });
    return imageElement;
}
// ----------------------------------------------------------------------------------------------------------------
function renderStarColors()
{
    let colors = [];
    for(let i = 0; i < avgRatings.length; i++)
    {
        colors.push(getColors(avgRatings[i]));
    }

// The following code is modified from: ----------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
    let starSearchContainers = document.querySelectorAll('.starsContainer');
    starSearchContainers.forEach(function (container, containerIndex) {
        // Get all child div elements within the container
        let stars = container.querySelectorAll('div');
        // Apply different colors to each star within the set
        stars.forEach(function (star, index) {
            if (colors[containerIndex][index] === '#ffcc00') {
                star.style.color = '#ffcc00';
            }
            else if(colors[containerIndex][index] === '#ccc')
            {
                star.style.color = '#ccc';
            }
        });
    });
}
// --------------------------------------------------------------------------------------------------------------------
function getColors(avgRating)
{
    if(avgRating === "1")
    {
        return ['#ffcc00', '#ccc', '#ccc', '#ccc', '#ccc'];
    }
    else if(avgRating === "2")
    {
        return ['#ffcc00', '#ffcc00', '#ccc', '#ccc', '#ccc'];
    }
    else if(avgRating === "3")
    {
        return ['#ffcc00', '#ffcc00', '#ffcc00', '#ccc', '#ccc'];
    }
    else if(avgRating === "4")
    {
        return ['#ffcc00', '#ffcc00', '#ffcc00', '#ffcc00', '#ccc'];
    }
    else if(avgRating === "5")
    {
        return ['#ffcc00', '#ffcc00', '#ffcc00', '#ffcc00', '#ffcc00'];
    }
}
