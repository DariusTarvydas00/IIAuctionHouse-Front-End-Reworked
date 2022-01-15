import {Component, EventEmitter, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable} from "rxjs";
import {PlotDto} from "../../../core/models/plotDto/plot.dto";
import {PlotService} from "../../../core/services/plotService/plot.service";

@Component({
  selector: 'app-auction-house-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class PlotComponent implements OnInit {

  @Input() f=new EventEmitter<any>()

  plotForm: FormGroup = new FormGroup({
    plotSize: new FormControl('')
  });
  submitted = false;
  selection!: number;
  error: any;

  plots$: Observable<PlotDto[]> | undefined;
  plotSelection: any;
  selected = false;
  $event: any;
  plot = 0;

  constructor(private _plotService: PlotService, private fb: FormBuilder) {
  }

  sendD(){
    this.f.emit(this.plots$)
  }

  ngOnInit(): void {
    this.getAllPlots();
    this.plotForm = this.fb.group({
      id:[''],
      plotSize: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    });
  }

  getAllPlots(){
    this.plots$ = this._plotService.getAllPlots()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  get plotFormValue(): { [key: string]: AbstractControl } {
    return this.plotForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.plotForm.invalid) {
      return;
    }
    this._plotService.createPlot(this.plotForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllPlots();
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.plotForm.reset();
  }

  delete(plot: PlotDto) {
    this.selection = plot.id;
    this.plotForm.controls['id'].setValue(this.selection);
    console.log(this.selection)
    this._plotService.deletePlot(this.selection).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllPlots();
      }
    );
    this.selection = 0;
  }

  update() {
    this.plotForm.controls['id'].setValue(this.selection);
    this._plotService.updatePlot(this.selection,this.plotForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllPlots();
      }
    );
    this.selection = 0;
  }
}
