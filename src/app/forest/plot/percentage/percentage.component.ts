import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable} from "rxjs";
import {PercentageDto} from "../../../core/models/percentage.dto";
import {PercentageService} from "../../../core/services/forest/plot/percentage.service";

@Component({
  selector: 'app-auction-house-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  percentageForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  selection!: number;
  error: any;

  percentages$: Observable<PercentageDto[]> | undefined;
  percentageSelection: any;

  constructor(private _percentageService: PercentageService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllPercentages();
    this.percentageForm = this.fb.group({
      Id:[''],
      value: ['', [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
    });
  }

  getAllPercentages(){
    this.percentages$ = this._percentageService.getAllPercentages()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  get percentageFormValue(): { [key: string]: AbstractControl } {
    return this.percentageForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.percentageForm.invalid) {
      return;
    }
    this._percentageService.createPercentage(this.percentageForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllPercentages();
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.percentageForm.reset();
  }

  onChange($event: any) {
    this.selection = $event.id;
  }

  delete() {
    this._percentageService.deletePercentage(this.selection).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllPercentages();
      }
    );
    this.selection = 0;
  }

  update() {
    this.percentageForm.controls['Id'].setValue(this.selection);
    this._percentageService.updatePercentage(this.selection,this.percentageForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllPercentages();
      }
    );
    this.selection = 0;
  }
}
