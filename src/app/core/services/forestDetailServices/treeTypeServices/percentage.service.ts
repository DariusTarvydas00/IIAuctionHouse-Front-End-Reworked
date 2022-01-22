import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {PercentageDto} from "../../../models/forestDetailModels/treeTypeDto/ttDto/percentage.dto";

@Injectable({
  providedIn: 'root'
})
export class PercentageService {

  constructor(private _http: HttpClient) {
  }

  getAllPercentages(): Observable<PercentageDto[]> {
    return this._http
      .get<PercentageDto[]>(environment.apiUrl + '/api/Percentage');
  }

  deletePercentage(selection: number | undefined){
    return this._http.delete<PercentageDto>(environment.apiUrl + '/api/Percentage/'+ selection);
  }

  createPercentage(percentage: PercentageDto){
    return this._http.post<PercentageDto>(environment.apiUrl + '/api/Percentage', percentage);
  }

  updatePercentage(selection: number | undefined, percentage: PercentageDto){
    return this._http.put(environment.apiUrl + '/api/Percentage/'+selection, percentage);
  }
}
