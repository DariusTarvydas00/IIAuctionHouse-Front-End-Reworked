import {ForestFirstUidDto} from "./forestFirstUid.dto";
import {ForestSecondUidDto} from "./forestSecondUid.dto";
import {ForestThirdUidDto} from "./forestThirdUid.dto";

export interface ForestUidDto {
  id: number;
  firstUid: ForestFirstUidDto;
  secondUid: ForestSecondUidDto;
  thirdUid: ForestThirdUidDto;
}
