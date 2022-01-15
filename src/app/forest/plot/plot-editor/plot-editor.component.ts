import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup,} from '@angular/forms';
import {PlotService} from "../../../core/services/plotService/plot.service";
import {catchError, Observable} from "rxjs";
import {PercentageDto} from "../../../core/models/treeTypeDto/percentage.dto";
import {PercentageService} from "../../../core/services/treeTypeService/percentage.service";

@Component({
  selector: 'app-auction-house-plot-editor',
  templateUrl: './plot-editor.component.html',
  styleUrls: ['./plot-editor.component.css']
})
export class PlotEditorComponent implements OnInit {

  submitted = false;
  error: any;
  plotForm: FormGroup;
  percentages$: Observable<PercentageDto[]> | undefined;
  selection!: number;
  percentageSelection: any;

  constructor(private _plotService: PlotService, private fb: FormBuilder, private _percentageService: PercentageService) {

    this.plotForm = this.fb.group({
      plotSize: new FormControl(''),
      plotResolution: new FormControl(''),
      plotTenderness: new FormControl(''),
      volume: new FormControl(''),
      averageTreeHeight: new FormControl(''),
      treeTypeDto: this.fb.array([])
    })
  }

  getAllPercentages(){
    this.percentages$ = this._percentageService.getAllPercentages()
      .pipe(catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }

  onChange($event: any) {
    //this.selection = $event.id;
  }

  addTreeTypes(){
    this.getAllPercentages()
    // const treeTypeDto = this.plotForm.controls['treeTypeDto'] as FormArray;
    //   treeTypeDto.push(this.fb.group({
    //     tree: this.fb.group({
    //       id: this.id,
    //     }),
    //     percentage: this.fb.group({
    //       id: this.id,
    //     })
    //   }));
  }

  count: number[] = [];

  deleteTreeType(i: number) {
    const index: number = this.count.indexOf(i);
    if (index !== -1) {
      this.count.splice(index, 1);
    }
  }
  getTreeSelection(data: any) {
    const tree = this.plotForm.controls['treeTypeDto'] as FormGroup;
    tree.controls['percentage'].setValue(data.id)
  }

  getPercentageSelection(data: any) {
    const percentage = this.plotForm.controls['percentageGroup'] as FormGroup;
    percentage.controls['id'].setValue(data.id)
  }

  id:number | any;

  fnGet(data: any){
    this.id=data;
    const treeTypeDto = this.plotForm.controls['treeTypeDto'] as FormArray;
    treeTypeDto.push(this.fb.group({
      tree: this.fb.group({
        id: data,
      }),
      percentage: this.fb.group({
        id: data,
      })
    }));
  }

  ngOnInit(): void {
    // this.plotForm = this.fb.group({
    //   plotSize: new FormControl(''),
    //   plotResolution: new FormControl(''),
    //   plotTenderness: new FormControl(''),
    //   volume: new FormControl(''),
    //   averageTreeHeight: new FormControl(''),
    //   treeTypes: this.fb.array([])
    // })
  }



  onSubmit() {
    // this.submitted = true;
    //
    // if (this.plotForm.invalid) {
    //   return;
    // }
    console.log(this.plotForm.value)
    //
    this._plotService.createPlot(this.plotForm.value).pipe().subscribe(
      err => {
        this.error = err;
      }
    );
  }





  // plotForm: FormGroup = new FormGroup({
  //   plotSize: new FormControl(''),
  //   plotResolution: new FormControl(''),
  //   plotTenderness: new FormControl(''),
  //   volume: new FormControl(''),
  //   averageTreeHeight: new FormControl(''),
  //   treeTypeDto: new FormArray([
  //     this.fb.group({
  //       treeType: this.fb.group({
  //         tree: this.fb.group({
  //           id: new FormControl(''),
  //           name: new FormControl('')
  //         }),
  //         percentage: this.fb.group({
  //           id: new FormControl(''),
  //           value: new FormControl('')
  //         })
  //       })
  //     })
  //   ])
  // });
  //
  // treeForm: FormGroup = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl('')
  // })
  //
  // percentageForm: FormGroup = new FormGroup({
  //   id: new FormControl(''),
  //   value: new FormControl('')
  // })
  //
  // treeTypeForm: FormGroup = new FormGroup({
  //   id: new FormControl(''),
  //   tree: this.fb.group({
  //     id: [''],
  //     name: ['']
  //   }),
  //   percentage: this.fb.group({
  //     id: [''],
  //     value: ['']
  //   })
  // })
  //
  //

  // selection!: number;
  // error: any;
  //
  // plots$: Observable<PlotDto[]> | undefined;
  // plotSelection: any;
  // selected = false;
  // $event: any;
  // plot = 0;
  // _data: any[] = [];
  //
  //
  // get plotFormValue(): { [key: string]: AbstractControl } {
  //   return this.plotForm.controls;
  // }
  //
  // constructor(private _plotService: PlotService, private fb: FormBuilder) {
  //   this.plotForm = this.fb.group({
  //     treeTypeDto: this.fb.array([
  //       this.fb.group({
  //         treeType: this.fb.group({
  //           id: '',
  //           tree: this.fb.group({
  //             id: '',
  //             name: ''
  //           }),
  //           percentage: this.fb.group({
  //             id: '',
  //             value: ''
  //           })
  //         })
  //       })
  //     ])
  //   })
  // }
  //
  //
  // get treeTypesFromArray(): FormArray {
  //   return this.plotForm.get('treeTypeDto') as FormArray
  // }
  //
  //
  // // addNewTreeType(){
  // //   this.getTreeTypesFromArray().push(
  // //     this.fb.group({
  // //       treeType: this.fb.group({
  // //         tree:
  // //       })
  // //     })
  // //   )
  // // }
  //
  // ngOnInit(): void {
  //   this.plotForm = this.fb.group({
  //     plotSize: ['', [Validators.required, Validators.min(0.1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //     plotResolution: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9999), Validators.pattern(/^[A-Za-z0-9]+$/)]],
  //     plotTenderness: ['', [Validators.required, Validators.min(0.1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //     volume: ['', [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //     averageTreeHeight: ['', [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //     treeTypeDto: this.fb.array([
  //       // this.fb.group({
  //       //   treeType: this.fb.group({
  //       //     id: '',
  //       //     tree: this.fb.group({
  //       //       id: '',
  //       //       name: ''
  //       //     }),
  //       //     percentage: this.fb.group({
  //       //       id: '',
  //       //       value: ''
  //       //     })
  //       //   })
  //       // })
  //     ])
  //   });
  //   this.treeTypeForm = this.fb.group({
  //     treeType: this.fb.group({
  //       tree: this.fb.group({
  //         id: [''],
  //         name: ['']
  //       }),
  //       percentage: this.fb.group({
  //         id: [''],
  //         value: ['']
  //       })
  //     })
  //   })
  // }
  //
  // getTree() {
  //   this.treeForm = this.fb.group({
  //     id: [''],
  //     name: ['']
  //   })
  // }
  //
  // getPercentage() {
  //   this.percentageForm = this.fb.group({
  //     id: [''],
  //     value: ['']
  //   })
  // }
  //
  // getTreeType() {
  //   this.treeTypeForm = this.fb.group({
  //     tree: [''],
  //     percentage: ['']
  //   })
  // }
  //
  //
  // onSubmit() {
  //   this.submitted = true;
  //
  //   if (this.plotForm.invalid) {
  //     return;
  //   }
  //   //const control = this.plotForm.get('treeTypes') as FormArray;
  //
  //   //control.push(this.fb.group(this.treeTypeForm.value));
  //   this.treeTypesFromArray.push(this.treeTypeForm)//
  //   console.log(this.plotForm.value)
  //   var ppp = JSON.stringify(this.plotForm)
  //   this._plotService.createPlot(JSON.parse(this.plotForm.value)).pipe().subscribe(
  //     err => {
  //       this.error = err;
  //     }
  //   );
  //   this.plotForm.reset();
  // }
  //
  onReset(): void {
    this.submitted = false;
    this.plotForm.reset()
  }
  //
  // update() {
  //   this.plotForm.controls['id'].setValue(this.selection);
  //   this._plotService.updatePlot(this.selection, this.plotForm.value).pipe().subscribe(
  //     err => {
  //       this.error = err;
  //     }
  //   );
  //   this.selection = 0;
  // }
  //
  //
  // getHotelForm() {
  //   // return this.getHotel().pipe(
  //   //   map((apiResponse: any) => this.fb.group({
  //   //     id: [apiResponse.id, Validators.required],
  //   //     plotSize: [apiResponse.id, [Validators.required, Validators.min(0.1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //   //     plotResolution: [apiResponse.plotResolution, [Validators.required, Validators.minLength(2), Validators.maxLength(9999), Validators.pattern(/^[A-Za-z0-9]+$/)]],
  //   //     plotTenderness: [apiResponse.plotTenderness, [Validators.required, Validators.min(0.1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //   //     volume: [apiResponse.volume, [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //   //     averageTreeHeight: [apiResponse.averageTreeHeight, [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern(/^[0-9]+$/)]],
  //   //     treeTypes: this.fb.array(apiResponse.treeTypes.map(treeType => this.generateTreeType(treeType)))
  //   //   }))
  //   // );
  // }
  //
  // private generateTreeType(treeType: TreeTypeDto) {
  //
  //   const roomTypeForm = this.fb.group({
  //     //   treeTypes: this.fb.group(treeType.map(treeType => this.generateTreeAndPercentage(treeType)))
  //   });
  //
  //   return roomTypeForm;
  // }
  //
  // private generateTreeAndPercentage(treeType: TreeTypeDto) {
  //
  //   const mealTypeForm = this.fb.group({
  //     tree: this.fb.group({
  //       id: ''
  //     }),
  //     percentage: this.fb.group({
  //       id: ''
  //     })
  //   });
  //
  //   return mealTypeForm;
  // }

  //
  // private generateMarketGroupForm(marketGroup: MarketGroup) {
  //
  //   const marketGroupForm = this.fb.group({
  //     chk: [marketGroup.chk, Validators.required],
  //     markets: this.fb.array(marketGroup.markets.map(market => this.generateMarketForm(market))),
  //     rateSegments: this.fb.array(marketGroup.rateSegments.map(rateSegment => this.generateRateSegmentForm(rateSegment))),
  //   });
  //
  //   return marketGroupForm;
  // }
  //
  // private generateMarketForm(market: Market) {
  //   return this.fb.group({
  //     marketId: [market.marketId, Validators.required]
  //   });
  // }
  //
  // private generateRateSegmentForm(rateSegment: RateSegment) {
  //   const rateSegmentForm = this.fb.group({
  //     chk: [rateSegment.chk, Validators.required],
  //     rateSegmentId: [rateSegment.rateSegmentId, Validators.required],
  //     hotelSeasons: this.fb.array(rateSegment.hotelSeasons.map(hotelSeason => this.generateHotelSeasonForm(hotelSeason)))
  //   });
  //
  //   return rateSegmentForm;
  // }
  //
  // private generateHotelSeasonForm(hotelSeason: HotelSeason) {
  //
  //   const hotelSeasonForm = this.fb.group({
  //     chk: [hotelSeason.chk, Validators.required],
  //     hotelSeasonId: [hotelSeason.hotelSeasonId, Validators.required],
  //     rates: this.fb.array(hotelSeason.rates.map(rate => this.generateRateForm(rate)))
  //   });
  //   return hotelSeasonForm;
  // }
  //
  // private generateRateForm(rate: Rate) {
  //   return this.fb.group({
  //     rateCodeId: [rate.rateCodeId, Validators.required],
  //     cancellationPolicyId: [rate.cancellationPolicyId, Validators.required],
  //     dayFlag: [rate.dayFlag, Validators.required],
  //     singlePrice: [rate.singlePrice, Validators.required],
  //     doublePrice: [rate.doublePrice, Validators.required],
  //     xbedPrice: [rate.xbedPrice, Validators.required],
  //     xbedChildPrice: [rate.xbedChildPrice, Validators.required],
  //     bfPrice: [rate.bfPrice, Validators.required],
  //     bfChildPrice: [rate.bfChildPrice, Validators.required],
  //     unitMonth: [rate.unitMonth, Validators.required],
  //     unitDay: [rate.unitDay, Validators.required],
  //     minStay: [rate.minStay, Validators.required]
  //   });
  // }
  // }



}




