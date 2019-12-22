import $ from "jQuery";

const deleteCards = aray => {
  //using this function to find the index and remove4 the element using jquery
  $(".deleteCard").on("click", function() {
    var index = $(".deleteCard").index(this);
    console.log("deleted" + index);
    $(this)
      .parent("div.mainCard")
      .remove();

    aray.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(aray));
    console.log(JSON.parse(localStorage.getItem("task")));
    //myTasks.splice($(".deleteCard".indexOf(this), 1));
  });
  aray.map(x => x.output());
};

export { deleteCards };
