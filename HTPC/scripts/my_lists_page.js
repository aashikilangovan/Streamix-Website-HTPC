let allLists = JSON.parse(localStorage.getItem('lists'));
let allData = JSON.parse(localStorage.getItem('data'));
let mediaType = '';

function loadData()
{
    console.log(allLists)
    if(allLists !== null && allLists !== undefined)
    {
        for (let i = 0; i < allLists.length; i++)
        {
            if(allLists[i].title === "")
                continue;
            let listTitle = allLists[i].title;
            let mediaType = allLists[i].media;
            console.log(listTitle);
            let listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="title-info">
                    <a id="${listTitle}" href="./list_contents_page.html">
                        <h2>${allLists[i].title}</h2>
                    </a>
                </div>
                <p class="mr-20">${mediaType}</p>
                <button class="delete-button">X</button>
            `;
            let deleteButton = listItem.querySelector('.delete-button');

            deleteButton.addEventListener('click', function () {
                deleteList(this, listTitle);
            });

            let container = document.querySelector('.watchlist-items');
            container.appendChild(listItem);

            document.getElementById(listTitle).addEventListener('click', function () {
                renderContent(listTitle);
            });
        }

        function deleteList(button, listTitle) {
            for (let i = 0; i < allLists.length; i++) {
                if (listTitle === allLists[i].title) {
                    allLists.splice(i, 1);
                    break;
                }
            }
            console.log(allLists);
            localStorage.setItem('lists', JSON.stringify(allLists));
            let listItem = button.parentNode;
            listItem.remove();
        }
    }
}

function renderContent(title)
{
    console.log(title);
    for (let i = 0; i < allLists.length; i++)
    {
        if (allLists[i].title === title)
        {
            localStorage.setItem('id3', i);
        }
    }
}

document.addEventListener('DOMContentLoaded', function ()
{
    console.log(allLists)
    loadData();

    function handleClick()
    {
        // This error message pops out when two cases occur:
        let paragraphElement = document.getElementById("errorMessage");
        paragraphElement.textContent = '';

        let dropdown = document.getElementById("dropdownMenuButton");
        let list = document.querySelector('.newItem');
        let title = list.value;
        if(mediaType !== ''){
            if(!document.getElementById(title) && title !== '') {
                let listObject = {
                    title: title,
                    media: mediaType,
                    listItems: [],
                };
                allLists.push(listObject);
                localStorage.setItem('lists', JSON.stringify(allLists));
                let listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="title-info">
                        <a id="${listObject.title}" href="./list_contents_page.html">
                            <h2>${title}</h2>
                        </a>
                    </div>
                    <p class="mr-20">${mediaType}</p>
                    <button class="delete-button">X</button>
                `;

                let deleteButton = listItem.querySelector('.delete-button');
                deleteButton.addEventListener('click', function () {
                    let listItem = document.getElementById(listObject.title)
                    listItem.remove()
                    deleteList(this);
                });

                let container = document.querySelector('.watchlist-items');
                container.appendChild(listItem);

                document.getElementById(title).addEventListener('click', function () {
                    renderContent(title);
                });

                list.value = '';
                console.log(listObject);
            }
            // Error Case 1: The user attempts to create a list with a duplicate name
            else if(document.getElementById(title)){
                paragraphElement.style.color = 'red';
                paragraphElement.textContent = 'a list with that name already exists';
            }
            // Error Case 2: The user attempts to create a list with no text input
            else {
                paragraphElement.style.color = 'red';
                paragraphElement.textContent = 'a list name cannot be empty';
            }
        } else {
            paragraphElement.style.color = 'red';
            paragraphElement.textContent = 'Select a media type';
        }
    }

    function deleteList(button) {
        let listItem = button.parentNode;
        listItem.remove();
    }

    document.querySelector('.addButton').addEventListener('click', function () {
        handleClick();
    });

    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('dropdown-item')) {
            mediaType = event.target.textContent.trim();
            console.log('Selected value:', mediaType);
        }});
});

function handleItemClick(item) {
    document.querySelector('.media-type').textContent= item;
}