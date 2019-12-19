//setting up an factory card

const todo = (title, description, dueDate, priorty) => {
  let main = document.createElement("div");

  main.setAttribute("class", "mainCard");
  // template section?
  const wholeSection = (elementType, type, name, todoType, taskName) => {
    let secBar = document.createElement(elementType);
    secBar.setAttribute(type, name);
    secBar.innerHTML = taskName + todoType;
    return { secBar };
  };
  //title section
  //priorty section
  const priot = wholeSection(
    "a",
    "class",
    "prioCard",
    priorty,
    "Priority Level: "
  );

  const titles = wholeSection("div", "class", "titleCard", title, "");

  //description section

  const desc = wholeSection(
    "div",
    "class",
    "descCard",
    description,
    "Description: "
  );

  //dueDate using date-fns

  const due = wholeSection(
    "div",
    "class",
    "dueCard",
    dueDate,
    "Due date: &nbsp; &nbsp;&nbsp;"
  );
  const deleteButton = wholeSection(
    "input",
    "type",
    "button",
    "Complete and Delete Task",
    ""
  );
  deleteButton.secBar.setAttribute("class", "deleteCard");
  deleteButton.secBar.setAttribute("value", "Complete and Delete Task");

  const output = () => {
    main.appendChild(titles.secBar);
    main.appendChild(priot.secBar);
    main.appendChild(desc.secBar);
    main.appendChild(due.secBar);
    main.appendChild(deleteButton.secBar);
    let content = document.getElementById("content");
    content.setAttribute("class", "card");
    content.appendChild(main);
  };
  return { title, description, dueDate, priorty, output };
};

export { todo };
