function changeBorder() {
  var color= document.querySelector("#border").value;
    if(color == "Blue")
    {
      document.querySelector("#paragraph").style.borderColor = "#1c569c";
    }
    else if (color == "Green") {
      document.querySelector("#paragraph").style.borderColor = "#199137";
    }
    else if (color == "Red") {
      document.querySelector("#paragraph").style.borderColor = "#9c251c";
    }
    else {
      document.querySelector("#paragraph").style.borderColor = "inherit";
    }
}

function changeBackground() {
  var color= document.querySelector("#background").value;
    if(color == "Blue")
    {
      document.querySelector("#paragraph").style.backgroundColor = "#1c569c";
    }
    else if (color == "Green") {
      document.querySelector("#paragraph").style.backgroundColor = "#199137";
    }
    else if (color == "Red") {
      document.querySelector("#paragraph").style.backgroundColor = "#9c251c";
    }
    else {
      document.querySelector("#paragraph").style.backgroundColor = "inherit";
    }
}