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

const eventRenderListener = aray => {
  aray.map(x => x.output());
  addCards(aray);
  deleteCards(aray);
  saveCards(aray);
};
export { eventClearListener, eventRenderListener };
