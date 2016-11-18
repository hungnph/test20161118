import { Component } from '@angular/core';

import { Settings } from '../../providers/settings';
@Component({
  selector: 'toggle',
  templateUrl: 'toggle.html'
})
export class ToggleComponent {
  
  constructor(private listItems:Settings) {}

}
