import {ForestLocationDto} from "./forestLocation.dto";
import {ForestUidDto} from "./forestUid.dto";
import {ForestryEnterpriseDto} from "./forestryEnterprise.dto";
import {ForestGroupDto} from "../forestGroupDto";

export interface RegisterForestDto{
  forestryEnterprise: ForestryEnterpriseDto;
  forestGroup: ForestGroupDto;
  forestLocation: ForestLocationDto;
  forestUid: ForestUidDto;
}
