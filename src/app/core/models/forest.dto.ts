import {ForestryEnterpriseDto} from "./forestryEnterprise.dto";
import {ForestLocationDto} from "./forestLocation.dto";
import {ForestUidDto} from "./forestUid.dto";
import {BidDto} from "./bid.dto";
import {PlotDto} from "./plot.dto";

export interface ForestDto{
  id: number;
  forestGroup: string;
  forestryEnterprise: ForestryEnterpriseDto;
  forestLocation: ForestLocationDto;
  forestUid: ForestUidDto;
  bids: BidDto;
  plots: PlotDto
}
