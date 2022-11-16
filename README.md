This is a Simple project created and maintained with the just for fun philosophy

# Cosmos-over-cytoscape

A parallel force layout on GPU is proposed.

This project aims to highlight the power of GPU parallel programming in network visualization.

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
import { CosmosCystoscapeLayoutOptions } from "cosmos-over-cytoscape/dist/src/algorithm/cosmos";

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
