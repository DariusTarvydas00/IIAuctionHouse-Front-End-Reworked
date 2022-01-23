import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ForestService} from "../../core/services/forest.service";
import {PlotService} from "../../core/services/forestDetailServices/plotServices/plot.service";

@Component({
  selector: 'app-auction-house-register-plot',
  templateUrl: './register-plot.component.html',
  styleUrls: ['./register-plot.component.css']
})
export class RegisterPlotComponent implements OnInit {


  plotForm: FormGroup = new FormGroup({
    forestId: new FormControl(''),
    plotSize: new FormControl(''),
    plotResolution: new FormControl(''),
    plotTenderness: new FormControl(''),
    volume: new FormControl(''),
    averageTreeHeight: new FormControl(''),
  })

  ngOnInit(): void {
  }

  submitted = false;
  selection!: number;
  error: any;
  plotSelection: any;
  selected = false;
  $event: any;


  get plotFormValue(): { [key: string]: AbstractControl } {
    return this.plotForm.controls;
  }

  constructor(private _plotService: PlotService, private fb: FormBuilder) {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.plotForm.value)

    if (this.plotForm.invalid) {
      return;
    }
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

  getForest($event: any) {
    this.plotForm.controls['forestId'].setValue($event.id)
  }
}
