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
const eventRenderListenerAdd = aray => {
  aray.map(x => x.output());
  addCards(aray);
};
const eventRenderListenerDelSav = aray => {
  aray.map(x => x.output());
  deleteCards(aray);
  saveCards(aray);
};
export {
  eventClearListener,
  eventRenderListenerAdd,
  eventRenderListenerDelSav
};
