import { todo } from "./cards";
import { inputCard } from "./input";
import { eventClearListener, eventRenderListener } from "./eventListerners";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

var todoFunction = (() => {
  let myTasks = [];
  const pushTask = task => {
    myTasks.push(task);
    localStorage.setItem("task", JSON.stringify(myTasks));
  };

  const prefun = () => {
    if (localStorage.getItem("task")) {
      JSON.parse(localStorage.getItem("task")).forEach(element => {
        const lists = todo(
          element.title,
          element.description,
          element.dueDate,
          element.priorty
        );
        pushTask(lists);
      });
    } else {
      const cook = todo(
        "Cooking dinner!",
        "Hungry, needs food",
        format(new Date(), "yyyy-MM-dd"),
        "very high",
        true
      );
      const cook1 = todo(
        "Go to sleep",
        "beauty sleep",
        format(new Date(), "yyyy-MM-dd"),
        "very high"
      );
      pushTask(cook);
      pushTask(cook1);
    }
  };

  function init() {
    eventClearListener();
    prefun();
    eventRenderListener(myTasks);
  }
  return { init };
})();

export { todoFunction };
