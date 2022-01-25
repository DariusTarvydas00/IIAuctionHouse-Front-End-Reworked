import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ForestService} from "../../../core/services/forest.service";

@Component({
  selector: 'app-auction-house-forest-editor',
  templateUrl: './forest-editor.component.html',
  styleUrls: ['./forest-editor.component.css']
})
export class ForestEditorComponent implements OnInit {

  forestForm: FormGroup

  first: number | undefined;
  second: number | undefined;
  third: number | undefined;
  group: number | undefined;
  subGroup: number | undefined;
  forestryEnterprise: number | undefined;

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
    this.forestForm = new FormGroup({
      forestryEnterprise: this.fb.group({
        id: new FormControl('', Validators.required)
      }),
      forestLocation: new FormGroup({
        geoLocationX: new FormControl('', Validators.required),
        geoLocationY: new FormControl('',Validators.required),
      }),
      forestGroupSubGroup: this.fb.group({
        group: this.fb.group({
          id: new FormControl('',Validators.required)}),
        subGroup: this.fb.group({
          id: new FormControl('',Validators.required)})
      }),
      forestUid: this.fb.group({
        firstUid: this.fb.group({
          id:new FormControl('',Validators.required),
        }),
        secondUid:this.fb.group({
          id:new FormControl('',Validators.required),
        }),
        thirdUid:this.fb.group({
          id:new FormControl('',Validators.required),
        }),
      })
    })
  }

  onSubmit() {

    this.submitted = true;
    if (this.forestForm.invalid) {
      return;
    }
    this._forestService.createForest(this.forestForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
  }

  onReset(): void {
    this.submitted = false;
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

  getForestryEnterprise($event: any) {
    let f = this.forestForm.controls['forestryEnterprise'] as FormGroup
    f.patchValue({
      id: $event.forestryEnterprise.id
    })
  }

  getSubGroup($event: any){
    let ff = this.forestForm.controls['forestGroupSubGroup'] as FormGroup
    let g = ff.controls['subGroup'] as FormGroup
    g.patchValue({
      id: $event.subGroup.id
    })
  }

  getGroup($event:any ) {
    let ff = this.forestForm.controls['forestGroupSubGroup'] as FormGroup
    let g = ff.controls['group'] as FormGroup
    g.patchValue({
      id: $event.group.id
    })
  }

  getFirst($event: any) {
    let f = this.forestForm.controls['forestUid'] as FormGroup
    let fId = f.controls['firstUid'] as FormGroup
    fId.patchValue({
      id: $event.firstUid.id
    })
  }

  getSecond($event: any) {
    let f = this.forestForm.controls['forestUid'] as FormGroup
    let sId = f.controls['secondUid'] as FormGroup
    sId.patchValue({
      id: $event.secondUid.id
    })
  }

  getThird($event: any) {
    let f = this.forestForm.controls['forestUid'] as FormGroup
    let tId = f.controls['thirdUid'] as FormGroup
    tId.patchValue({
      id: $event.thirdUid.id
    })
  }
}
