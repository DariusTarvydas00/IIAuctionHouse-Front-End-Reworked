import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {PlotDto} from "../../../models/forestDetailModels/plot.dto";

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  constructor(private _http: HttpClient) {
  }

  getAllPlots(): Observable<PlotDto[]> {
    return this._http
      .get<PlotDto[]>(environment.apiUrl + '/api/Plot');
  }

  deletePlot(selection: number | undefined) {
    return this._http.delete<PlotDto>(environment.apiUrl + '/api/Plot/' + selection);
  }

  createPlot(plot: PlotDto) {
    return this._http.post<PlotDto>(environment.apiUrl + '/api/Plot', plot);
  }

  updatePlot(selection: number | undefined, plot: PlotDto) {
    return this._http.put(environment.apiUrl + '/api/Plot/' + selection, plot);
  }
}
