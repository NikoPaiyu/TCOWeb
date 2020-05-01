import {
  Component,
  OnInit
} from '@angular/core';
import {
  TCO
} from 'src/app/Model/TCO';
import {
  LocalService
} from 'src/app/shared/services/local.service';
import {
  TCOService
} from 'src/app/shared/services/tco.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-shirt-size',
  templateUrl: './shirt-size.component.html',
  styleUrls: ['./shirt-size.component.scss'],
})
export class ShirtSizeComponent implements OnInit {
  constructor(
    private tcoservice: TCOService
  ) {}
  tco: TCO;
  total = 0;
  currentState;
  ImplementationDuration;



  ngOnInit() {
    this.tco = this.tcoservice.getTCO();
  }

  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#ffffff',
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
          max : 1200000,
          min: 100000
        }
      }]
    }
  };


  // tslint:disable-next-line: member-ordering
  chartData = [{
      data: [0],
      label: 'Factory Implementation',
      fontColor: 'white'
    },
    {
      data: [0],
      label: 'Standard Implementation',
      fontColor: 'white'
    }
  ];

  public chartColors: any[] = [{
    backgroundColor: ['#007BFF', '#60c5ba', '#007BFF', '#60c5ba', '#60c5ba']
  }];

  chartLabels = [''];

  calculateShirtSizing() {
    this.total = 0;

    if ((this.tco.tShirtSizing.Product === 'Demand Manager')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.Product === 'Demand Planner')) {
      this.total = this.total + 25;
    } else if ((this.tco.tShirtSizing.Product === 'Supply Chain Planner')) {
      this.total = this.total + 30;
    }

    if ((this.tco.tShirtSizing.Version === 'n - 1 (Small)')) {
      this.total = this.total + 15;
    } else if ((this.tco.tShirtSizing.Version === 'n - 2 to 4 (Medium)')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.Version === 'n - 4 to 6 (Large)')) {
      this.total = this.total + 25;
    } else if (
      (this.tco.tShirtSizing.Version === 'n-6 and lesser(Extra Large)')
    ) {
      this.total = this.total + 30;
    }

    if ((this.tco.tShirtSizing.Purpose === 'Implementation')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.Purpose === 'Transformation')) {
      this.total = this.total + 15;
    }

    if ((this.tco.tShirtSizing.LinesofBusiness === 'B2B')) {
      this.total = this.total + 15;
    } else if ((this.tco.tShirtSizing.LinesofBusiness === 'Retail')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.LinesofBusiness === 'Direct')) {
      this.total = this.total + 25;
    }

    //  if (this.tco.tShirtSizing.SCMNetworkReach = 'Local')
    //     {
    //       this.total = this.total + 10;
    //     }
    //     else
    if ((this.tco.tShirtSizing.SCMNetworkReach === 'Country')) {
      this.total = this.total + 15;
    } else if ((this.tco.tShirtSizing.SCMNetworkReach === 'Regional')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.SCMNetworkReach === 'Global')) {
      this.total = this.total + 25;
    }

    if (
      this.tco.tShirtSizing.ProductHierarchyComplexity1 > 0 &&
      this.tco.tShirtSizing.ProductHierarchyComplexity1 <= 10
    ) {
      this.total = this.total + 8;
    } else if (
      this.tco.tShirtSizing.ProductHierarchyComplexity1 > 11 &&
      this.tco.tShirtSizing.ProductHierarchyComplexity1 <= 20
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizing.ProductHierarchyComplexity1 > 21 &&
      this.tco.tShirtSizing.ProductHierarchyComplexity1 <= 30
    ) {
      this.total = this.total + 16;
    } else {
      this.total = this.total + 20;
    }

    if (
      this.tco.tShirtSizing.ProductHierarchyComplexity2 > 0 &&
      this.tco.tShirtSizing.ProductHierarchyComplexity2 <= 10
    ) {
      this.total = this.total + 8;
    } else if (
      this.tco.tShirtSizing.ProductHierarchyComplexity2 > 11 &&
      this.tco.tShirtSizing.ProductHierarchyComplexity2 <= 20
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizing.ProductHierarchyComplexity2 > 21 &&
      this.tco.tShirtSizing.ProductHierarchyComplexity2 <= 30
    ) {
      this.total = this.total + 16;
    } else {
      this.total = this.total + 20;
    }
    if (
      this.tco.tShirtSizing.NetworkComplexity1 > 0 &&
      this.tco.tShirtSizing.NetworkComplexity1 <= 4
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity1 > 5 &&
      this.tco.tShirtSizing.NetworkComplexity1 <= 8
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity1 > 9 &&
      this.tco.tShirtSizing.NetworkComplexity1 <= 12
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    if (
      this.tco.tShirtSizing.NetworkComplexity2 > 0 &&
      this.tco.tShirtSizing.NetworkComplexity2 <= 10
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity2 > 11 &&
      this.tco.tShirtSizing.NetworkComplexity2 <= 15
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity2 > 16 &&
      this.tco.tShirtSizing.NetworkComplexity2 <= 25
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    if (
      this.tco.tShirtSizing.NetworkComplexity3 > 0 &&
      this.tco.tShirtSizing.NetworkComplexity3 <= 40
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity3 > 41 &&
      this.tco.tShirtSizing.NetworkComplexity3 <= 60
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity3 > 61 &&
      this.tco.tShirtSizing.NetworkComplexity3 <= 100
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    if (
      this.tco.tShirtSizing.NetworkComplexity4 > 0 &&
      this.tco.tShirtSizing.NetworkComplexity4 <= 120
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity4 > 121 &&
      this.tco.tShirtSizing.NetworkComplexity4 <= 240
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity4 > 241 &&
      this.tco.tShirtSizing.NetworkComplexity4 <= 400
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    if (
      this.tco.tShirtSizing.NetworkComplexity5 > 0 &&
      this.tco.tShirtSizing.NetworkComplexity5 <= 1200
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity5 > 1201 &&
      this.tco.tShirtSizing.NetworkComplexity5 <= 2400
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizing.NetworkComplexity5 > 2401 &&
      this.tco.tShirtSizing.NetworkComplexity5 <= 4000
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    //  if (this.tco.tShirtSizing.GlobalProcurementComplexity = 'Simple')
    //     {
    //       this.total = this.total + 6;
    //     }
    //     else  if (this.tco.tShirtSizing.GlobalProcurementComplexity = 'Medium')
    //     {
    //       this.total = this.total + 9;
    //     }
    //     else  if (this.tco.tShirtSizing.GlobalProcurementComplexity = 'Complex')
    //     {
    //       this.total = this.total + 12;
    //     }
    //    else
    // {
    //   this.total = this.total + 15;
    // }

    if (
      this.tco.tShirtSizing.PartnersSuppliers1 > 0 &&
      this.tco.tShirtSizing.PartnersSuppliers1 <= 3000
    ) {
      this.total = this.total + 6;
    } else if (
      this.tco.tShirtSizing.PartnersSuppliers1 > 3001 &&
      this.tco.tShirtSizing.PartnersSuppliers1 <= 30000
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizing.PartnersSuppliers1 > 30001 &&
      this.tco.tShirtSizing.PartnersSuppliers1 <= 60000
    ) {
      this.total = this.total + 12;
    } else {
      this.total = this.total + 15;
    }

    if ((this.tco.tShirtSizing.Customization1 === 0)) {} else if ((this.tco.tShirtSizing.Customization1 === 1)) {
      this.total = this.total + 5;
    } else if ((this.tco.tShirtSizing.Customization1 === 2)) {
      this.total = this.total + 10;
    } else {
      this.total = this.total + 15;
    }

    if (
      this.tco.tShirtSizing.Customization2 > 0 &&
      this.tco.tShirtSizing.Customization2 <= 5
    ) {
      this.total = this.total + 10;
    } else if (
      this.tco.tShirtSizing.Customization2 > 6 &&
      this.tco.tShirtSizing.Customization2 <= 10
    ) {
      this.total = this.total + 15;
    } else if (
      this.tco.tShirtSizing.Customization2 > 11 &&
      this.tco.tShirtSizing.Customization2 <= 20
    ) {
      this.total = this.total + 25;
    } else {
      this.total = this.total + 30;
    }

    if (
      this.tco.tShirtSizing.Interfaces1 > 0 &&
      this.tco.tShirtSizing.Interfaces1 <= 2
    ) {
      this.total = this.total + 6;
    } else if (
      this.tco.tShirtSizing.Interfaces1 > 3 &&
      this.tco.tShirtSizing.Interfaces1 <= 5
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizing.Interfaces1 > 6 &&
      this.tco.tShirtSizing.Interfaces1 <= 8
    ) {
      this.total = this.total + 12;
    } else {
      this.total = this.total + 15;
    }

    if (
      this.tco.tShirtSizing.Interfaces2 > 0 &&
      this.tco.tShirtSizing.Interfaces2 <= 0
    ) {} else if (
      this.tco.tShirtSizing.Interfaces2 > 1 &&
      this.tco.tShirtSizing.Interfaces2 <= 3
    ) {
      this.total = this.total + 10;
    } else if (
      this.tco.tShirtSizing.Interfaces2 > 4 &&
      this.tco.tShirtSizing.Interfaces2 <= 6
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 20;
    }

    this.tco.tShirtSizing.Total = this.total;

    if (this.total <= 200) {
      this.tco.tShirtSizing.CurrentType = 'Small';
      this.tco.tShirtSizing.DurationOfImplementation = 'upto 3 months';
      this.tco['standardImplementation'] = 4750000;
      this.tco['factoryImplementation'] = 260000;

      this.chartData = [{
        data: [260000],
        label: 'Factory Implementation',
        fontColor: 'white'
      },
      {
        data: [4750000],
        label: 'Standard Implementation',
        fontColor: 'white'
      }
    ];

    } else if (this.total > 201 && this.total <= 250) {
      this.tco.tShirtSizing.CurrentType = 'Medium';
      this.tco.tShirtSizing.DurationOfImplementation = '4 - 6 months';
      this.tco['standardImplementation'] = 650000;
      this.tco['factoryImplementation'] = 400000;

      this.chartData = [{
        data: [400000],
        label: 'Factory Implementation',
        fontColor: 'white'
      },
      {
        data: [650000],
        label: 'Standard Implementation',
        fontColor: 'white'
      }
    ];

    } else if (this.total >= 251 && this.total <= 300) {
      this.tco.tShirtSizing.CurrentType = 'Large';
      this.tco.tShirtSizing.DurationOfImplementation = '7 - 9 months';
      this.tco['standardImplementation'] = 1100000;
      this.tco['factoryImplementation'] = 700000;

      this.chartData = [{
        data: [700000],
        label: 'Factory Implementation',
        fontColor: 'white'
      },
      {
        data: [1100000],
        label: 'Standard Implementation',
        fontColor: 'white'
      }
    ];
    } else if (this.total >= 301) {
      this.tco.tShirtSizing.CurrentType = 'Extra Large';
      this.tco.tShirtSizing.DurationOfImplementation = '9 - 12 months';
      this.tco['standardImplementation'] = 1400000;
      this.tco['factoryImplementation'] = 925000;

      this.chartData = [{
        data: [925000],
        label: 'Factory Implementation',
        fontColor: 'white'
      },
      {
        data: [1400000],
        label: 'Standard Implementation',
        fontColor: 'white'
      }
    ];

    }
    console.log(this.tco.tShirtSizing);
    console.log(this.tco.tShirtSizing.DurationOfImplementation);
  }
}
