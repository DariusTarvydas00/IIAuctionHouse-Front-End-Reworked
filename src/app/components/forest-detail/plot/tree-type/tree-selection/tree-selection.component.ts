import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable} from "rxjs";
import {TreeDto} from "../../../../../core/models/forestDetailModels/treeTypeDto/ttDto/treeDto";
import {TreeService} from "../../../../../core/services/forestDetailServices/treeTypeServices/tree.service";

@Component({
  selector: 'app-auction-house-tree-selection',
  templateUrl: './tree-selection.component.html',
  styleUrls: ['./tree-selection.component.css']
})
export class TreeSelectionComponent implements OnInit {

  treeForm: FormGroup;
  submitted = false;
  error: any;

  trees$: Observable<TreeDto[]> | undefined;
  treeSelection: any;
  @Output() t = new EventEmitter<{ tree: number }>()

  constructor(private _treeService: TreeService, private fb: FormBuilder) {
    this.treeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    });
  }

  ngOnInit(): void {
    this.getAllTrees();
  }

  getAllTrees(){
    this.trees$ = this._treeService.getAllTrees()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  get treeFormValue(): { [key: string]: AbstractControl } {
    return this.treeForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.treeForm.reset();
  }

  getTree($event: any) {
    this.t.emit($event);
  }
}
