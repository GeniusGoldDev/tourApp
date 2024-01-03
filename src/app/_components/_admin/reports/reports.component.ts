import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  getReport() {
    const reportId = (document.getElementById('ddlReports')as HTMLInputElement).value;
    const from = (document.getElementById('dateTimeFrom')as HTMLInputElement).value;
    const to = (document.getElementById('dateTimeTo')as HTMLInputElement).value;

    window.open(environment.baseAPIUrl + '/reports/' + reportId + '?dateTimeFrom=' + from + '&dateTimeTo=' + to, 'report-' + reportId, );
  }
}
