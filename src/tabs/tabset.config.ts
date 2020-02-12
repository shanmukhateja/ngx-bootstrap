import { Injectable } from '@angular/core';

@Injectable()
export class TabsetConfig {
  /** provides default navigation context class: 'tabs' or 'pills' */
  type = 'tabs';
  /** aria label for tab list */
  ariaLabel = 'Tabs';
}