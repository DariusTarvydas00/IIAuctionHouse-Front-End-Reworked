import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {TreeDto} from "../../../../../core/models/forestDetailModels/treeTypeDto/ttDto/treeDto";
import {TreeService} from "../../../../../core/services/forestDetailServices/treeTypeServices/tree.service";
import {PercentageDto} from "../../../../../core/models/forestDetailModels/treeTypeDto/ttDto/percentage.dto";
import {PercentageService} from "../../../../../core/services/forestDetailServices/treeTypeServices/percentage.service";

@Component({
  selector: 'app-auction-house-tree-type-selection',
  templateUrl: './tree-type-selection.component.html',
  styleUrls: ['./tree-type-selection.component.css']
})
export class TreeTypeSelectionComponent implements OnInit {

  trees$: Observable<TreeDto[]> | undefined;
  percentages$: Observable<PercentageDto[]> | undefined;
  treeSelection: any;
  percentageSelection: any;
  selectiont!: number;
  selectionp!: number;
  submitted = false;
  error: any;


  @Output() percentage = new EventEmitter<any>()

  @Output() tree = new EventEmitter<any>()

  constructor(private _treeService: TreeService, private _percentageService: PercentageService) {
  }

  ngOnInit(): void {
    this.getAllTrees();
    this.getAllPercentages();
  }

  getAllTrees(){
    this.trees$ = this._treeService.getAllTrees()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  getAllPercentages() {
    this.percentages$ = this._percentageService.getAllPercentages()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onChange($event: any) {
    this.selectiont = $event.id;
    this.tree.emit(this.selectiont);
    this.selectionp = $event.id;
    this.percentage.emit(this.selectionp)
  }

}
