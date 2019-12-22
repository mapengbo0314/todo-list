import { cardInput } from "./input";
import { todo } from "./cards";
import { eventRenderListenerDelSav } from "./eventListerners";

const addCards = aray => {
  //adding cards

  let card = document.getElementById("add");
  //listens to the + button
  card.addEventListener("click", function() {
    cardInput.cardFunctions();
    //calls the add new todo list function
    addFun();
  });
  const addFun = () => {
    //listens to the click and renders the new todo list
    $("#addtodoBut").on("click", function() {
      document.getElementById("formlocations").style.display = "none";
      let myTodo = [];
      document.querySelectorAll(".input").forEach((e, i) => {
        myTodo.push(e.value);
      });

      let addNewTodo = todo(...myTodo);
      console.log(addNewTodo);
      //pushing it on to the aray, which in terms calls from the eventlistener, which is myTask
      aray.push(addNewTodo);
      localStorage.setItem("task", JSON.stringify(aray)); //same deal, store it
      console.log(JSON.parse(localStorage.getItem("task")));
      aray.map(x => x.output()); //re-render it by calling output on the new array
      //turn it off
      document.querySelectorAll(".form-popup").forEach(e => {
        e.remove();
      });
      eventRenderListenerDelSav(aray);
    });
  };
};

export { addCards };
