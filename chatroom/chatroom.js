const CLIENT_ID = "wAeHwuxvJX953oYN";

const drone = new ScaleDrone(CLIENT_ID, {
  data: {
    // Will be sent out as clientData via events
    name: getRandomName(),
    color: getRandomColor(),
  },
});

const room = drone.subscribe("awesome-historical-room", {
  historyCount: 5, // ask for the 5 most recent messages from the room's history
});
room.on("history_message", (message) => console.log(message));
let members = [];

drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Successfully connected to Scaledrone");

  const room = drone.subscribe("observable-room");
  room.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    console.log("Successfully joined room");
  });

  room.on("members", (m) => {
    members = m;
    updateMembersDOM();
  });

  room.on("member_join", (member) => {
    members.push(member);
    updateMembersDOM();
  });

  room.on("member_leave", ({ id }) => {
    const index = members.findIndex((member) => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on("data", (text, member) => {
    if (member) {
      addMessageToListDOM(text, member);
    } else {
      // Message is from server
    }
  });
});

drone.on("close", (event) => {
  console.log("Connection was closed", event);
});

drone.on("error", (error) => {
  console.error(error);
});
var membersArr = membersArrFunc();
function membersArrFunc() {
  var item = "";
  var membersArr = [];
  for (i = 0; i < members.length; i++) {
    item = members[i].clientData.name;
    membersArr += item.toLowerCase();
  }
  return membersArr;
}

function getRandomName() {
  var name = window.prompt("What name do you want?");
  if (name == "aaron") {
    return "a very bad person who wants to impersonate aaron";
  } else {
    if (name == null) {
      while (name == null) {
        name = window.prompt("What name do you want?");
      }
    }
    return name;
  }

  // fbe48975df60eb77a5944597c7cc632392e993bf
}

function getRandomColor() {
  const colour = window.prompt("What colour name do you want?");
  return colour;
}

//------------- DOM STUFF

const DOM = {
  membersCount: document.querySelector(".members-count"),
  membersList: document.querySelector(".members-list"),
  messages: document.querySelector(".messages"),
  input: document.querySelector(".message-form__input"),
  form: document.querySelector(".message-form"),
};

DOM.form.addEventListener("submit", sendMessage);
var colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "aqua",
  "teal",
  "blue",
  "purple",
];
function sendMessage() {
  const value = DOM.input.value;
  if (value === "") {
    return;
  }
  if (value == "!randomColor") {
    for (i = 0; i < members.length; i++) {
      members[i].clientData.color = colors[Math.floor(Math.random() * 8)];
    }
  }
  DOM.input.value = "";
  drone.publish({
    room: "observable-room",
    message: value,
  });
}

function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement("div");
  el.appendChild(document.createTextNode(name));
  el.className = "member";
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} users in room:`;
  DOM.membersList.innerHTML = "";
  members.forEach((member) =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}

function createMessageElement(text, member) {
  const el = document.createElement("div");
  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));
  el.className = "message";
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}
