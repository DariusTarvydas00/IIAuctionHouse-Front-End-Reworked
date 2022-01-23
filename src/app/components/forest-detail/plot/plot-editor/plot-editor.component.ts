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
  plotForm: FormGroup = new FormGroup({
    volume: new FormControl(''),
    averageTreeHeight: new FormControl(''),
    plotSize: new FormControl(''),
    plotTenderness: new FormControl(''),
    plotResolution: new FormControl(''),
    treeTypeDto: this.fb.array([])
  });
  error: any;
  count: number[] = [0];
  treeType: FormArray = new FormArray([]);
  treeTypeList: any[] = []

  treeTypeForm = new FormGroup({
    tree: this.fb.group({
      id: new FormControl('')
    }),
    percentage: this.fb.group({
      id: new FormControl('')
    })
  });

  @Output() plots = new EventEmitter<any>()
  noSelection = true;

  constructor(private _plotService: PlotService, private fb: FormBuilder, private _percentageService: PercentageService) {
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
    this.noSelection = false;
    let number = this.count.length
    this.count.push(number)
    this.getAllPercentages()
  }

  getTreeSelection(data: any) {
    const tree = this.treeTypeForm.controls['tree'] as FormGroup;
    tree.controls['id'].setValue(data)
  }

  getPercentageSelection(data: any) {
    const percentage = this.treeTypeForm.controls['percentage'] as FormGroup;
    percentage.controls['id'].setValue(data)
  }

  onSubmit() {
    if (this.plotForm.invalid) {
      return;
    }
    let asd = this.plotForm.get('treeTypeDto') as FormArray;
    for (let asda of this.treeTypeList){
      asd.push(asda)
    }
    this._plotService.createPlot(this.plotForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
  }

  onReset(): void {
    window.location.reload()
  }

  deleteTreeType(i: number) {
    const tree = this.plotForm.controls['treeTypeDto'] as FormArray;
    tree.removeAt(i)
    this.treeTypeList.splice(i, 1);
    this.count.splice(i, 1);
  }

  saveSelectedOption() {
    //this.treeType.push(this.treeTypeForm);
    this.treeTypeList[this.treeTypeList.length] = this.treeTypeForm
    this.noSelection = true;
  }
}
