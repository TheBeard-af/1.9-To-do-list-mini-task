
function newItem() {

    //javascript
    //1. Adding a new item to the list of items: 
    //    let li = document.createElement("li");
    //    let inputValue = document.getElementById("input").value;
    //    let text = document.createTextNode(inputValue);
    //    li.appendChild(text);

    //    if (inputValue === '') {
    //      alert("You must write something!");
    //    } else {
    //      let list = document.querySelector('#list');
    //      list.appendChild(li);
    //    }

    //1. Adding a new item to the list of items using Jquery: 
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $("#list").append(li);
    }

    //2. Crossing out an item from the list of items :
    // function crossOut() {
    //     li.classList.toggle("strike");
    // }

    // li.addEventListener("dblclick", crossOut);

    //2. Crossing out an item from the list of items using Jquery:

    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });


    //3(i). Adding the delete button "X": 
    // let crossOutButton = document.createElement("crossOutButton");
    // crossOutButton.appendChild(document.createTextNode("X"));
    // li.appendChild(crossOutButton);

    // crossOutButton.addEventListener("click", deleteListItem);

    //3(i). Adding the delete button "X" using Jquery: 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    // function deleteListItem() {
    //     li.classList.add("delete")
    // }

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css using Jquery:
    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }
    // 4. Reordering the items: 
    $('#list').sortable();

}