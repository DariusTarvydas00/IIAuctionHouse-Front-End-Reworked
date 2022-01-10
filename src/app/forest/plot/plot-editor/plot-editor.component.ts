import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {PlotDto} from "../../../core/models/plot.dto";
import {PlotService} from "../../../core/services/forest/plot/plot.service";
import {TreeTypeDto} from "../../../core/models/treeType.dto";

@Component({
  selector: 'app-auction-house-plot-editor',
  templateUrl: './plot-editor.component.html',
  styleUrls: ['./plot-editor.component.css']
})
export class PlotEditorComponent implements OnInit {
  get data(): any[] {
    return this._data;
  }

  set data(value: any[]) {
    this._data = value;
  }

  plotForm: FormGroup = new FormGroup({
    plotSize: new FormControl(''),
    plotResolution: new FormControl(''),
    plotTenderness: new FormControl(''),
    volume: new FormControl(''),
    averageTreeHeight: new FormControl(''),
    treeTypes: new FormArray([
    ])
  });

  treeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('')
  })

  percentageForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    value: new FormControl('')
  })

 treeTypeForm: FormGroup = new FormGroup({
     tree: this.fb.group({
       id:[''],
       name:['']
     }),
     percentage: this.fb.group({
       id:[''],
       value:['']
     })
 })


  submitted = false;
  selection!: number;
  error: any;

  plots$: Observable<PlotDto[]> | undefined;
  plotSelection: any;
  selected = false;
  $event: any;
  plot = 0;
  _data: any[] = [];


  get plotFormValue(): { [key: string]: AbstractControl } {
    return this.plotForm.controls;
  }

  constructor(private _plotService: PlotService, private fb: FormBuilder) {
    this.plotForm = this.fb.group({
      // you can also set initial formgroup inside if you like
      companies: this.fb.array([
        new FormControl()
      ])
    })
  }

  ngOnInit(): void {
    this.plotForm = this.fb.group({
      id:[''],
      plotSize: ['', [Validators.required, Validators.min(0.1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
      plotResolution: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9999), Validators.pattern(/^[A-Za-z0-9]+$/)]],
      plotTenderness: ['', [Validators.required, Validators.min(0.1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
      volume: ['', [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
      averageTreeHeight: ['', [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
      treeTypes: this.fb.array([
      ])
    });
    this.treeTypeForm = this.fb.group({
      tree: this.fb.group({
        id:[''],
        name:['']
      }),
      percentage: this.fb.group({
        id:[''],
        value:['']
      })
    })
  }

  form1 = new FormArray([]);


  getTree(){
    this.treeForm= this.fb.group({
      id:[''],
      name:['']
    })
  }

  getPercentage(){
    this.percentageForm= this.fb.group({
      id:[''],
      value:['']
    })
  }

  getTreeType(){
    this.treeTypeForm = this.fb.group({
      tree:[''],
      percentage:['']
    })
}



  addNewHobby(treeType: TreeTypeDto) {
    const control = this.plotForm.get('treeTypes') as FormArray;
    control.push(this.fb.group(treeType))
  }




  onSubmit() {
    this.submitted = true;

    if (this.plotForm.invalid) {
      return;
    }
    const control = this.plotForm.get('treeTypes') as FormArray;
    control.push(this.fb.group(this.treeTypeForm.value));
    console.log(this.plotForm.value)
    console.log(this.treeTypeForm.value)
    console.log(this.treeForm.value)
    console.log(this.percentageForm.value)
    this._plotService.createPlot(this.plotForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
    this.plotForm.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.plotForm.reset();
  }

  update() {
    this.plotForm.controls['id'].setValue(this.selection);
    this._plotService.updatePlot(this.selection,this.plotForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
    this.selection = 0;
  }
}


