import {Component, Input, OnInit} from '@angular/core';
import {Errors} from "../../core/models/error.dto";

@Component({
  selector: 'app-auction-house-list-errors',
  templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent implements OnInit {

  formattedErrors: Array<string> = [];
  constructor() { }

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors; }

  ngOnInit(): void {
  }

}
