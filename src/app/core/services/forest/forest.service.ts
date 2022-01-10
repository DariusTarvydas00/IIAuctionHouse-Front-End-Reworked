import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlotDto} from "../../models/plot.dto";
import {environment} from "../../../../environments/environment";
import {ForestDto} from "../../models/forest.dto";

@Injectable({
  providedIn: 'root'
})
export class ForestService {

  constructor(private _http: HttpClient) {
  }

  getAllForests(): Observable<ForestDto[]> {
    return this._http
      .get<ForestDto[]>(environment.apiUrl + '/api/Forest');
  }

  deleteForest(selection: number | undefined) {
    return this._http.delete<ForestDto>(environment.apiUrl + '/api/Forest/' + selection);
  }

  createForest(forest: ForestDto) {
    return this._http.post<ForestDto>(environment.apiUrl + '/api/Forest', forest);
  }

  updateForest(selection: number | undefined, forest: ForestDto) {
    return this._http.put(environment.apiUrl + '/api/Forest/' + selection, forest);
  }
}
