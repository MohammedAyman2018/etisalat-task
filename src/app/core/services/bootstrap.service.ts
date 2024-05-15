import { Injectable } from '@angular/core';
import { Collapse, Dropdown } from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {
  public bootstrap = {
    Dropdown,
    Collapse,
  }
  constructor() { }
}
