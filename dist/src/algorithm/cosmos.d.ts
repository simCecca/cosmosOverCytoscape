import { CAProps, CosmosLayoutProps } from "cosmos-over-every-tool";
import { BaseLayoutOptions, Collection, Core } from "cytoscape";
export interface CosmosCytoscape extends CAProps {
    cy: Core;
    eles: Collection;
    name: string;
}
export interface CosmosCystoscapeLayoutOptions extends BaseLayoutOptions, CosmosLayoutProps {
}
declare function Cosmos(options: CosmosCytoscape): void;
export default Cosmos;
