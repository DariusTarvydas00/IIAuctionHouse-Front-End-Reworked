import {ForestLocationDto} from "./forestDetailModels/forestLocation.dto";
import {ForestUidDto} from "./forestDetailModels/forestUid.dto";
import {ForestryEnterpriseDto} from "./forestDetailModels/forestryEnterprise.dto";
import {GroupDto} from "./forestDetailModels/forestGroupModels/groupModels/groupDto";

export interface RegisterForestDto{
  forestryEnterprise: ForestryEnterpriseDto;
  forestGroup: GroupDto;
  forestLocation: ForestLocationDto;
  forestUid: ForestUidDto;
}
