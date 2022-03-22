//this is applying the event listener to the parent ordered list,
// the desribed action is being performed on all the children
// indiviually however the action is the same for all.
//bubbling
let list1 = document.querySelector("ol");

//applyinth the action to the individual name/ item
list1.addEventListener("click", function (event) {
  event.target.style.textDecoration = "line-through";
});

let list2 = document.querySelector("ul");

list2.addEventListener("click", function (event) {
  event.target.style.opacity = 0;
});

// class is .
// # id
//id="row"

// evvent.target

//
