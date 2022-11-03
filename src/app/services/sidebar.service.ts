import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FileData} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  activeFile = new BehaviorSubject<FileData>(null);
  constructor() { }
}
