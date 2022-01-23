import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {ForestryEnterpriseDto} from "../../../../core/models/forestDetailModels/forestryEnterprise.dto";
import {ForestryEnterpriseService} from "../../../../core/services/forestDetailServices/forestry-enterprise.service";

@Component({
  selector: 'app-auction-house-forestry-enterprise-selection',
  templateUrl: './forestry-enterprise-selection.component.html',
  styleUrls: ['./forestry-enterprise-selection.component.css']
})
export class ForestryEnterpriseSelectionComponent implements OnInit {

  forestryEnterprises$: Observable<ForestryEnterpriseDto[]> | undefined;
  selection!: number;
  error: any;
  forestryEnterpriseSelection: any;

  @Output() fe = new EventEmitter<any>()

  constructor(private _forestryEnterpriseService: ForestryEnterpriseService) { }

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
    this.selection = $event.id;
    this.fe.emit($event);
  }

}
