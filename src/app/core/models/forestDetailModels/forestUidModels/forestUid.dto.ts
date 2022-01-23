import {FirstUidDto} from "./eachUid/firstUid.dto";
import {SecondUidDto} from "./eachUid/secondUid.dto";
import {ThirdUidDto} from "./eachUid/thirdUid.Dto";

export interface ForestUidDto {
  id: number;
  firstUid: FirstUidDto;
  secondUid: SecondUidDto;
  thirdUid: ThirdUidDto;
}
