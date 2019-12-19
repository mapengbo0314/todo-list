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
        "wow! pengbo blahb albha blakhsdflkjasd;fkj ow! pengbo blahb albha blakhsdflkjasd;fkjow! pengbo blahb albha blakhsdflkjasd;fkj",
        format(new Date(), "iiii"),
        "very high",
        true
      );
      const cook1 = todo(
        "Cooking dinner!",
        "wow!",
        format(new Date(), "iiii"),
        "very high"
      );

      const cook2 = todo(
        "Cooking dinner!",
        "wow! pengbo blahb albha blakhsdflkjasd;fkj ow! pengbo blahb albha blakhsdflkjasd;fkjow! pengbo blahb albha blakhsdflkjasd;fkj",
        format(new Date(), "iiii"),
        "very high",
        true
      );

      pushTask(cook);
      pushTask(cook1);
      pushTask(cook2);
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
