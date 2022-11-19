import { CAProps, CosmosLayoutProps } from "cosmos-over-every-tool";
import { Core, Collection, BaseLayoutOptions } from "cytoscape";
export interface CosmosCytoscape extends CAProps {
    cy: Core;
    eles: Collection;
    name: string;
}
export interface CosmosCystoscapeLayoutOptions extends BaseLayoutOptions, CosmosLayoutProps {
}
