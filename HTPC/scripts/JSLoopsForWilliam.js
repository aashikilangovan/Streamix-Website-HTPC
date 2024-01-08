// top of JS file:
let allLists = JSON.parse(localStorage.getItem('lists'));
let allData = JSON.parse(localStorage.getItem('data'));

// get id for button
let subscribeButton = document.getElementById("subscribe-btn-SoundCloud");

// click event for that button
subscribeButton.addEventListener("click", function()
{
    let imgFilePath = "../images/soundcloud.png";
    // iterate through each allData object to add src to sub array and remove src from unsub array
    for (let i = 0; i < allData.length; i++)
    {
        // check if app belongs in object by checking media type
        if(allData[i].media === "Music")
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
    // iterate through each allLists object array, iterate through listItems object array of objects to add src to sub string array and remove src from unsub string array
    for(let j = 0; j < allLists.length; j++)
    {
        for(let k = 0; k < allLists[j].listItems.length; k++)
        {
            // check if object has same media type (allLists[j].listItems[k] is same as allData object)
            if(allLists[j].listItems[k].media === "Music")
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
});