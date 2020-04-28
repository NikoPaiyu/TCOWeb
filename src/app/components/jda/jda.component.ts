import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';
import { TCOService } from 'src/app/shared/services/tco.service';
import { TCO } from 'src/app/Model/TCO';

@Component({
  selector: 'app-jda',
  templateUrl: './jda.component.html',
  styleUrls: ['./jda.component.scss'],
})
export class JdaComponent implements OnInit {
  jdaList = [
    {
      // tslint:disable-next-line:max-line-length
      description: 'Financials',
    },
    {
      description: 'Advanced Collections',
    },
    {
      description: 'Internet Expenses',
    },
    {
      description: 'iReceivables',
    },
    {
      description: 'Treasury',
    },
    {
      description: 'Financials Accounting Hub',
    },
    {
      description: 'Project Costing',
    },
    {
      description: 'Project Resource Management',
    },
    {
      description: 'Project Collaboration',
    },
    {
      description: 'Project Management',
    },
    {
      description: 'Project Portfolio Analysis',
    },
    {
      description: 'Project Contracts',
    },
    {
      description: 'Project Procurement',
    },
    {
      description: 'Discrete Manufacturing',
    },
    {
      description: 'Process Manufacturing',
    },
    {
      description: 'Manufacturing',
    },
    {
      description: 'Operations Center',
    },

    {
      description: 'Purchasing',
    },
    {
      description: 'iProcurement',
    },
    {
      description: 'Supplier Lifecycle Management',
    },
    {
      description: 'Outreach',
    },
    {
      description: 'Activity Management Gateway',
    },
    {
      description: 'Application Object Library',
    },
    {
      description: 'Cost Management',
    },
    {
      description: 'EDI Gateway',
    },
    {
      description: 'eMail Center',
    },
    {
      description: 'Exchange Market Place Financial Services Accounting Hub',
    },
    {
      description: 'Inventory Management',
    },
    {
      description: 'iSupplier Portal',
    },
    {
      description: 'Mobile Supply Chain Application',
    },
    {
      description: 'Order Entry',
    },
    {
      description: 'Procurement Contracts',
    },
    {
      description: 'Oracle Applications System Bundle',
    },
    {
      description: 'Oracle Configurator Developer',
    },
    {
      description: 'Oracle Contracts Core',
    },
    {
      description: 'Oracle Contracts for Sales',
    },
    {
      description: 'Oracle Governance, Risk, & Compliance Manager',
    },
    {
      description: 'Product Lifecycle Management',
    },
    {
      description: 'Project Billing',
    },
    {
      description: 'Project Bundle',
    },
    {
      description: 'Quality',
    },
    {
      description: 'Self-Service Work Requests',
    },
    {
      description: 'Service Contracts',
    },
    {
      description: 'Service Procurement',
    },
    {
      description: 'Sourcing',
    },
    {
      description: 'Warehouse Management',
    },
    {
      description: 'Workflow Cartridge',
    },
  ];

  constructor(private route: Router, private local: LocalService, private tcoservice: TCOService) {}
  tco: TCO;

  ngOnInit() {
    this.tco = this.tcoservice.getTCO();
  }

  goToLogin() {
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Client');
    this.route.navigateByUrl('home/login');
  }

  goToOutput() {
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('output');
    this.route.navigateByUrl('home/output');
  }
}
