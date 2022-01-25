import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {ForestryEnterpriseDto} from "../../../../core/models/forestDetailModels/forestryEnterprise.dto";
import {ForestryEnterpriseService} from "../../../../core/services/forestDetailServices/forestry-enterprise.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auction-house-forestry-enterprise-selection',
  templateUrl: './forestry-enterprise-selection.component.html',
  styleUrls: ['./forestry-enterprise-selection.component.css']
})
export class ForestryEnterpriseSelectionComponent implements OnInit {

  forestryEnterprises$: Observable<ForestryEnterpriseDto[]> | undefined;

  constructor(private _forestryEnterpriseService: ForestryEnterpriseService) {
    this.forestryEnterpriseForm = new FormGroup({
      id: new FormControl('',Validators.required)})
  }
  error: any;

  forestryEnterpriseForm: FormGroup

  @Output() fe = new EventEmitter<{forestryEnterprise: number}>()
  forestryEnterprise: any;


  ngOnInit(): void {
    this.getAllForestryEnterprises()
  }

  getAllForestryEnterprises(){
    this.forestryEnterprises$ = this._forestryEnterpriseService.getAllTrees()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onChange($event: any) {
    this.fe.emit({forestryEnterprise: $event});
  }
}
