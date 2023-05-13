import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SankeyComponent } from './sankey.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { InputTableComponent } from './input-table-html/input-table.component';
import { InputTableMaterialComponent } from './input-table-material/input-table-material.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TabWorkComponent } from './tab-work/tab-work.component';
import { TableSlideComponent } from './table-slide/table-slide.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SankeyComponent,
    PieChartComponent,
    InputTableComponent,
    InputTableMaterialComponent,
    TabWorkComponent,
    TableSlideComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
