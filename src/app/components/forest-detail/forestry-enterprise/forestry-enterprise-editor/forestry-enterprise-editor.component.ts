import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable} from "rxjs";
import {ForestryEnterpriseDto} from "../../../../core/models/forestDetailModels/forestryEnterprise.dto";
import {ForestryEnterpriseService} from "../../../../core/services/forestDetailServices/forestry-enterprise.service";

@Component({
  selector: 'app-auction-house-forestry-enterprise-editor',
  templateUrl: './forestry-enterprise-editor.component.html',
  styleUrls: ['./forestry-enterprise-editor.component.css']
})
export class ForestryEnterpriseEditorComponent implements OnInit {

  forestryEnterpriseForm: FormGroup;
  forestryEnterprise: any;
  forestryEnterprises$: Observable<ForestryEnterpriseDto[]> | undefined;
  submitted = false;
  error: any;

  constructor(private _forestryEnterpriseService: ForestryEnterpriseService, private fb: FormBuilder) {
    this.forestryEnterpriseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    });
  }

  ngOnInit(): void {
    this.getAllForestryEnterprises();
  }

  getAllForestryEnterprises(){
    this.forestryEnterprises$ = this._forestryEnterpriseService.getAllTrees()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  get forestryEnterpriseFormValue(): { [key: string]: AbstractControl } {
    return this.forestryEnterpriseForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.forestryEnterpriseForm.invalid) {
      return;
    }
    this._forestryEnterpriseService.createTree(this.forestryEnterpriseForm.value).pipe().subscribe(
      err => {
        this.error = err;
        window.location.reload()
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.forestryEnterpriseForm.reset();
  }


  delete() {
    this._forestryEnterpriseService.deleteTreeType(this.forestryEnterprise).pipe().subscribe(
      err => {
        this.error = err;
        window.location.reload()
      }
    );
  }

  update() {
    console.log(this.forestryEnterprise)
    this._forestryEnterpriseService.updateTree(this.forestryEnterprise,this.forestryEnterpriseForm.value).pipe().subscribe(
      err => {
        this.error = err;
        window.location.reload()
      }
    );
  }

  getForestryEnterprise($event: any) {
    this.forestryEnterprise = $event.forestryEnterprise.id
  }
}
