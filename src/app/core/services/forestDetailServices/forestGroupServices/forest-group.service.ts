import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {GroupDto} from "../../../models/forestDetailModels/forestGroupModels/groupModels/groupDto";
import {SubGroupDto} from "../../../models/forestDetailModels/forestGroupModels/groupModels/subGroup.dto";

@Injectable({
  providedIn: 'root'
})
export class ForestGroupService {
  constructor(private _http: HttpClient) {
  }

  getAllGroups(): Observable<GroupDto[]> {
    return this._http
      .get<GroupDto[]>(environment.apiUrl + '/api/Group');
  }

  getAllSubGroups(): Observable<SubGroupDto[]> {
    return this._http
      .get<SubGroupDto[]>(environment.apiUrl + '/api/SubGroup');
  }

  deleteForestGroup(selection: number | undefined){
    return this._http.delete<GroupDto>(environment.apiUrl + '/api/Group/'+ selection);
  }

  createForestGroup(group: GroupDto){
    return this._http.post<GroupDto>(environment.apiUrl + '/api/Group', group);
  }

  updateForestGroup(selection: number | undefined, group: GroupDto){
    return this._http.put(environment.apiUrl + '/api/Group/'+selection, group);
  }
}
