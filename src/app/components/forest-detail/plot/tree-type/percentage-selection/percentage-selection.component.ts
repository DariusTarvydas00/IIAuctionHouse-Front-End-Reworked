import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable} from "rxjs";
import {PercentageDto} from "../../../../../core/models/forestDetailModels/treeTypeDto/ttDto/percentage.dto";
import {PercentageService} from "../../../../../core/services/forestDetailServices/treeTypeServices/percentage.service";

@Component({
  selector: 'app-auction-house-percentage-selection',
  templateUrl: './percentage-selection.component.html',
  styleUrls: ['./percentage-selection.component.css']
})
export class PercentageSelectionComponent implements OnInit {

  percentages$: Observable<PercentageDto[]> | undefined;
  percentageForm: FormGroup;
  submitted = false;
  error: any;

  @Output() p = new EventEmitter<{ percentage: number}>()
  percentageSelection: any;

  constructor(private _percentageService: PercentageService, private fb: FormBuilder) {
    this.percentageForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    });
  }

  ngOnInit(): void {
    this.getAllPercentages();
  }

  getAllPercentages(){
    this.percentages$ = this._percentageService.getAllPercentages()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  get treeFormValue(): { [key: string]: AbstractControl } {
    return this.percentageForm.controls;
  }

  getPercentage($event: any) {
    this.p.emit($event);
  }
}
