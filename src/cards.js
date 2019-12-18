//setting up an factory card

const todo = (title, description, dueDate, priorty, completeion) => {
  let main = document.createElement("div");
  main.setAttribute("class", "mainCard");
  // template section?
  const wholeSection = (elementType, type, name, todoType) => {
    let secBar = document.createElement(elementType);
    secBar.setAttribute(type, name);
    secBar.innerHTML = todoType;
    return { secBar };
  };
  //title section
  //priorty section
  const priot = wholeSection("a", "class", "prioCard", priorty);

  const titles = wholeSection("div", "class", "titleCard", title);

  //description section

  const desc = wholeSection("div", "class", "descCard", description);

  //dueDate using date-fns

  const due = wholeSection("div", "class", "dueCard", dueDate);

  //Check Button
  //const check = wholeSection("input", "type", "checkbox", completeion);
  //check.secBar.setAttribute("class", "checkCard");

  //Complier to everything Output
  const output = () => {
    main.appendChild(titles.secBar);
    main.appendChild(priot.secBar);
    main.appendChild(desc.secBar);
    main.appendChild(due.secBar);

    let content = document.getElementById("content");
    content.setAttribute("class", "card");
    content.appendChild(main);
  };
  return { output };
};

export { todo };
