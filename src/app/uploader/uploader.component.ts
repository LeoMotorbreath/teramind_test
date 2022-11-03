import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UploaderConfig} from "./uploader-config/config";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileValidator} from "ngx-material-file-input";
import {SnackbarService} from "../services/snackbar.service";
import {FileData, SnackbarModels} from "../models/models";
import {DataService} from "../services/data.service";
import {SidebarService} from "../services/sidebar.service";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploaderComponent implements OnInit {

  uploaderConfig = UploaderConfig;
  formDoc: FormGroup;
  fileData: Partial<FileData>;
  id = 0;
  test

  private _reader = new FileReader();
  constructor(private _fb: FormBuilder, private snackbarService: SnackbarService, private dataService: DataService, private sidebarService: SidebarService) { }

  ngOnInit() {
    this.formDoc = this._fb.group({
      requiredfile: [
        undefined,
        [Validators.required, FileValidator.maxContentSize(this.uploaderConfig.maxSize)]
      ]
    });

    // to Tired to add viewChild
    document.getElementById('drop-area').addEventListener('drop', (ev) => {

      this.onFileLoad(ev.dataTransfer.files[0])
      ev.preventDefault();
      ev.stopPropagation();
    })

    this._reader.addEventListener('load', (val) => {


      const text = this._reader.result;
      const fileData: FileData = {
        uploadTime: new Date().toLocaleString(),
        data: text as string,
        name: this.fileData.name,
        fileSize: this.fileData.fileSize,
        id: ++this.id
      };

      const files = this.dataService.filesLoaded.value;
      files.push(fileData)

      this.snackbarService.snackbarEvent.next(SnackbarModels.FileReady);

      this.dataService.filesLoaded.next(files)
      this.sidebarService.activeFile.next(fileData)
    })

    this.formDoc.get('requiredfile').valueChanges.subscribe(
      (val) => {
        const fileToLoad = val._files[0];

        this.onFileLoad(fileToLoad);
      })
  }


  onFileLoad(file) {
    if (!this.extentionValid(file.name)) {
      this.snackbarService.snackbarEvent.next(SnackbarModels.FileExtensionInvalid);
      return;
    }

    if (!this.sizeValid(file)) {
      this.snackbarService.snackbarEvent.next(SnackbarModels.FileSizeInvalid);
      return;
    }

    this.startFileReading(this._reader, file)
  }

  private extentionValid(fileName: string): boolean {
    const ext = fileName.split('.').pop();
    const format = this.uploaderConfig.formatAllowed.split('.').pop();

    return ext === format;
  }

  private sizeValid(file: {size: number}): boolean {
    return file.size < this.uploaderConfig.maxSize;
  }

  private startFileReading(reader: FileReader, file) {
    this.fileData = {
      name: file.name,
      fileSize: file.size
    }

    reader.readAsText(file);
  }

  onFileSelected(event: any) {
    console.log(event)
  }
}
