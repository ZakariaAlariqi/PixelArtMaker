var table = document.getElementById("pixel_canvas");
var form = document.getElementById("sizePicker");
var color = document.querySelector("#colorPicker");
var square = document.querySelectorAll("tr, td");
var miniSquare = document.querySelectorAll("td");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  table.innerHTML = "";

  var height = document.querySelector("input[name='height']").value;
  var width = document.querySelector("input[name='width']").value;

  makeGrid(height, width);
  
});

function makeGrid(h, w) {
  for (var i = 0; i < h; i++) {
    var row = document.createElement("TR");
    table.appendChild(row);

    for (var j = 0; j < w; j++) {
      var column = document.createElement("TD");
      table.querySelector("tr:last-child").appendChild(column);
    }

  }

  square = document.querySelectorAll("tr, td");
  miniSquare = document.querySelectorAll("td");

  
  square.forEach(function(item) {
    item.style.border = "1px solid " + color.value;
  });

  miniSquare.forEach(item => {
    item.addEventListener("click", () => {
      item.style.backgroundColor = color.value;
    })
  })
}

color.addEventListener("change", function() {
  var paint = this.value;
  square.forEach(function(item) {
    item.style.border = "1px solid " + paint;
  });

  miniSquare.forEach(item => {
    item.style.backgroundColor = "white";
  })
  
})

