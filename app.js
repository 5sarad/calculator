const buttons = document.querySelectorAll("button");
const screenElement = document.querySelector("input");
let newValue = "";

buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            if (buttonText === "Clear") {
                newValue = "";
            } else if (buttonText === "Back") {
                newValue = newValue.slice(0, -1);
            } else if (buttonText === "=") {
                try {
                    newValue = Function(`return ${newValue}`)();
                } catch (error) {
                    newValue = "Error";
                }
            } else if (buttonText === "x²") {
                newValue = Math.pow(parseFloat(newValue), 2);
            } else if (buttonText === "√") {
                newValue = Math.sqrt(parseFloat(newValue));
            } else if (buttonText === "1/x") {
                newValue = 1 / parseFloat(newValue);
            } else if (buttonText === "log") {
                newValue = Math.log10(parseFloat(newValue));
            } else if (buttonText === "ln") {
                newValue = Math.log(parseFloat(newValue));
            } else if (buttonText === "%") {
                newValue = parseFloat(newValue) / 100;
            } else {
                newValue += buttonText;
            }
            screenElement.value = newValue;
        });
    });

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (/[0-9+\-*/.%]/.test(key) || key === "Backspace" || key === "Enter") {
        event.preventDefault();
        const button = [...buttons].find(btn => btn.textContent === key);
        if (button) {
            button.click();
        }
    }
});