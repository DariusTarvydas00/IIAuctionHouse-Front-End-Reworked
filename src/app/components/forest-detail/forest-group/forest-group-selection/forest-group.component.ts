import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {GroupDto} from "../../../../core/models/forestDetailModels/forestGroupModels/groupModels/groupDto";
import {
  ForestGroupService
} from "../../../../core/services/forestDetailServices/forestGroupServices/forest-group.service";
import {SubGroupDto} from "../../../../core/models/forestDetailModels/forestGroupModels/groupModels/subGroup.dto";

@Component({
  selector: 'app-auction-house-forest-group',
  templateUrl: './forest-group.component.html',
  styleUrls: ['./forest-group.component.css']
})
export class ForestGroupComponent implements OnInit {

  groupList: Observable<GroupDto[]> | undefined;
  subGroupList$: Observable<SubGroupDto[]> | undefined;
  groupSelection: any;
  subGroupSelection: any;
  selectiong!: number;
  selectionsg!: number;
  error: any;
  submitted = false;

  @Output() g = new EventEmitter<any>()
  @Output() sg = new EventEmitter<any>()

  constructor(private _forestGroupService: ForestGroupService) {
  }

  ngOnInit(): void {
    this.getAllForestGroups();
    this.getAllSubGroups();
  }

  getAllForestGroups(){
    this.groupList = this._forestGroupService.getAllGroups()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  getAllSubGroups(){
    this.subGroupList$ = this._forestGroupService.getAllSubGroups()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onChange($event: any) {
    this.selectiong = $event.id;
    this.g.emit(this.selectionsg);
    this.selectionsg = $event.id;
    this.sg.emit(this.selectionsg);
  }

}
