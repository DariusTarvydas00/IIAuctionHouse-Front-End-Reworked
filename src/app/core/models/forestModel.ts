import {ForestLocationDto} from "./forestLocation.dto";
import {TreeTypeDto} from "./treeType.dto";
import {TreeGroupDto} from "./treeGroup.dto";

export interface ForestModel {
  id: number;
  forestLocation: ForestLocationDto;
  treeType: TreeTypeDto;
  treeGroup: TreeGroupDto;
}
