class pageControls {
  #input1;
  #input2;
  #button1;
  #button2;
  #colorOutput;
  #indexOutput;
  constructor() {
    this.#input1 = document.querySelector("#color");
    this.#input2 = document.querySelector(`#check`);
    this.#button1 = document.querySelector(`[value = "Add to Array"]`);
    this.#button2 = document.querySelector(`[value = "Check Color"]`);
    this.colorArray = [];
    this.addEventListeners();
    this.#colorOutput = document.querySelector(`#contents`);
    this.#indexOutput = document.querySelector(`#output`);
  }
  addColorToArray() {
    this.colorArray.push(this.#input1.value);
    console.log(this.colorArray);
    this.#input1.value = "";
    this.displayColors();
  }
  displayColors() {
    let outputMessage = "";
    for (let i of this.colorArray) {
      outputMessage += `<span style="padding: 4px; margin-right: 3px;border: 1px solid black; background-color:${i}">${i}</span>`;
    }
    this.#colorOutput.innerHTML = outputMessage;
  }
  checkColorExsists() {
    let output;
    let query = this.#input2.value;
    let arrayIndex = this.colorArray.indexOf(query);
    if (arrayIndex === -1) {
      output = `Sorry, unable to find ${query}.`;
    } else {
      output = `The index of ${query} is: ${arrayIndex}`;
    }
    this.#indexOutput.innerHTML = output;
    this.#input2.value = "";
  }
  addEventListeners() {
    this.#button1.addEventListener("click", this.addColorToArray.bind(this));
    this.#button2.addEventListener("click", this.checkColorExsists.bind(this));
  }
}

let pageUserControls = new pageControls();
