
//adding a new li element to the ingredients list
//new list and store in a new variable
let newListItem = document.createElement('li');

//updating text content
newListItem.textContent = 'Your favorite mug!';

//adding list item as a child of ul
document.getElementById('ingredients').appendChild(newListItem);


//adding checkboxes on ingredients
const myDiv = document.getElementById("ingredients");

//create a button on HTML and grab button using js and the DOM
const groceryButton = document.getElementById("groceryButton1")
//add event listener that waits for user to click on button
//syntax is element.addEventListener(event, function, useCapture)
groceryButton.addEventListener("click", newList);


//create loop here to add the rest of the ingredients list
//creating variable that points to all items on the list
//loop through each item on the list

function newList() {
    const ingredientList = document.querySelectorAll('#ingredients li');
    ingredientList.forEach((item) => {

        const newLabel = item.textContent; //new variable to capture text labels on html items
        item.textContent = ""; //sets item content to blank

        const checkbox = document.createElement("input");

        //assigning the attributes to created checkbox
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.box = "id";

        //creating label for checkbox
        const label = document.createElement("label");

        //assigning attributes for the label tag, sets the label to hookup with input named id
        label.htmlFor = "id";

        //appending the created text to the created label tag using the item names on html
        label.appendChild(
            document.createTextNode(newLabel)
        );

        //appending the checkbox and label to div
        item.appendChild(checkbox);
        item.appendChild(label);

            });
        //creating checkbox element
    }





