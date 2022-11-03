import {Component, OnInit} from '@angular/core';
import {SnackbarService} from "./services/snackbar.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {filter} from "rxjs";
import {SnackbarModels} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'p-component'
  }
})
export class AppComponent implements OnInit {

  title = 'front';

  constructor(private _snackBar: MatSnackBar, private snackbarService: SnackbarService) {
  }



  ngOnInit() {
    this.snackbarService.snackbarEvent
      .pipe(
        filter((val) => !!val)
      ).subscribe(ev => {
        const isFileLoadFailed = ev !== SnackbarModels.FileReady;
        const styleClass = isFileLoadFailed ? 'snackbar_error' : 'snackbar_success';

        this._snackBar.open(ev, '', {duration: 4000, panelClass:styleClass});
    })


    window.addEventListener("dragover",function(e){
      e.preventDefault();
    },false);
    window.addEventListener("drop",function(e){
      e.preventDefault();
    },false);
  }

}
