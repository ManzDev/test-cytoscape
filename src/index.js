import cytoscape from "cytoscape";
// import { getUsers } from "./modules/getUsers.js";
// import { getUsersData } from "./modules/getUsersData.js";
import { getRelations } from "./modules/getRelations.js";

const graphContainer = document.querySelector(".graph-container");

const { default: users } = await import("./assets/users.json"); // await getUsers();
const { default: usersData } = await import("./assets/usersData.json"); // await getUsersData(users);

const edges = getRelations(users);

const pictures = users.map(user => {
  const { picture } = usersData[user];
  return ({ selector: `#${user}`, style: { "background-image": `url(${picture})` } });
});

console.log(pictures);

const cy = cytoscape({
  container: graphContainer,

  boxSelectionEnabled: false,
  autounselectify: true,

  elements: {
    nodes: users.map(user => ({ data: { id: user, name: user } })),
    edges
  },
  style: [
    {
      selector: "node",
      style: {
        content: "data(name)",
        "font-size": 32,
        color: "#fff",
        width: "70px",
        height: "70px"
      }
    },
    ...pictures
  ],

  layout: {
    name: "cose",
    directed: true,
    padding: 10
  }
});

const manz9000 = [...cy.$("#manz9000")][0];

manz9000.animate({
  position: { x: 100, y: 100 },
  style: { backgroundColor: "red" }
}, {
  duration: 1000
});
