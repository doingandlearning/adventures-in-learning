import axios from "axios";

export async function getMaps(store) {
  try {
    const results = await axios.get("https://en3cc65xo3z2c4y.m.pipedream.net");
    store.commit("SET_MAPS_DATA", [...results.data.$return_value]);
  } catch (error) {
    console.log(error);
    throw new Error("Issue with getting maps", error);
  }
}

// const nodes = [
//   { id: "render", name: "Render data in Vue", state: "UNVISITED" },
//   { id: "component", name: "Component", state: "UNVISITED" },
//   { id: "methods", name: "Methods", state: "UNVISITED" },
//   { id: "computed", name: "Computed", state: "UNVISITED" },
// ];

// const links = [
//   { source: "render", target: "component" },
//   { source: "render", target: "methods" },
//   { source: "render", target: "computed" },
//   { source: "methods", target: "component" },
// ];

function constructNodes(towns = []) {
  return towns.map((town) => ({
    id: town.id,
    name: town.Name,
    state: "UNVISITED",
  }));
}

function constructLinks(towns = []) {
  const links = [];
  towns.forEach((town) => {
    if (!town.links) {
      return;
    }

    town.links.map((link) => links.push({ source: town.id, target: link }));
  });
  return links;
}
export async function getTownsByMap(store, map) {
  try {
    const results = await axios.post(
      "https://enfg1vwxdv10pq7.m.pipedream.net",
      {
        map,
      }
    );
    const towns = [...results?.data?.$return_value];
    store.commit("SET_TOWNS_DATA", towns);

    const nodes = constructNodes(towns);
    const links = constructLinks(towns);
    store.commit("SET_NODES_DATA", nodes);
    store.commit("SET_LINKS_DATA", links);
  } catch (error) {
    console.log(error);
    throw new Error("Issue with getting maps", error);
  }
}

export async function getAdventuresByTown(store, town) {
  try {
    console.log(town);
    const results = await axios.post(
      "https://enm33mhs1m12eme.m.pipedream.net",
      {
        town,
      }
    );
    store.commit("SET_ADVENTURES_DATA", { results });
  } catch (error) {
    console.log(error);
    throw new Error("Issue with getting adventures", error);
  }
}
