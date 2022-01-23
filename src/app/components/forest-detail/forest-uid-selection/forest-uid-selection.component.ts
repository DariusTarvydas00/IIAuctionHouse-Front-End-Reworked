import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {ForestUidDto} from "../../../core/models/forestDetailModels/forestUidModels/forestUid.dto";
import {ForestUidService} from "../../../core/services/forestDetailServices/forestUidServices/forest-uid.service";

@Component({
  selector: 'app-auction-house-forest-uid-selection',
  templateUrl: './forest-uid-selection.component.html',
  styleUrls: ['./forest-uid-selection.component.css']
})
export class ForestUidSelectionComponent implements OnInit {

  firstUidList$: Observable<ForestUidDto[]> | undefined;
  secondUidList$: Observable<ForestUidDto[]> | undefined;
  thirdUidList$: Observable<ForestUidDto[]> | undefined;
  error: any;
  forestFirstUidSelection: any;
  forestSecondUidSelection: any;
  forestThirdUidSelection: any;

  @Output() firstUid = new EventEmitter<any>()
  @Output() secondUid = new EventEmitter<any>()
  @Output() thirdUid = new EventEmitter<any>()

  constructor(public _forestUidService: ForestUidService) {
  }

  ngOnInit(): void {
    this.getAllForestFirstUids();
    this.getAllForestSecondUids();
    this.getAllForestThirdUids();
  }

  getAllForestFirstUids() {
    this.firstUidList$ = this._forestUidService.getAllForestFirstUids()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  getAllForestSecondUids() {
    this.secondUidList$ = this._forestUidService.getAllForestSecondUids()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  getAllForestThirdUids() {
    this.thirdUidList$ = this._forestUidService.getAllForestThirdUids()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onChange($event: any) {
    this.firstUid.emit($event)
    this.secondUid.emit($event)
    this.thirdUid.emit($event)
  }
}
