import {ForestryEnterpriseDto} from "./forestDetailModels/forestryEnterprise.dto";
import {ForestLocationDto} from "./forestDetailModels/forestLocation.dto";
import {BidDto} from "./bid.dto";
import {PlotDto} from "./forestDetailModels/plot.dto";
import {ForestGroupSubGroup} from "./forestDetailModels/forestGroupModels/forestGroupDto";
import {ForestUidDto} from "./forestDetailModels/forestUidModels/forestUid.dto";


export interface ForestDto{
  id: number;
  forestLocation: ForestLocationDto;
  forestGroupSubGroup: ForestGroupSubGroup;
  forestryEnterprise: ForestryEnterpriseDto;
  forestUid: ForestUidDto;
  bids: BidDto[];
  plots: PlotDto[];
}
