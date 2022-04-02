const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((op) => {
    op.onclick = () => {
        if (op.id == "clear") {
            display.innerText = "";
        } else if (op.id == "del") {
            let str = display.innerText.toString();      //convert all to string
            display.innerText = str.substr(0, str.length - 1);
        } else if (display.innerText !== "" && op.id == "equal") {
            display.innerText = eval(display.innerText);    //evaluate the given expr
        } else if (display.innerText == "" && op.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);  //display blank after 2sec
        } else {
            display.innerText += op.id;
        }
    };
});


