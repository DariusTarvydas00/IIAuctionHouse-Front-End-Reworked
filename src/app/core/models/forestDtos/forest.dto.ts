import {ForestryEnterpriseDto} from "./forestryEnterprise.dto";
import {ForestLocationDto} from "./forestLocation.dto";
import {ForestUidDto} from "./forestUid.dto";
import {BidDto} from "../bid.dto";
import {PlotDto} from "../plotDto/plot.dto";
import {ForestGroupDto} from "../forestGroupDto";


export interface ForestDto{
  id: number;
  forestGroup: ForestGroupDto;
  forestryEnterprise: ForestryEnterpriseDto;
  forestLocation: ForestLocationDto;
  forestUid: ForestUidDto;
  bids: BidDto[];
  plots: PlotDto[];
}
