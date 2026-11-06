
//adding a new li element to the ingredients list
//new list and store in a new variable
let newListItem = document.createElement('li');

//updating text content
newListItem.textContent = 'Your favorite mug!';

//adding list item as a child of ul
document.getElementById('ingredients').appendChild(newListItem);


//adding checkboxes on ingredients
const myDiv = document.getElementById("ingredients");

//creating checkbox element
const checkbox = document.createElement("input");

//assigning the attributes to created checkbox
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.box = "id";

//creating label for checkbox
const label = document.createElement("label");

//assigning attributes for the label tag
label.htmlFor = "id";

//appending the created text to the created label tag
label.appendChild(
    document.createTextNode("This creates a label for the checkbox.")
);

//appending the checkbox and label to div
myDiv.appendChild(checkbox);
myDiv.appendChild(label);