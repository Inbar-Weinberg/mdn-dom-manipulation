"use strict"
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.onclick = function () {
    let myItem = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    let listSpan = document.createElement('span');
    let deleteButton = document.createElement('button');

    listItem.appendChild(listSpan);
    listSpan.textContent = myItem;
    listItem.appendChild(deleteButton);
    deleteButton.textContent = 'Delete';
    list.appendChild(listItem);

    input.focus();

    deleteButton.onclick = function () {
        deleteButton.parentNode.remove();
    }
}
