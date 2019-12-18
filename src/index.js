//import all other cards then call them
import { todo } from "./cards";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
let myTasks = [];
const cook = todo(
  "Cooking dinner!",
  "wow! pengbo blahb albha blakhsdflkjasd;fkj ow! pengbo blahb albha blakhsdflkjasd;fkjow! pengbo blahb albha blakhsdflkjasd;fkj",
  format(new Date(), "iiii"),
  "very high",
  true
);

cook.output();
const cook1 = todo(
  "Cooking dinner!",
  "wow!",
  format(new Date(), "iiii"),
  "very high"
);
cook1.output();
const cook2 = todo(
  "Cooking dinner!",
  "wow! pengbo blahb albha blakhsdflkjasd;fkj ow! pengbo blahb albha blakhsdflkjasd;fkjow! pengbo blahb albha blakhsdflkjasd;fkj",
  format(new Date(), "iiii"),
  "very high",
  true
);
cook2.output();
