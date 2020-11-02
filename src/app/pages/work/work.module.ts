import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewallComponent } from './viewall/viewall.component';
import {RouterModule, Routes} from '@angular/router';
import {AgGridModule} from '@ag-grid-community/angular';
import {PanelModule} from '../../components/panel/panel.module';
import { AllloansComponent } from './allloans/allloans.component';

const routes: Routes = [
  {path: '', redirectTo: 'viewall'},
  {path: 'viewall', component: ViewallComponent},
  { path: 'allloans', component: AllloansComponent },
];

@NgModule({
  declarations: [ViewallComponent, AllloansComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes),
    PanelModule
  ],
  exports: [
    RouterModule
  ]
})
export class WorkModule { }
