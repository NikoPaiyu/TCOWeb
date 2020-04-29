import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  LocalService
} from 'src/app/shared/services/local.service';
import {
  TCO
} from 'src/app/Model/TCO';
import {
  TCOService
} from 'src/app/shared/services/tco.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {


  jdaList = [{
    description: 'Financials'
  }];

  chartOptions = {
    responsive: true
  };

  chartData = [{
      data: [4384000, 4384000, 4384000, 4384000, 4384000],
      label: 'EBS'
    },
    {
      data: [3272000, 3272000, 1536000, 2661000, 2661000],
      label: 'Cloud'
    }
  ];

  chartLabels = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

  ngOnInit() {}

  constructor(private route: Router, private local: LocalService) {}

  goToOutput(){
    this.route.navigateByUrl('home/output');
    this.local.setProgress('output');
  }


    goToClient() {
      // this.tcoservice.setTCO(this.tco);
      this.route.navigateByUrl('home/jda');
      this.local.setProgress('Jda');
    }


    onChartClick(event) {
      console.log(event);
    }

  }
