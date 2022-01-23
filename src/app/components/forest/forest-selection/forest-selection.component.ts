import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {ForestDto} from "../../../core/models/forest.dto";
import {ForestService} from "../../../core/services/forest.service";

@Component({
  selector: 'app-auction-house-forest-selection',
  templateUrl: './forest-selection.component.html',
  styleUrls: ['./forest-selection.component.css']
})
export class ForestSelectionComponent implements OnInit {

  forests$: Observable<ForestDto[]> | undefined;
  error: any;
  forestSelection: any;
  selected = [false];

  forestForms: any[] = [];

  @Output() plot = new EventEmitter<any>()

  constructor(public _forestService: ForestService) {
  }

  ngOnInit(): void {
    this.getAllForests();
  }

  getAllForests() {
    this.forests$ = this._forestService.getAllForests()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onSelectCard(index: any, plot: any) {
    this.selected[index] = !this.selected[index];
    if (this.selected[index]){
      this.forestForms.push(plot)
    } else {
      this.forestForms.splice(index, 1)
    }
  }
  confirmSelection() {
    this.plot.emit(this.forestForms)
  }
}
