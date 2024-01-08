document.addEventListener('DOMContentLoaded', function () {
    let allData = JSON.parse(localStorage.getItem('data'));
    let cardIds = [];
    const ratingHistoryContainer = document.getElementById('ratingHistory');
    for (let i = 0; i < allData.length; i++)
    {
        const cardId = `stars_${i}`;
        cardIds.push(cardId);
        if (allData[i].userRating === "") continue;
        const ratingCard = createRatingCard(i);
        ratingHistoryContainer.appendChild(ratingCard);
    }

    selectStars();
// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
    function createRatingCard(index) {

        const ratingCard = document.createElement('div');
        ratingCard.classList.add('rating-container');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const contentMedia = document.createElement('h1');
        contentMedia.innerHTML = `<h1>${allData[index].media}</h1>`;
        contentMedia.style.paddingBottom = "20px";
        contentMedia.style.fontSize = "20px";

        const contentTitle = document.createElement('h1');
        contentTitle.innerHTML = `<h1>${allData[index].title}</h1>`;
        contentTitle.style.paddingBottom = "10px";

        const contentImageContainer = document.createElement('div');
        contentImageContainer.classList.add('content-image-container', 'mr-4');

        const contentImage = document.createElement('img');
        contentImage.src = allData[index].src;
        contentImage.style.width = "10rem";
        contentImage.style.height = "10rem";
        contentImage.alt = allData[index].title;
        contentImage.style.display = "inline-block";

        // container for content
        const contentDetailsContainer = document.createElement('div');
        contentDetailsContainer.classList.add('content-details-container', 'flex', 'items-center', 'justify-between');
        contentDetailsContainer.setAttribute('id', cardIds[index]);
        contentDetailsContainer.innerHTML = `
        <div class="rating-stars" id="${cardIds[index]}">
            <span class="user-star" data-value="1">&#9733;</span>
            <span class="user-star" data-value="2">&#9733;</span>
            <span class="user-star" data-value="3">&#9733;</span>
            <span class="user-star" data-value="4">&#9733;</span>
            <span class="user-star" data-value="5">&#9733;</span>
        </div>
          `;
          contentDetailsContainer.style.paddingTop = "10px"

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete Rating';
        deleteButton.addEventListener('click', function () {
            allData[index].totalStars -= allData[index].userRating;
            allData[index].totalUserRatings -= 1;
            allData[index].userRating = "";
            localStorage.setItem('data', JSON.stringify(allData));
            ratingCard.remove();
        });
        contentDetailsContainer.appendChild(deleteButton);
        cardBody.appendChild(contentMedia);
        cardBody.appendChild(contentTitle);
        cardBody.appendChild(contentImage);
        cardBody.appendChild(contentDetailsContainer);
        ratingCard.appendChild(cardBody);

        return ratingCard;
    }
// ---------------------------------------------------------------------------------------------------------
    function selectStars() {
        for(let index = 0; index < cardIds.length; index++)
        {
            console.log(cardIds[index]);
            const stars = document.querySelectorAll(`#${cardIds[index]} .user-star`);
            console.log(stars);
            if (allData[index].userRating !== "") {
                handleStars(allData[index].userRating);
            }
// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
            stars.forEach(star => {
                star.addEventListener('click', function () {
                    const value = this.getAttribute('data-value');
                    handleStars(value);
                    updateRating(value);
                });

                star.addEventListener('mouseover', function () {
                    const value = this.getAttribute('data-value');
                    handleStars(value);
                });

                star.addEventListener('mouseout', function () {
                    handleStars(allData[index].userRating);
                });
            });

            function handleStars(value) {
                stars.forEach(star => {
                    if (star.getAttribute('data-value') <= value) {
                        star.classList.add('active');
                    } else {
                        star.classList.remove('active');
                    }
                });
            }
//---------------------------------------------------------------------------------------------------------------------
            function updateRating(currentRating) {
                let totalStars = parseInt(allData[index].totalStars);
                let totalUserRatings = parseInt(allData[index].totalUserRatings);

                if (allData[index].userRating === "") {
                    totalUserRatings = totalUserRatings + 1;
                    totalStars += parseInt(currentRating);
                    allData[index].userRating = currentRating;
                } else {
                    totalStars -= allData[index].userRating;
                    totalStars += parseInt(currentRating);
                    allData[index].userRating = currentRating;
                }

                const averageRating = Math.round(totalStars / totalUserRatings);
                allData[index].totalStars = totalStars.toString();
                allData[index].totalUserRatings = totalUserRatings.toString();
                allData[index].avgRating = averageRating.toString();
                console.log(allData[index].avgRating);
                allData[index].userRating = currentRating;
                localStorage.setItem('data', JSON.stringify(allData));
            }

            console.log(stars);
            if (allData[index].userRating !== "") {
                handleStars(allData[index].userRating);
            }
// The following code is modified from: --------------------------------------------------------------------------
// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
            stars.forEach(star => {
                star.addEventListener('click', function () {
                    const value = this.getAttribute('data-value');
                    handleStars(value);
                    updateRating(value);
                });

                star.addEventListener('mouseover', function () {
                    const value = this.getAttribute('data-value');
                    handleStars(value);
                });

                star.addEventListener('mouseout', function () {
                    handleStars(allData[index].userRating);
                });
            });
        }
    }
});
