//get index from button
import { deleteCards } from "./deleteCard";
import { saveCards } from "./saveCard";
import { addCards } from "./addCard";
const eventClearListener = () => {
  let clearing = document.getElementById("wow");
  clearing.addEventListener("click", function() {
    localStorage.clear();
    console.log("wow");
  });
};

const eventRenderListenerDel = aray => {
  aray.map(x => x.output());

  deleteCards(aray);
};
const eventRenderListenerAdd = aray => {
  aray.map(x => x.output());
  addCards(aray);
};
const eventRenderListenerSave = aray => {
  aray.map(x => x.output());

  saveCards(aray);
};
export {
  eventClearListener,
  eventRenderListenerAdd,
  eventRenderListenerDel,
  eventRenderListenerSave
};
