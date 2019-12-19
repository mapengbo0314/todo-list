//get index from button
import { deleteCards } from "./deleteCard";
const eventClearListener = () => {
  let clearing = document.getElementById("wow");
  clearing.addEventListener("click", function() {
    localStorage.clear();
    console.log("wow");
  });
};

const eventRenderListener = aray => {
  aray.map(x => x.output());
  deleteCards(aray);
};
export { eventClearListener, eventRenderListener };
