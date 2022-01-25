import {ForestryEnterpriseDto} from "./forestDetailModels/forestryEnterprise.dto";
import {ForestLocationDto} from "./forestDetailModels/forestLocation.dto";
import {ForestGroupSubGroup} from "./forestDetailModels/forestGroupModels/forestGroupDto";
import {ForestUidDto} from "./forestDetailModels/forestUidModels/forestUid.dto";


export interface ForestDto{
  id: number;
  forestryEnterprise: ForestryEnterpriseDto;
  forestLocation: ForestLocationDto;
  forestGroupSubGroup: ForestGroupSubGroup;
  forestUid: ForestUidDto;
}
