import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TreeDto} from "../../../models/forestDetailModels/treeTypeDto/ttDto/treeDto";

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private _http: HttpClient) {
  }

  getAllTrees(): Observable<TreeDto[]> {
    return this._http
      .get<TreeDto[]>(environment.apiUrl + '/api/Tree');
  }

  deleteTreeType(selection: number | undefined){
    return this._http.delete<TreeDto>(environment.apiUrl + '/api/Tree/'+ selection);
  }

  createTree(tree: TreeDto){
    return this._http.post<TreeDto>(environment.apiUrl + '/api/Tree', tree);
  }

   updateTree(selection: number | undefined, tree: TreeDto){
     return this._http.put(environment.apiUrl + '/api/Tree/'+selection, tree);
   }
}
