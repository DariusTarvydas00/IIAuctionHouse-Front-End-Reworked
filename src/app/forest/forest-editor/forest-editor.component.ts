import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {PlotDto} from "../../core/models/plot.dto";
import {PlotService} from "../../core/services/forest/plot/plot.service";
import {TreeTypeDto} from "../../core/models/treeType.dto";
import {ForestService} from "../../core/services/forest/forest.service";

@Component({
  selector: 'app-auction-house-forest-editor',
  templateUrl: './forest-editor.component.html',
  styleUrls: ['./forest-editor.component.css']
})
export class ForestEditorComponent implements OnInit {

  forestForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    forestGroup: new FormControl('')
  })

  forestryEnterpriseForm: FormGroup = new FormGroup({
    id:new FormControl(''),
    name: new FormControl(''),
  })

  forestLocationForm: FormGroup = new FormGroup({
    id:new FormControl(''),
    geoLocationX: new FormControl(''),
    geoLocationY: new FormControl('')
  })

  forestUidForm: FormGroup = new FormGroup({
    id:new FormControl(''),
    firstUid: new FormControl(''),
    secondUid: new FormControl(''),
    thirdUid: new FormControl(''),
  })

  bidForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    bidAmount: new FormControl(''),
    bidDateTime: new FormControl('')
  })

  plotForm: FormGroup = new FormGroup({
    plotSize: new FormControl(''),
    plotResolution: new FormControl(''),
    plotTenderness: new FormControl(''),
    volume: new FormControl(''),
    averageTreeHeight: new FormControl(''),
    treeTypes: new FormArray([
    ])
  });

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

  treeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('')
  })

  percentageForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    value: new FormControl('')
  })

  ngOnInit(): void {
    this.plotForm = this.fb.group({
      id:[''],
      forestGroup: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9999), Validators.pattern(/^[A-Za-z]+$/)]],
    });
    this.forestryEnterpriseForm = this.fb.group({
      id:[''],
      name: [''],
    });
    this.forestLocationForm = this.fb.group({
      id:[''],
      geoLocationX: [''],
      geoLocationY: [''],
    });
    this.forestUidForm = this.fb.group({
      id: [''],
      firstUid: [''],
      secondUid: [''],
      thirdUid: [''],
    });
    this.bidForm = this.fb.group({
      id: [''],
      bidAmount: [''],
      bidDateTime: [''],
    })
    this.plotForm = this.fb.group({
      id:[''],
      plotSize: [''],
      plotResolution: [''],
      plotTenderness: [''],
      volume: [''],
      averageTreeHeight: [''],
    });
    this.treeTypeForm = this.fb.group({
      id:[''],
      tree: this.fb.group({
        id:[''],
        name:['']
      }),
      percentage: this.fb.group({
        id:[''],
        value:['']
      })
    });
    this.treeForm = this.fb.group({
      id:[''],
      name:[''],
    });
    this.percentageForm = this.fb.group({
      id:[''],
      value:[''],
    });
  }

  submitted = false;
  selection!: number;
  error: any;

  plots$: Observable<PlotDto[]> | undefined;
  plotSelection: any;
  selected = false;
  $event: any;


  get plotFormValue(): { [key: string]: AbstractControl } {
    return this.plotForm.controls;
  }

  constructor(private _forestService: ForestService, private fb: FormBuilder) {
  }

  onSubmit() {
    this.submitted = true;

    if (this.plotForm.invalid) {
      return;
    }
    const control = this.plotForm.get('treeTypes') as FormArray;
    //control.push(this.fb.group(this.treeTypeForm.value));
    console.log(this.plotForm.value)
    console.log(this.treeTypeForm.value)
    console.log(this.treeForm.value)
    console.log(this.percentageForm.value)
    console.log(this.forestForm.value)
    this._forestService.createForest(this.forestForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
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
}


