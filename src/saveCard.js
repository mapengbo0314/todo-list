import $ from "jQuery";

const saveCards = aray => {
  $(".saveCard").on("click", function() {
    var index = $(".saveCard").index(this);
    //saving title, description value
    let titleC = document.querySelectorAll(".titleCard");
    let desC = document.querySelectorAll(".descCard");
    aray[index].title = titleC[index].innerHTML;
    aray[index].description = desC[index].innerHTML;
    alert("Your todo has been updated!");
    localStorage.setItem("task", JSON.stringify(aray));
  });
  aray.map(x => x.output());
};

export { saveCards };
