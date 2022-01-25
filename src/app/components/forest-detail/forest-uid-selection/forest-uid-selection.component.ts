import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {ForestUidService} from "../../../core/services/forestDetailServices/forestUidServices/forest-uid.service";
import {FirstUidDto} from "../../../core/models/forestDetailModels/forestUidModels/eachUid/firstUid.dto";
import {SecondUidDto} from "../../../core/models/forestDetailModels/forestUidModels/eachUid/secondUid.dto";
import {ThirdUidDto} from "../../../core/models/forestDetailModels/forestUidModels/eachUid/thirdUid.Dto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auction-house-forest-uid-selection',
  templateUrl: './forest-uid-selection.component.html',
  styleUrls: ['./forest-uid-selection.component.css']
})
export class ForestUidSelectionComponent implements OnInit {

  firstUidList$: Observable<FirstUidDto[]> | undefined;
  secondUidList$: Observable<SecondUidDto[]> | undefined;
  thirdUidList$: Observable<ThirdUidDto[]> | undefined;

  forestUidForm = new FormGroup({
      firstUid: this.fb.group({
        id: new FormControl('',Validators.required)}),
      secondUid: this.fb.group({
        id: new FormControl('',Validators.required)}),
      thirdUid: this.fb.group({
        id: new FormControl('',Validators.required)}),
  })
  error: any;
  forestFirstUidSelection: any;
  forestSecondUidSelection: any;
  forestThirdUidSelection: any;

  @Output() private f = new EventEmitter<{firstUid: number } >()
  @Output() private s = new EventEmitter<{secondUid: number } >()
  @Output() private t = new EventEmitter<{ thirdUid: number } >()

  constructor(private _forestUidService: ForestUidService, private fb: FormBuilder) {
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

  selectFirst($event: any) {
    this.f.emit({firstUid:$event});
  }

  selectSecond($event: any) {
    this.s.emit({secondUid:$event});
  }

  selectThird($event: any) {
    this.t.emit({thirdUid:$event});
  }
}
