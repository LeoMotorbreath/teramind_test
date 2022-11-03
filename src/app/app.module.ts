import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploaderComponent } from './uploader/uploader.component';
import {AngularFileUploaderModule} from "angular-file-uploader";
import {MaterialFileInputModule} from "ngx-material-file-input";
import { MatIconModule } from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UploaderComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFileUploaderModule,
    MaterialFileInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
