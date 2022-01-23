import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TreeDto} from "../../models/forestDetailModels/treeTypeDto/ttDto/treeDto";
import {environment} from "../../../../environments/environment";
import {ForestryEnterpriseDto} from "../../models/forestDetailModels/forestryEnterprise.dto";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ForestryEnterpriseService {

  constructor(private _http: HttpClient) {
  }

  getAllTrees(): Observable<ForestryEnterpriseDto[]> {
    return this._http
      .get<ForestryEnterpriseDto[]>(environment.apiUrl + '/api/ForestryEnterprise');
  }

  deleteTreeType(selection: number | undefined){
    return this._http.delete<ForestryEnterpriseDto>(environment.apiUrl + '/api/ForestryEnterprise/'+ selection);
  }

  createTree(forestryEnterpriseDto: FormGroup){
    return this._http.post<ForestryEnterpriseDto>(environment.apiUrl + '/api/ForestryEnterprise/', forestryEnterpriseDto);
  }

  updateTree(selection: number | undefined, forestryEnterpriseDto: ForestryEnterpriseDto){
    return this._http.put(environment.apiUrl + '/api/ForestryEnterprise/'+selection, forestryEnterpriseDto);
  }
}
