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
  constructor(private route: Router, private local: LocalService, private tcoservice: TCOService) {}

  questionList = [{
    title: 'Short Term Revenue',
    // tslint:disable-next-line:max-line-length
    description: 'Receiving of orders'
  },
    {
      description: 'Multiple types of receipt orders'
    },
    {
      description: 'Specialty receipt support'
    },
    {
      description: 'Allow/restrict partial case receipts'
    },
    {
      description: 'Reverse and voiding of receipts'
    },
    {
      description: 'Appointment scheduling'
    },
    {
      description: 'Dock scheduling'
    },
    {
      description: 'Cross-docking'
    },
    {
      description: 'Yard management'
    },
    {
      description: 'Directed put-away'
    },
    {
      description: 'Returns management'
    },
    {
      description: 'Vendor data tracking'
    },
    {
      description: 'Label verification'
    },
    {
      description: 'Label generation'
    },
    {
      description: 'Palletize LPNs on receipt'
    },
    {
      description: 'Mobile scanner and app/smartphone support'
    },
    {
      description: 'Operations Center'
    },
    
    {
      description: 'Purchasing'
    },
    {
      description: 'iProcurement'
    },
    {
      description: 'Supplier Lifecycle Management'
    },
    {
      description: 'Outreach'
    },
    {
      description: 'Activity Management Gateway'
    },
    {
      description: 'Application Object Library'
    },
    {
      description: 'Cost Management'
    },  
    {
      description: 'EDI Gateway'
    },
    {
      description: 'eMail Center'
    },
    {
      description: 'Exchange Market Place Financial Services Accounting Hub'
    },
    {
      description: 'Inventory Management'
    },  
    {
      description: 'iSupplier Portal'
    },
    {
      description: 'Mobile Supply Chain Application'
    },		
    {
      description: 'Order Entry'
    },
    {
      description: 'Procurement Contracts'
    },
    {
      description: 'Blue Yonder Applications System Bundle'
    },
    {
      description: 'Blue Yonder Configurator Developer'
    },
    {
      description: 'Blue Yonder Contracts Core'
    },
    {
      description: 'Blue Yonder Contracts for Sales'
    },
    {
      description: 'Blue Yonder Governance, Risk, & Compliance Manager'
    },
    {
      description: 'Product Lifecycle Management'
    },
    {
      description: 'Project Billing'
    },
    {
      description: 'Project Bundle'
    },
    {
      description: 'Quality'
    },
    {
      description: 'Self-Service Work Requests'
    },
    {
      description: 'Service Contracts'
    },
    {
      description: 'Service Procurement'
    },
    {
      description: 'Sourcing'
    },
    {
      description: 'Warehouse Management'
    },
    {
      description: 'Workflow Cartridge'
    }		
  ]; 
  ngOnInit() {
    this.tco = this.tcoservice.getTCO();
  }

  goToInformation() {
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Information');
    this.route.navigateByUrl('home/client');
  }

  goTojda() {
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Jda');
    this.route.navigateByUrl('home/jda');
  }
}
