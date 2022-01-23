import {GroupDto} from "./groupModels/groupDto";
import {SubGroupDto} from "./groupModels/subGroup.dto";

export interface ForestGroupSubGroup {
  id: number;
  group: GroupDto;
  subGroup: SubGroupDto
}
