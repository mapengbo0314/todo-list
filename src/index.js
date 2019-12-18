const todo = (title, description) => {
  const output = () => {
    return `${title} is listed to be done for the reasons of ${description}`;
  };

  return { output };
};

const task1 = todo("Go sleep", "Cuz u got to go to work tommorow");

let htmlfinder = document.getElementById("title");
let task1input = document.createElement("p");
task1input.textContent = task1.output();

htmlfinder.appendChild(task1input);
