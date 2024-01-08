document.addEventListener('DOMContentLoaded', function()
{
    let allData = JSON.parse(localStorage.getItem('data'));
    let avgRatings = [];
// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
    function updateGenres()
    {
        const mediaType = document.getElementById('mediaType').value;
        let paragraphElement = document.getElementById("errorMessage");
        paragraphElement.textContent = '';
        if(mediaType === '') {
            paragraphElement.style.color = 'red';
            paragraphElement.textContent = 'Select a media type or type content title';
        }
        const genreDropdown = document.getElementById('genreDropdown');
        const genreSelect = document.getElementById('genre');

        genreSelect.innerHTML = '<option value="">-- Select Genre --</option>';

        if (mediaType === 'Movie')
        {
            const movieGenres = ['Comedy', 'Animation', 'Western', 'Sci-Fi'];
            movieGenres.forEach(genre => {
                const option = document.createElement('option');
                option.textContent = genre;
                genreSelect.appendChild(option);
            });
        }
        else if (mediaType === 'TV')
        {
            const tvShowGenres = ['Mystery', 'Drama', 'Reality', 'Fantasy'];
            tvShowGenres.forEach(genre => {
                const option = document.createElement('option');
                option.textContent = genre;
                genreSelect.appendChild(option);
            });
        }
        else if (mediaType === 'Music')
        {
            const tvShowGenres = ['Pop Punk', 'Pop', 'EDM', 'Country', 'Rock', 'Jazz'];
            tvShowGenres.forEach(genre => {
                const option = document.createElement('option');
                option.textContent = genre;
                genreSelect.appendChild(option);
            });
        }
        else if (mediaType === 'Video')
        {
            const tvShowGenres = ['Sports', 'Music', 'Gaming', 'Educational'];
            tvShowGenres.forEach(genre => {
                const option = document.createElement('option');
                option.textContent = genre;
                genreSelect.appendChild(option);
            });
        }
        genreDropdown.style.display = mediaType ? 'block' : 'none';
    }
    function appendContainers(resultsContainer, i)
    {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item', 'd-flex');

        // container for content image
        const contentImageContainer = document.createElement('div');
        contentImageContainer.classList.add('content-image-container', 'mr-4');

        // content image
        const contentImage = document.createElement('img');
        contentImage.src = allData[i].src;
        contentImage.style.width = "13rem";
        contentImage.style.height = "13rem";
        contentImage.alt = allData[i].title;

        // append content image to container
        contentImageContainer.appendChild(contentImage);

        // container for content details
        const contentDetailsContainer = document.createElement('div');
        contentDetailsContainer.classList.add('content-details-container', 'mr-4', 'text-left');

        // content details
        const contentDetails = document.createElement('div');
        contentDetails.classList.add('content-details');
// ---------------------------------------------------------------------------------------------------------------
        avgRatings.push(allData[i].avgRating);
        if (allData[i].media === "Movie")
        {
            contentDetails.innerHTML = `
            <h5>${allData[i].title}</h5>
            <div class="avg-rating starsContainer space-x-2">
                <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                <div class="starSearch" style=colors[1]>&#9733;</div>
                <div class="starSearch" style=colors[2]>&#9733;</div>
                <div class="starSearch" style=colors[3]>&#9733;</div>
                <div class="starSearch" style=colors[4]>&#9733;</div>
            </div>
            <p>Total User Ratings: ${allData[i].totalUserRatings}</p>
            <p>Genre: ${allData[i].tags[0]}</p>
            <p>Year: ${allData[i].year}</p>
            <p>Duration: ${allData[i].duration}</p>
          `;
        }
        else if(allData[i].media === "Music")
        {
            contentDetails.innerHTML = `
            <h5>${allData[i].title}</h5>
            <div class="avg-rating starsContainer space-x-2">
                <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                <div class="starSearch" style=colors[1]>&#9733;</div>
                <div class="starSearch" style=colors[2]>&#9733;</div>
                <div class="starSearch" style=colors[3]>&#9733;</div>
                <div class="starSearch" style=colors[4]>&#9733;</div>
            </div>
            <p>Total User Ratings: ${allData[i].totalUserRatings}</p>
            <p>Artist: ${allData[i].artist}</p>
            <p>Genre: ${allData[i].genre}</p>
            <p>Year: ${allData[i].year}</p>
            <p>Duration: ${allData[i].duration}</p>
          `;
        }
        else if(allData[i].media === "TV")
        {
            contentDetails.innerHTML = `
            <h5>${allData[i].title}</h5>
            <div class="avg-rating starsContainer space-x-2">
                <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                <div class="starSearch" style=colors[1]>&#9733;</div>
                <div class="starSearch" style=colors[2]>&#9733;</div>
                <div class="starSearch" style=colors[3]>&#9733;</div>
                <div class="starSearch" style=colors[4]>&#9733;</div>
            </div>
            <p>Total User Ratings: ${allData[i].totalUserRatings}</p>
            <p>Genre: ${allData[i].tags[0]}</p>
            <p>Year: ${allData[i].year}</p>
            <p>Season: ${allData[i].season}</p>
            <p>Episodes: ${allData[i].episodes}</p>
          `;
            console.log("hi", allData[i]);
        }
        else if(allData[i].media === "Video")
        {
            contentDetails.innerHTML = `
            <h5>${allData[i].title}</h5>
            <div class="avg-rating starsContainer space-x-2">
                <div class="starSearch" style='color: #ffcc00;'>&#9733;</div>
                <div class="starSearch" style=colors[1]>&#9733;</div>
                <div class="starSearch" style=colors[2]>&#9733;</div>
                <div class="starSearch" style=colors[3]>&#9733;</div>
                <div class="starSearch" style=colors[4]>&#9733;</div>
            </div>
            <p>Total User Ratings: ${allData[i].totalUserRatings}</p>
            <p>Channel: ${allData[i].channel}</p>
            <p>Genre: ${allData[i].genre}</p>
            <p>Duration: ${allData[i].duration}</p>
            `;
        }
// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
        contentDetailsContainer.appendChild(contentDetails);

        const appsContainer = document.createElement('div');
        appsContainer.classList.add('apps-container', 'text-center');

        const subscribedAppsContainer = document.createElement('div');
        subscribedAppsContainer.classList.add('subscribed-apps');

        if(allData[i].title === "PewDiePie Official Stream")
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
        else if(allData[i].title === "Lofi Girl Official Stream")
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
        else if(allData[i].title === "Messi d'Or - Official Movie")
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

            allData[i].subscribed.forEach(src => {
                const imageElement = createAppImage(src, 'subscribedApp', allData[i].title);
                subscribedAppsContainer.appendChild(imageElement);
            });

            const unsubscribedAppsContainer = document.createElement('div');
            unsubscribedAppsContainer.classList.add('unsubscribed-apps');
            unsubscribedAppsContainer.innerHTML = `<p class="px-3">Unsubscribed Apps:</p>`;
            unsubscribedAppsContainer.classList.add('px-5');

            appsContainer.appendChild(unsubscribedAppsContainer);

            allData[i].unsubscribed.forEach(src => {
                const imageElement = createAppImage(src, 'unsubscribedApp');
                unsubscribedAppsContainer.appendChild(imageElement);
            });
        }

        resultItem.appendChild(contentImageContainer);
        resultItem.appendChild(contentDetailsContainer);
        resultItem.appendChild(appsContainer);

        resultContainer.appendChild(resultItem);
        resultsContainer.appendChild(resultContainer);

        console.log(allData[i].title);
        console.log(allData[i].avgRating);
    }

    function search()
    {
        const mediaType = document.getElementById('mediaType').value;
        const genre = document.getElementById('genre').value;
        const rating = document.getElementById('rating').value;
        const searchBar = document.getElementById('searchBar').value;

        console.log('Media Type:', mediaType);
        console.log('Genre:', genre);
        console.log('Rating:', rating);
        console.log('Search Query:', searchBar);

        if(mediaType === '' && searchBar === ''){
            let paragraphElement = document.getElementById("errorMessage");
            paragraphElement.style.color = 'red';
            paragraphElement.textContent = 'Select a media type or type content title';
        }

        const resultsContainer = document.getElementById('resultsContainer');
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
            console.log("h");
        }
        document.querySelector('#MGK').classList.add('hidden');
        document.querySelector('#MJ').classList.add('hidden');
// ---------------------------------------------------------------------------------------------------------------
        avgRatings = [];
        for(let i = 0; i < allData.length; i++)
        {
            console.log(allData[i].media);
            let dataGenre = "";
            if(allData[i].media === "Movie" || allData[i].media === "TV")
            {
                for(let j = 0; j < allData[i].tags.length; j++)
                {
                    if(genre === allData[i].tags[j])
                    {
                        dataGenre = allData[i].tags[j];
                        break;
                    }
                }
            }
            else
            {
                dataGenre = allData[i].genre;
            }

            if(mediaType === allData[i].media && genre === dataGenre && rating === allData[i].avgRating && searchBar === "")
            {
                appendContainers(resultsContainer, i);
            }
            else if(mediaType === allData[i].media && genre === dataGenre && rating === "" && searchBar === "")
            {
                appendContainers(resultsContainer, i);
            }
            else if(mediaType === allData[i].media && genre === "" && rating === "" && searchBar === "")
            {
                appendContainers(resultsContainer, i);
            }
            else if(mediaType === "" && genre === "" && rating === "" && searchBar === ""){}
            else if(mediaType === "" && genre === dataGenre && rating === "" && searchBar === "")
            {
                appendContainers(resultsContainer, i);
            }
            else if(mediaType === "" && genre === "" && rating === allData[i].avgRating && searchBar === "")
            {
                appendContainers(resultsContainer, i);
            }
            else if(mediaType ===  allData[i].media && genre === "" && rating === allData[i].avgRating && searchBar === "")
            {
                appendContainers(resultsContainer, i);
            }
            else if(mediaType === "" && genre === dataGenre && rating === allData[i].avgRating && searchBar === "")
            {
                appendContainers(resultsContainer, i);
            }
            else if(mediaType === "" && genre === "" && rating === "" && searchBar === allData[i].title)
            {
                appendContainers(resultsContainer, i);
            }
        }
        renderStarColors();
    }
// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
    function createAppImage(src, alt, title) {
        const imageElement = document.createElement('img');
        imageElement.src = src;
        imageElement.alt = alt;
        imageElement.style.width = "6rem";
        imageElement.style.height = "6rem";
        imageElement.style.cursor = "pointer";

        // Add click event listener
        imageElement.addEventListener('click', function()
        {
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
                    location = alt === 'subscribedApp' ? 'streaming_page_messi.html' : 'streaming_page_messi.html';
                else if(title === "Lofi Girl")
                    location = alt === 'subscribedApp' ? 'streaming_page_lofigirl.html' : 'streaming_page_lofigirl.html';
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
// ---------------------------------------------------------------------------------------------------------------
    function renderStarColors()
    {
        let colors = [];
        for(let i = 0; i < avgRatings.length; i++)
        {
            colors.push(getColors(avgRatings[i]));
        }
        let starSearchContainers = document.querySelectorAll('.starsContainer');

// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com

        // iterate over each container
        starSearchContainers.forEach(function (container, containerIndex) {
            var stars = container.querySelectorAll('div');
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
// ------------------------------------------------------------------------------------------------------------------
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

    // click handler to handle search results
    document.getElementById('searchClick').addEventListener('click', function() {
        search();
    });
    // click handler to handle search results
    document.querySelector('.genreChange').addEventListener('change', function() {
        updateGenres();
    });
});