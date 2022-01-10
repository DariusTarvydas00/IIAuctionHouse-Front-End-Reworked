import {TreeTypeDto} from "./treeType.dto";

export interface PlotDto{
  id: number;
  plotSize: number;
  plotResolution: string;
  plotTenderness: number;
  volume: number;
  averageTreeHeight: number;
  treeTypes: TreeTypeDto[];
}
