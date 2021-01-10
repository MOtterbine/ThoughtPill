import { Injectable } from '@angular/core';
import { Menu } from './os-menu';
import { MENUS } from './os-menus';

@Injectable({
  providedIn: 'root',
})

export class MenuService {

  constructor() { }
  getMenus(): Menu[] {
    return MENUS;
  }

}
