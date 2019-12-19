import { format, formatDistance, formatRelative, subDays } from "date-fns";

const cardInput = (() => {
  var date = new Date();
  const cardFunctions = () => {
    document.getElementById("formlocations").style.display = "block";
    //Creating a div
    let text = document.createElement("div");
    text.setAttribute("class", "form-popup");
    //creating a form
    let forms = document.createElement("form");
    forms.setAttribute("class", "forms");
    //creating the inputs
    const inputT = (cname, name) => {
      let firstInput = document.createElement("input");
      firstInput.setAttribute("class", cname);
      firstInput.setAttribute("placeholder", name);
      return { firstInput };
    };

    let titleI = inputT("titleInput", "Title");
    let descI = inputT("descInput", "Desciption");

    //date setting
    let dueI = document.createElement("input");
    dueI.setAttribute("type", "date");
    dueI.setAttribute("value", format(date, "yyyy-MM-dd"));

    //priorty setting
    let proI = document.createElement("select");
    proI.setAttribute("id", "pr");
    let opti = document.createElement("option");
    opti.setAttribute("value", "1");
    opti.textContent = "Very High";
    proI.appendChild(opti);

    forms.appendChild(titleI.firstInput);
    forms.appendChild(descI.firstInput);
    forms.appendChild(dueI);
    forms.appendChild(proI);

    text.appendChild(forms);

    document.getElementById("formlocations").appendChild(text);
  };
  let card = document.getElementById("add");
  card.addEventListener("click", function() {
    cardFunctions();
  });

  return { cardFunctions };
})();

export { cardInput };
