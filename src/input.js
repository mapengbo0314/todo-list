import { format, formatDistance, formatRelative, subDays } from "date-fns";
//refactor this shit

const cardInput = (() => {
  //Adding title
  const titleCard = () => {
    let titleI = document.createElement("input");
    titleI.setAttribute("class", "input");
    titleI.setAttribute("placeholder", "Title");
    return { titleI };
  };
  //Adding Description
  const descCard = () => {
    let descI = document.createElement("textarea");
    descI.setAttribute("class", "input");
    descI.setAttribute("placeholder", "Desciption");
    descI.setAttribute("rows", "4");
    descI.setAttribute("cols", "50");
    return { descI };
  };
  //Adding Due Date
  const dueDateCard = () => {
    let dueI = document.createElement("input");
    dueI.setAttribute("type", "date");
    dueI.setAttribute("class", "input");
    dueI.setAttribute("value", format(new Date(), "yyyy-MM-dd"));

    return { dueI };
  };
  //Adding Priority Level
  const proiCard = () => {
    //priorty setting
    let proI = document.createElement("select");
    proI.setAttribute("id", "pr");
    proI.setAttribute("class", "input");
    const optionTemp = valueText => {
      let opti = document.createElement("option");
      opti.setAttribute("value", valueText);
      opti.textContent = valueText;
      return { opti };
    };
    //priority options appending
    proI.appendChild(optionTemp("Very High").opti);
    proI.appendChild(optionTemp("High").opti);
    proI.appendChild(optionTemp("Normal").opti);
    proI.appendChild(optionTemp("Low").opti);
    proI.appendChild(optionTemp("Very Low").opti);

    return { proI };
  };
  //Adding Submitt button
  const submitCard = () => {
    let subI = document.createElement("input");
    subI.setAttribute("type", "button");
    subI.setAttribute("id", "addtodoBut");
    subI.setAttribute("value", "Add new todo!");

    return { subI };
  };
  //Adding Form, in which collects all the inputs
  const formCard = () => {
    let forms = document.createElement("form");
    forms.setAttribute("id", "newTodoForm");
    forms.setAttribute("class", "forms");
    //forms appending
    forms.appendChild(titleCard().titleI);
    forms.appendChild(descCard().descI);
    forms.appendChild(dueDateCard().dueI);
    forms.appendChild(proiCard().proI);
    forms.appendChild(submitCard().subI);

    return { forms };
  };
  //Adding Text Div, which encaps the Form card
  const wholeTextCard = () => {
    let text = document.createElement("div");
    text.setAttribute("class", "form-popup");
    //form appended to the text
    text.appendChild(formCard().forms);
    return { text };
  };

  //Card is just from the formlocation to appending evertying
  const cardFunctions = () => {
    document.getElementById("formlocations").style.display = "block";
    document.getElementById("formlocations").appendChild(wholeTextCard().text);
  };

  return { cardFunctions };
})();

export { cardInput };
