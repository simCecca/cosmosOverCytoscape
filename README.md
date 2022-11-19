This is a Simple project created and maintained with the just for fun philosophy

# Cosmos-over-cytoscape

A parallel force layout on GPU is proposed.

This project aims to highlight the power of GPU parallel programming in network visualization.

In this example in codesandbox, the layout only runs for a second to display this very large graph,
the problem now is the interaction, which is slow for such large graphs
https://codesandbox.io/s/suspicious-williams-qsc2wy?file=/src/App.tsx

# Usage

- install the library

```
npm install cosmos-over-cytoscape
```

- import

```
import cosmos from "cosmos-over-cytoscape";
```

- register it in cytoscape

```
cytoscape.use(cosmos);
```

- layout props

```
import { CosmosCystoscapeLayoutOptions } from "cosmos-over-cytoscape";

const layoutProps: CosmosCystoscapeLayoutOptions = {
    name: "cosmos",
    cosmos: {
      spaceSize: 8192,
      simulation: {
        linkDistance: 1,
        friction: 0.85,
        linkSpring: 1,
        repulsion: 0.2,
        repulsionTheta: 1,
        gravity: 0.25,
      },
    },
  };
```

- recall the layout as you like in cytoscape

```
cytoscape({..props, layout: layputProps})
```

or

```
cy.layout(layoutProps).run()
```
