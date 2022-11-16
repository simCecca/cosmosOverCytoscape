import Cosmos from "./algorithm/cosmos";

// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape("layout", "cosmos", Cosmos); // register with cytoscape.js
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}
