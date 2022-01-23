import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ForestService} from "../../../core/services/forest.service";

@Component({
  selector: 'app-auction-house-forest-editor',
  templateUrl: './forest-editor.component.html',
  styleUrls: ['./forest-editor.component.css']
})
export class ForestEditorComponent implements OnInit {
  forestForm: FormGroup = new FormGroup({
    forestryEnterprise: this.fb.group({
      id: new FormControl('')
    }),
    forestGroup: this.fb.group({
      id: new FormControl('')
    }),
    forestLocationPostDto: this.fb.group({
      geoLocationX: new FormControl(''),
      geoLocationY: new FormControl(''),
    }),
    forestUidPostDto: this.fb.group({
      forestFirstUidDto: this.fb.group({
        id: new FormControl('')}),
      forestSecondUidDto: this.fb.group({
        id: new FormControl('')}),
      forestThirdUidDto: this.fb.group({
        id: new FormControl('')}),
    }),
    plots: this.fb.array([])
  })

  plotForm: FormGroup = new FormGroup({
    plotSize: new FormControl(''),
    plotResolution: new FormControl(''),
    plotTenderness: new FormControl(''),
    volume: new FormControl(''),
    averageTreeHeight: new FormControl(''),
    treeTypeDto: this.fb.array([''])
  })

  treeTypeDto: FormGroup = new FormGroup({
    tree: this.fb.group({
      id: new FormControl(),
      name: new FormControl('')
    }),
    percentage: this.fb.group({
      id: new FormControl(''),
      value: new FormControl('')
    })
  })

  plotList: any[] = []
  treeTypeList: any[] = []

  submitted = false;
  selection!: number;
  error: any;
  plotSelection: any;
  selected = false;
  $event: any;

  ngOnInit(): void {
  }

  get plotFormValue(): { [key: string]: AbstractControl } {
    return this.forestForm.controls;
  }

  constructor(private _forestService: ForestService, private fb: FormBuilder) {
  }

  onSubmit() {
    this.submitted = true;
    if (this.forestForm.invalid) {
      return;
    }
    console.log(this.forestForm.value)
    this._forestService.createForest(this.forestForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
    console.log(this.forestForm.value)
    this.forestForm.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.forestForm.reset();
  }

  update() {
    this.forestForm.controls['id'].setValue(this.selection);
    this._forestService.updateForest(this.selection,this.forestForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
    this.selection = 0;
  }

  getForestGroup($event: any) {
    let fg = this.forestForm.controls['forestGroup'] as FormGroup
    fg.controls['id'].setValue($event.id)
  }

  getForestryEnterprise($event: any) {
    let fe = this.forestForm.controls['forestryEnterprise'] as FormGroup
    fe.controls['id'].setValue($event.id)
  }
  getForestFirstUid($event: any) {
    let fe = this.forestForm.controls['forestUidPostDto'] as FormGroup
    let fi = fe.controls['forestFirstUidDto'] as FormGroup
    fi.controls['id'].setValue($event.id)
  }

  getForestSecondUid($event: any) {
    let fe = this.forestForm.controls['forestUidPostDto'] as FormGroup
    let fi = fe.controls['forestSecondUidDto'] as FormGroup
    fi.controls['id'].setValue($event.id)
  }

  getForestThirdUid($event: any) {
    let fe = this.forestForm.controls['forestUidPostDto'] as FormGroup
    let fi = fe.controls['forestThirdUidDto'] as FormGroup
    fi.controls['id'].setValue($event.id)
  }

  getPlots($event: any) {
    let asd = this.forestForm.get('plots') as FormArray;
    if ($event) {
      let key: any;
      for (key in $event) {
        asd.push(new FormControl($event[key]));
      }
    }
    console.log(this.forestForm.value)
  }
}
