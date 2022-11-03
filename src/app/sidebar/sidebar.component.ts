import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {FileData} from "../models/models";
import {SidebarService} from "../services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(private dataService: DataService, private sidebarService: SidebarService) { }
  files: FileData[] = [];

  activeId: number
  ngOnInit(): void {
    this.dataService.filesLoaded.subscribe(
      data => {
        this.files = data
      }
    );

    this.sidebarService.activeFile
      .subscribe((act) => {
      this.activeId = act?.id;
    })
  }

  selectItem(item: FileData) {
    this.sidebarService.activeFile.next(item);
  }

}
