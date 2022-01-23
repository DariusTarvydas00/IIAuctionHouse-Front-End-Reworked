import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {PlotDto} from "../../../../core/models/forestDetailModels/plot.dto";
import {PlotService} from "../../../../core/services/forestDetailServices/plotServices/plot.service";

@Component({
  selector: 'app-auction-house-plot-selection',
  templateUrl: './plot-selection.component.html',
  styleUrls: ['./plot-selection.component.css']
})
export class PlotSelectionComponent implements OnInit {

  plots$: Observable<PlotDto[]> | undefined;
  error: any;
  plotSelection: any;
  selected = [false];

  plotForms: any[] = [];

  @Output() plot = new EventEmitter<any>()

  constructor(public _plotService: PlotService) {
  }

  ngOnInit(): void {
    this.getAllPercentages();
  }

  getAllPercentages() {
    this.plots$ = this._plotService.getAllPlots()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onSelectCard(index: any, plot: any) {
    this.selected[index] = !this.selected[index];
    if (this.selected[index]){
      this.plotForms.push(plot)
    } else {
      this.plotForms.splice(index, 1)
    }
  }
  confirmSelection() {
    this.plot.emit(this.plotForms)
  }
}
