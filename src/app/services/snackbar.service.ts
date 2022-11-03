import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {SnackbarModels} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackbarEvent = new BehaviorSubject<SnackbarModels>(null);

  constructor() { }
}
