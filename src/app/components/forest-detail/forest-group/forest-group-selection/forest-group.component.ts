import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {GroupDto} from "../../../../core/models/forestDetailModels/forestGroupModels/groupModels/groupDto";
import {ForestGroupService} from "../../../../core/services/forestDetailServices/forestGroupServices/forest-group.service";
import {SubGroupDto} from "../../../../core/models/forestDetailModels/forestGroupModels/groupModels/subGroup.dto";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

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
  selectionGroup!: number;
  selectionSubGroup!: number;
  error: any;
  submitted = false;

  group:any
  subGroup:any

  forestGroup = new FormGroup({
    group: this.fb.group({
      id: new FormControl('')}),
    subGroup: this.fb.group({
      id: new FormControl('')})
  })

  @Output() g = new EventEmitter<{group: number}>()
  @Output() sg = new EventEmitter<{subGroup: number}>()

  constructor(private _forestGroupService: ForestGroupService, private fb: FormBuilder) {
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

  selectedGroup($event: any) {
      this.g.emit({group:$event});
  }

  selectedSubGroup($event: any) {
    this.sg.emit({subGroup:$event});
  }

}
