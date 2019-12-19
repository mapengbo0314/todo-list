import $ from "jQuery";

const deleteCards = aray => {
  $(".deleteCard").on("click", function() {
    var index = $(".deleteCard").index(this);

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
