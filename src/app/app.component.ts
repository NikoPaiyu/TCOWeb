import { Component } from '@angular/core';
import { TCO } from './Model/TCO';
import { TCOService } from './shared/services/tco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TcoWeb';
}
