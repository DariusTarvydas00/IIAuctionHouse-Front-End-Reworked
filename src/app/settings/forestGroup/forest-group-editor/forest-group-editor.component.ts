import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {GroupDto} from "../../../core/models/forestDetailModels/forestGroupModels/groupModels/groupDto";
import {ForestGroupService} from "../../../core/services/forestDetailServices/forestGroupServices/forest-group.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auction-house-forest-group-editor',
  templateUrl: './forest-group-editor.component.html',
  styleUrls: ['./forest-group-editor.component.css']
})
export class ForestGroupEditorComponent implements OnInit {

  forestGroupForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });

  forestGroups$: Observable<GroupDto[]> | undefined;
  forestGroupSelection: any;
  selection!: number;
  submitted = false;
  error: any;

  @Output() forestryEnterprise = new EventEmitter<any>()

  constructor(private _forestGroupService: ForestGroupService, private fb: FormBuilder) {
    this.forestGroupForm = this.fb.group({
      Id:[''],
      forestGroupName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    });
  }

  ngOnInit(): void {
    this.getAllForestGroups();
  }

  getAllForestGroups(){
    this.forestGroups$ = this._forestGroupService.getAllForestGroups()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onChange($event: any) {
    this.selection = $event.id;
    this.forestryEnterprise.emit(this.selection);
  }

  get forestGroupFormValue(): { [key: string]: AbstractControl } {
    return this.forestGroupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.forestGroupForm.invalid) {
      return;
    }
    this._forestGroupService.createForestGroup(this.forestGroupForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllForestGroups()
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.forestGroupForm.reset();
  }


  delete() {
    this._forestGroupService.deleteForestGroup(this.selection).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllForestGroups()
      }
    );
    this.selection = 0;
  }

  update() {
    this.forestGroupForm.controls['Id'].setValue(this.selection);
    this._forestGroupService.updateForestGroup(this.selection,this.forestGroupForm.value).pipe().subscribe(
      err => {
        this.error = err;
        this.getAllForestGroups()
      }
    );
    this.selection = 0;
  }

}
