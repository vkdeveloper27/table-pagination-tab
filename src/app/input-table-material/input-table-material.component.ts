import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  org_code: number;
  materialcode: number;
  BOM_weight: number;
  Material_name: string;
  Raw_materialname: string;
  Rawmaterialgrade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    org_code: 179,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a1gfdhghbdhnghdbfhnfdhfngfhgnfngcvngdbcvgnbcv vc2w',
    BOM_weight: 122,
  },
  {
    org_code: 212,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 170,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 152,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 114,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 150,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 211,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 255,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 125,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 222,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 212,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 252,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 278,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 216,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 215,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 220,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 239,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
  {
    org_code: 240,
    materialcode: 122,
    Material_name: 'abc',
    Raw_materialname: 'abc',
    Rawmaterialgrade: 'a12w',
    BOM_weight: 122,
  },
];

@Component({
  selector: 'app-input-table-material',
  templateUrl: './input-table-material.component.html',
  styleUrls: ['./input-table-material.component.css'],
})
export class InputTableMaterialComponent implements OnInit {
  constructor() {}
  searchTerm: any;
  dataSource: MatTableDataSource<any>;
  filteredData: any[];
  displayedColumns: string[] = [
    'org_code',
    'materialcode',
    'Material_name',
    'Raw_materialname',
    'Rawmaterialgrade',
    'BOM_weight',
  ];
  displayedHeaders: string[] = [
    'Org Code',
    'Material Code',
    'Material Name',
    'Raw Material Name',
    'Raw Material Grade',
    'BOM Weight',
  ];
  totalItems: number = ELEMENT_DATA.length;
  pageSize: number = 5;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 20];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.filteredData = ELEMENT_DATA;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // onPageChanged(event: PageEvent) {
  //   this.dataSource.paginator.pageIndex = event.pageIndex;
  //   this.dataSource.paginator.pageSize = event.pageSize;
  // }
  applyFilter() {
    console.log(this.searchTerm);
    this.filteredData = this.dataSource.data.filter((item: any) => {
      if (item != undefined) {
        console.log(item);
        return (
          item?.org_code.toString().includes(this.searchTerm) ||
          item.materialcode.toString().includes(this.searchTerm) ||
          item.Material_name.toLowerCase().includes(
            this.searchTerm.toLowerCase()
          ) ||
          item.Raw_materialname.toLowerCase().includes(
            this.searchTerm.toLowerCase()
          ) ||
          item.Rawmaterialgrade.toLowerCase().includes(
            this.searchTerm.toLowerCase()
          ) ||
          item.BOM_weight.toString().includes(this.searchTerm)
        );
      }
    });
    this.dataSource.data = this.filteredData;
  }
  clearFilter() {
    this.searchTerm = '';
    this.ngOnInit();
  }
}
