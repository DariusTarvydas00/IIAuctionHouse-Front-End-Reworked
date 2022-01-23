import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {ForestUidDto} from "../../../models/forestDetailModels/forestUidModels/forestUid.dto";

@Injectable({
  providedIn: 'root'
})
export class ForestUidService {

  constructor(private _http: HttpClient) {
  }

  getAllForestFirstUids(): Observable<ForestUidDto[]> {
    return this._http
      .get<ForestUidDto[]>(environment.apiUrl + '/api/ForestUid/FirstUid');
  }

  getAllForestSecondUids(): Observable<ForestUidDto[]> {
    return this._http
      .get<ForestUidDto[]>(environment.apiUrl + '/api/ForestUid/SecondUid');
  }

  getAllForestThirdUids(): Observable<ForestUidDto[]> {
    return this._http
      .get<ForestUidDto[]>(environment.apiUrl + '/api/ForestUid/ThirdUid');
  }
}
