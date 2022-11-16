import CosmosAlgorithm, {
  CAProps,
  CosmosLayoutProps,
} from "cosmos-over-every-tool";
import { BaseLayoutOptions, Collection, Core } from "cytoscape";

export interface CosmosCytoscape extends CAProps {
  cy: Core;
  eles: Collection;
  name: string;
}

export interface CosmosCystoscapeLayoutOptions
  extends BaseLayoutOptions,
    CosmosLayoutProps {}

function Cosmos(options: CosmosCytoscape) {
  this.default = {
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
    options: { maxExecutionTime: 1000 },
    canvas: {
      height: 1,
      width: 1,
    },
    graph: { nodes: [], edges: [] },
    ...options,
  };
  this.options = options;
  this.cosmos = new CosmosAlgorithm();
}

Cosmos.prototype.run = function () {
  const params = this.options;

  const cy: Core = params.cy;
  const nodes: Array<{ id: string }> = [];
  cy.nodes().forEach((node) => {
    const pos = node.position();
    nodes.push({ id: node.id(), ...pos });
  });
  const edges: Array<{ source: string; target: string }> = [];
  cy.edges().forEach((edge) => {
    const { source, target } = edge.data();
    edges.push({ source, target });
  });

  const container = cy.container();
  if (!container) {
    return this;
  }

  const canvas = container.querySelector("canvas");
  this.default.canvas.width = canvas.width;
  this.default.canvas.height = canvas.height;

  this.default.graph.nodes = nodes;
  this.default.graph.edges = edges;

  this.cosmos.runLayout(this.default).then((positions) => {
    cy.nodes().positions((node) => {
      const pos = positions[node.id()];
      if (!pos) {
        return node.position();
      }
      return {
        x: pos.x,
        y: pos.y,
      };
    });
    cy.fit();
  });

  return this;
};

export default Cosmos;
