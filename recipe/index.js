
//new list and store in a new variable
let newListItem = document.createElement('li');

//updating text content
newListItem.textContent = 'Your favorite mug!';

//adding list item as a child of ul
document.getElementById('ingredients').appendChild(newListItem);