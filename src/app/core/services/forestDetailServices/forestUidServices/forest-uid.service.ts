import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {ForestUidDto} from "../../../models/forestDetailModels/forestUidModels/forestUid.dto";
import {FirstUidDto} from "../../../models/forestDetailModels/forestUidModels/eachUid/firstUid.dto";
import {SecondUidDto} from "../../../models/forestDetailModels/forestUidModels/eachUid/secondUid.dto";
import {ThirdUidDto} from "../../../models/forestDetailModels/forestUidModels/eachUid/thirdUid.Dto";

@Injectable({
  providedIn: 'root'
})
export class ForestUidService {

  constructor(private _http: HttpClient) {
  }

  getAllForestFirstUids(): Observable<FirstUidDto[]> {
    return this._http
      .get<FirstUidDto[]>(environment.apiUrl + '/api/ForestUid/FirstUid');
  }

  getAllForestSecondUids(): Observable<SecondUidDto[]> {
    return this._http
      .get<SecondUidDto[]>(environment.apiUrl + '/api/ForestUid/SecondUid');
  }

  getAllForestThirdUids(): Observable<ThirdUidDto[]> {
    return this._http
      .get<ThirdUidDto[]>(environment.apiUrl + '/api/ForestUid/ThirdUid');
  }
}
