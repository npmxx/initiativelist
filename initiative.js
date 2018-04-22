class InitiativeList {
  constructor() {
    this.initiativeList = [];
  }

  addNameToList(name) {
    if(name.length === 0) {
      alert("Whoops! The name can't be empty!");
    } else {
      var character = {
        name: name,
        color: InitiativeList.generateColor(),
        roll: "",
      };

      this.initiativeList.push(character);
    }
  }

  removeNameFromList(element) {
    this.initiativeList.splice(element, 1);
  }

  static generateColor() {
    var outputColor = "#";

    for(var i = 0; i < 6; i++) {
        var temp = Math.floor(Math.random() * Math.floor(16)); // hexadecimal, hence 16

        switch (temp) {
          case 10:
            temp = "a";
            break;
          case 11:
            temp = "b";
            break;
          case 12:
            temp = "c";
            break;
          case 13:
            temp = "d";
            break;
          case 14:
            temp = "e";
            break;
          case 15:
            temp = "f";
            break;
          default:
            ;     // leave temp alone!
        }

        outputColor += temp;
    }

    outputColor += ";";

    return outputColor;
  }

  get getCharacters() {
    if (this.initiativeList.length === 0) {
      return undefined;
    } else {
      return this.initiativeList;
    }
  }
}

function updateList() {
  var characters = initiative.getCharacters;
  var output = "";

  if(characters === undefined) {
    output = "<li id=\"empty\">Empty initiative order</li>";
  } else {
    for(var i=0; i < characters.length; i++) {
      output += "<li style=\"background-color: " + characters[i].color + "\">" + characters[i].name + " <a href=\"#\" class=\"smalltext\" onclick=\"removeName(" + i + ")\">[remove]</a></li>";
    }
  }

  initiativelist.innerHTML = output;
}

var initiative = new InitiativeList();

var initiativelist = document.querySelector("#initiativelist"); // ul element containing the list
var buttonAddName = document.querySelector("#addName");
var inputTextbox = document.querySelector("#nameList");

function removeName(index) {
  initiative.removeNameFromList(index);
  updateList();
}

buttonAddName.addEventListener("click", () => {
  initiative.addNameToList(inputTextbox.value);

  inputTextbox.value = "";

  updateList();
});

inputTextbox.addEventListener("keypress", (event) => {
  const keyName = event.key;

  if(keyName === "Enter") {
    buttonAddName.dispatchEvent(new MouseEvent("click"));
  }
});
