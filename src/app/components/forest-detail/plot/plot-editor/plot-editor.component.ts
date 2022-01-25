import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {PercentageDto} from "../../../../core/models/forestDetailModels/treeTypeDto/ttDto/percentage.dto";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PlotService} from "../../../../core/services/forestDetailServices/plotServices/plot.service";
import {PercentageService} from "../../../../core/services/forestDetailServices/treeTypeServices/percentage.service";

@Component({
  selector: 'app-auction-house-plot-editor',
  templateUrl: './plot-editor.component.html',
  styleUrls: ['./plot-editor.component.css']
})
export class PlotEditorComponent implements OnInit {

  percentages$: Observable<PercentageDto[]> | undefined;
  plotForm: FormGroup;
  error: any;
  tableIndex: any;
  count: number[] = [];
  treeType: FormArray = new FormArray([]);
  treeTypeList: any[] = []
  percentageList: any[] = []
  treeList:any[] = []

  treeTypeForm = new FormGroup({
    tree: this.fb.group({
      id: new FormControl('')
    }),
    percentage: this.fb.group({
      id: new FormControl('')
    })
  });



  @Output() plots = new EventEmitter<any>()
  rowIndex: any;
  displayedColumns: any;

  constructor(private _plotService: PlotService, private fb: FormBuilder, private _percentageService: PercentageService) {
    this.plotForm = new FormGroup({
      volume: new FormControl(''),
      averageTreeHeight: new FormControl(''),
      plotSize: new FormControl(''),
      plotTenderness: new FormControl(''),
      plotResolution: new FormControl(''),
      treeTypes: new FormArray([]),
      forestId: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  getAllPercentages() {
    this.percentages$ = this._percentageService.getAllPercentages()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  addTreeTypes() {
    this.count.push(this.tableIndex)
    console.log(this.count)
  }

  getTreeSelection($event: any) {
    this.treeList[this.tableIndex]=$event
  }

  getPercentageSelection($event: any) {
    this.percentageList[this.tableIndex]=$event
  }

  onSubmit() {
    console.log(this.plotForm.value)
    if (this.plotForm.invalid) {
      return;
    }

    for(var i = 1; i <= this.count.length; i++){
      if (this.percentageList[i] != null && this.treeList[i] !=null){
        const control = <FormArray>this.plotForm.get('treeTypes')
        control.push(this.fb.group({
          tree:this.treeList[i],
          percentage:this.percentageList[i]
        }))
      }
    }
    console.log(this.plotForm.value)
    this._plotService.createPlot(this.plotForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
  }


  update() {
    // this.plotForm.controls['id'].setValue(this.selection);
    // this._plotService.updatePlot(this.selection,this.plotForm.value).pipe().subscribe(
    //   err => {
    //     this.error = err;
    //   }
    // );
    // this.selection = 0;
  }

  onReset(): void {
    window.location.reload()
  }

  deleteTreeType(i: number) {
    this.treeList.splice(this.tableIndex, 1);
    this.percentageList.splice(this.tableIndex, 1);
    this.count.splice(this.tableIndex)
  }

  logIndex(i: number) {
    this.tableIndex = i
  }
}
