function btn() {
  var inp = document.getElementById("inp").value;
  var p = document.createElement("p");
  p.innerText = inp;
  console.log(inp); 
}
function chook() {
  Colors = ["white", "grey" ];
  sel = +document.getElementById("okok").value;
  document.body.style = "background-color:" + Colors[sel];
}