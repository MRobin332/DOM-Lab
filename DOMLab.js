document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'header-container';

    let header = document.createElement('h1');
    let headerText = document.createTextNode('This is an h1');
    header.appendChild(headerText);

    div.appendChild(header);

    let body = document.createElement('body');
    body.appendChild(div);

});





// Let off with steps 4 & 5. Pretty sure am appending content to the div correctly (line 9)
// but am not sure about appending the div to the body (line 11-12). Double check steps 1-4 before proceeding.



