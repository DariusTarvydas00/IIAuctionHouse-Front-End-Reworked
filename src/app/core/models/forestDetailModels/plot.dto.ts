import {TreeTypeDto} from "./treeTypeDto/treeType.dto";

export interface PlotDto{
  id: number;
  volume: number;
  averageTreeHeight: string;
  plotSize: number;
  plotTenderness: number;
  plotResolution: number;
  treeTypes: TreeTypeDto[];
  forestId: number;
}
