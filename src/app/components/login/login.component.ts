import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';
import { TCO } from 'src/app/Model/TCO';
import { TCOService } from 'src/app/shared/services/tco.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  tco: TCO;
  constructor(private route: Router, private local: LocalService, ) {}

  ngOnInit() {
    // this.tco = this.tcoservice.getTCO();
  }

  goToInformation() {
    // this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Information');
    this.route.navigateByUrl('home/client');
  }

  goTojda() {
    // this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Jda');
    this.route.navigateByUrl('home/jda');
  }
}
