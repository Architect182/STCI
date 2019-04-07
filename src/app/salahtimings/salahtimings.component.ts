import { Component, OnInit } from '@angular/core';
import { SalahtimingsService } from './salahtimings.service';
import { Timings } from './timings';

@Component({
  selector: 'app-salahtimings',
  templateUrl: './salahtimings.component.html',
  styleUrls: ['./salahtimings.component.css']
})
export class SalahtimingsComponent implements OnInit {

SalahTimings: any;

timing:Timings;

Date:any;

  constructor(private _salahtimingservice:SalahtimingsService) { }

  ngOnInit() {
  this._salahtimingservice.getSalahTimings().subscribe(
(result)=> {
this.timing = <Timings>result;

this.GetTimings(this.timing.data)},
(error:any)=>console.log(error)

  );

  // this._employeeService.getEmployee(this._id).subscribe(
  //   (employee) => this.employee = employee,
  //   (err: any) => console.log(err)
  // );
    
  }

  GetTimings(result)
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    // today = dd + '-' + mm + '/' + yyyy;
    // document.write(today);
this.Date = result.filter(x=>x.date.gregorian.date==dd + '-' + mm + '-' + yyyy)[0].date.readable;
    this.SalahTimings = result.filter(x=>x.date.gregorian.date==dd + '-' + mm + '-' + yyyy)[0].timings;

    console.log(this.SalahTimings)
    console.log(result)

  }

}
