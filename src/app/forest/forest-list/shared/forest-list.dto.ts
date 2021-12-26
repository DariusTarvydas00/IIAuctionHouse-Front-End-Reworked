import {ForestLocationDto} from "../../forest-location/shared/forestLocation.dto";
import {TreeGroupDto} from "../../tree-group/shared/treeGroup.dto";
import {TreeTypeDto} from "../../tree-type/shared/treeType.dto";


export interface ForestDto {
  id: number;
  forestLocation: ForestLocationDto;
  treeType: TreeTypeDto;
  treeGroup: TreeGroupDto;
}
