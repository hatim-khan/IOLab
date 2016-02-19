//
document.getElementById('add').addEventListener('click', add);
// document.getElementById('checkbox').addEventListener('click', remove);



function add() {
  // grab the parent and newly inputted node
  var new_todo = document.getElementById('task');
  var existing = document.getElementById('remaining');

  // create the checkbox node
  var checkbox = document.createElement('input');
  checkbox.type='checkbox';
  checkbox.id='new';
  checkbox.value='new_todo.value';
  //create the label node
  var label = document.createElement('label');
  label.appendChild(document.createTextNode(new_todo.value));
  ///grab all of the todos elements
  var todos = document.getElementsByClassName('todos');
  ///append the checkbox and label to existing
  existing.appendChild(checkbox);
  existing.appendChild(label);

}

function completed() {

}

function remove() {
  var parent = document.getElementById('remaining');
  var child = document.getElementById(removed);
  parent.removeChild(child);
}
