import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  constructor(private route:Router , private local:LocalService) { }

  ngOnInit() {
  }

  goToClient(){
    this.route.navigateByUrl('home/jda');
    this.local.setProgress('Jda');
  }

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [4384000, 4384000, 4384000, 4384000, 4384000], label: 'EBS' },
    { data: [3272000, 3272000, 1536000, 2661000, 2661000], label: 'Cloud'}
  ];

  chartLabels = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

  onChartClick(event) {
    console.log(event);
  }


  // goToOutput(){
  //   this.route.navigateByUrl('home/output');
  //   this.local.setProgress('output');
  // }



  jdaList = [{
    // tslint:disable-next-line:max-line-length
    description: 'Financials'
  },
    {
      description: 'Advanced Collections'
    },
    {
      description: 'Internet Expenses'
    },
    {
      description: 'iReceivables'
    },
    {
      description: 'Treasury'
    },
    {
      description: 'Financials Accounting Hub'
    },
    {
      description: 'Project Costing'
    },
    {
      description: 'Project Resource Management'
    },
    {
      description: 'Project Collaboration'
    },
    {
      description: 'Project Management'
    },
    {
      description: 'Project Portfolio Analysis'
    },
    {
      description: 'Project Contracts'
    },
    {
      description: 'Project Procurement'
    },
    {
      description: 'Discrete Manufacturing'
    },
    {
      description: 'Process Manufacturing'
    },
    {
      description: 'Manufacturing'
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
      description: 'Oracle Applications System Bundle'
    },
    {
      description: 'Oracle Configurator Developer'
    },
    {
      description: 'Oracle Contracts Core'
    },
    {
      description: 'Oracle Contracts for Sales'
    },
    {
      description: 'Oracle Governance, Risk, & Compliance Manager'
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

}
