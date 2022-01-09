import {ForestLocationDto} from "./forestLocation.dto";
import {TreeGroupDto} from "./treeGroup.dto";
import {TreeTypeDto} from "./treeType.dto";


export interface ForestDto {
  id: number;
  forestLocation: ForestLocationDto;
  treeType: TreeTypeDto;
  treeGroup: TreeGroupDto;
}
