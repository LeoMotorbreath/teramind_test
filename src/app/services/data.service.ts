import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FileData} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fileData = new BehaviorSubject<string>(null);
  filesLoaded = new BehaviorSubject<FileData[]>([]);
  constructor() { }
}
