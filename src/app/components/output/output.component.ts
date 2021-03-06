import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';
import { TCO } from 'src/app/Model/TCO';
import { TCOService } from 'src/app/shared/services/tco.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {

  jdaList = [
    {
      // tslint:disable-next-line:max-line-length
      description: 'Receiving of orders',
    },
    {
      description: 'Multiple types of receipt orders',
    },
    {
      description: 'Specialty receipt support',
    },
    {
      description: 'Allow/restrict partial case receipts',
    },
    {
      description: 'Reverse and voiding of receipts',
    },
    {
      description: 'Appointment scheduling',
    },
    {
      description: 'Dock scheduling',
    },
    {
      description: 'Cross-docking',
    },
    {
      description: 'Yard management',
    },
    {
      description: 'Directed put-away',
    },
    {
      description: 'Returns management',
    },
    {
      description: 'Vendor data tracking',
    },
    {
      description: 'Label verification',
    },
    {
      description: 'Label generation',
    },
    {
      description: 'Palletize LPNs on receipt',
    },
    {
      description: 'MMobile scanner and app/smartphone support',
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
      description: 'Blue Yonder Applications System Bundle',
    },
    {
      description: 'Blue Yonder Configurator Developer',
    },
    {
      description: 'Blue Yonder Contracts Core',
    },
    {
      description: 'Blue Yonder Contracts for Sales',
    },
    {
      description: 'Blue Yonder Governance, Risk, & Compliance Manager',
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

  tco: TCO;
  constructor(private route: Router, private local: LocalService, private tcoservice: TCOService) {}

  chartOptions = {
    responsive: true,
    legend: { labels : {
      fontColor : '#ffffff',
    }
  },
   scales: {
      xAxes: [{
         ticks: {
            fontColor: 'white',
         }
      }],
      yAxes: [{
        ticks: {
           fontColor: 'white',
        }
     }]
    }
  };

  chartData = [{
      data: [4384000, 4384000, 4384000, 4384000, 4384000],
      label: 'WMS',
      fontColor: 'white'
    },
    {
      data: [3272000, 3272000, 2836000, 2661000, 2461000],
      label: 'Cloud',
      fontColor: 'white'
    }
  ];

  public chartColors: any[] = [
    {
      backgroundColor: ['#007BFF', '#60c5ba', '#007BFF', '#60c5ba', '#60c5ba']
    }];

  chartLabels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

  ngOnInit() {
    this.tco = this.tcoservice.getTCO();

    this.calculateGraph();
  }

  goToClient() {
    this.tcoservice.setTCO(this.tco);
    this.route.navigateByUrl('home/jda');
    this.local.setProgress('Jda');
  }

  onChartClick(event) {
    console.log(event);
  }

  calculateGraph() {
    if (this.tco.tShirtSizing.CurrentType === 'Small') {
      this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 1,10,000';
      this.tco.erpTCOReport.currentHardwareCostPerYear = '$ 1,20,000';
      this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 1,00,000';
      this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 4,75,000';
 
      this.chartData = [{
        data: [475000, 475000, 475000, 475000, 475000],
        label: 'WMS',
        fontColor: 'white'
      },
      {
        data: [438400, 430400, 362000, 305000, 305000],
        label: 'Cloud',
        fontColor: 'white'
      }
    ];
  } else if (this.tco.tShirtSizing.CurrentType === 'Medium') {
    this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 1,40,000';

    this.tco.erpTCOReport.currentHardwareCostPerYear = '$ 2,50,000';

    this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 1,20,000';


    this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 6,50,000';

    this.chartData = [{
      data: [650000, 650000, 650000, 650000, 650000],
      label: 'WMS',
      fontColor: 'white'
    },
    {
      data: [550000, 540000, 500500, 430000, 430000],
      label: 'Cloud',
      fontColor: 'white'
    }
  ];
} else if (this.tco.tShirtSizing.CurrentType === 'Large') {
  this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 28,00,000';

  this.tco.erpTCOReport.currentHardwareCostPerYear =  '$ 40,00,000';

  this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 28,00,000';


  this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 1,10,00,000';

  this.chartData = [{
    data: [1100000, 1100000, 1100000, 1100000, 1100000],
    label: 'WMS',
    fontColor: 'white'
  },
  {
    data: [950000, 940000, 880000, 800000, 800000],
    label: 'Cloud',
    fontColor: 'white'
  }
];
} else if (this.tco.tShirtSizing.CurrentType === 'Extra Large') {
  this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 30,00,000';

  this.tco.erpTCOReport.currentHardwareCostPerYear = '$ 42,00,000';

  this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 54,00,000';


  this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 1,40,00,000';
  this.chartData = [{
    data: [1400000, 1400000, 1400000, 1400000, 1400000],
    label: 'WMS',
    fontColor: 'white'
  },
  {
    data: [1150000, 1050000, 1000000, 925000, 925000],
    label: 'Cloud',
    fontColor: 'white'
  }
];
}
 }
}
