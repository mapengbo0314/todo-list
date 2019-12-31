import { todo } from "./cards";
import {
  eventClearListener,
  eventRenderListenerAdd,
  eventRenderListenerDelSav
} from "./eventListerners";
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
        "Cook food",
        "Preparing dinner",
        format(new Date(), "yyyy-MM-dd"),
        "High",
        true
      );
      const cook1 = todo(
        "Sleep",
        "Working early tomorrow",
        format(new Date(), "yyyy-MM-dd"),
        "Very High"
      );
      pushTask(cook);
      pushTask(cook1);
    }
  };

  function init() {
    eventClearListener();
    prefun();
    eventRenderListenerAdd(myTasks);
    eventRenderListenerDelSav(myTasks);
  }
  return { init };
})();

export { todoFunction };
