import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable} from "rxjs";
import {TreeDto} from "../../../../../core/models/forestDetailModels/treeTypeDto/ttDto/treeDto";
import {TreeService} from "../../../../../core/services/forestDetailServices/treeTypeServices/tree.service";

@Component({
  selector: 'app-auction-house-tree-editor',
  templateUrl: './tree-editor.component.html',
  styleUrls: ['./tree-editor.component.css']
})
export class TreeEditorComponent implements OnInit {

  treeForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  selection!: number;
  error: any;

  trees$: Observable<TreeDto[]> | undefined;
  treeSelection: any;
  @Output() f = new EventEmitter<any>()

  constructor(private _treeService: TreeService, private fb: FormBuilder) {
    this.getAllTrees();
    this.treeForm = this.fb.group({
      Id:[''],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    });
  }

  ngOnInit(): void {
    this.getAllTrees();
    this.treeForm = this.fb.group({
      Id:[''],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    });
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

  onSubmit() {
    this.submitted = true;

    if (this.treeForm.invalid) {
      return;
    }
    this._treeService.createTree(this.treeForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllTrees()
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.treeForm.reset();
  }

  onChange($event: any) {
    this.selection = $event.id;
    this.f.emit(this.selection);
  }

  delete() {
    this._treeService.deleteTreeType(this.selection).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllTrees()
      }
    );
    this.selection = 0;
  }

  update() {
    this.treeForm.controls['Id'].setValue(this.selection);
    this._treeService.updateTree(this.selection,this.treeForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllTrees()
      }
    );
    this.selection = 0;
  }
}
