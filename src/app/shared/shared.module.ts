import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './../layout/layout.module';
import { LoaderComponent } from './components/loader/loader.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    LoaderComponent,
    TableComponent
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoaderComponent
  ]
})
export class SharedModule { }
