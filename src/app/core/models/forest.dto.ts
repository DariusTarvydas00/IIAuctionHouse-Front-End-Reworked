import {ForestryEnterpriseDto} from "./forestDetailModels/forestryEnterprise.dto";
import {ForestLocationDto} from "./forestDetailModels/forestLocation.dto";
import {BidDto} from "./bid.dto";
import {PlotDto} from "./forestDetailModels/plot.dto";
import {GroupDto} from "./forestDetailModels/forestGroupModels/groupModels/groupDto";


export interface ForestDto{
  id: number;
  forestGroup: GroupDto;
  forestryEnterprise: ForestryEnterpriseDto;
  forestLocation: ForestLocationDto;
  bids: BidDto[];
  plots: PlotDto[];
}
