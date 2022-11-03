import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Sidebar} from "primeng/sidebar";
import {SidebarService} from "../services/sidebar.service";
import {filter} from "rxjs";
import {FileData} from "../models/models";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {

  data: FileData;
  constructor(private dataService: DataService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.activeFile
      .pipe(
        filter(data => !!data)
      ).subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
  }

}
