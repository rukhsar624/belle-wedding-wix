import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
// import {provideNativeDateAdapter} from '@angular/material/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';

declare var $: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  myEvents = [
    {
      id: "required-id-1",
      name: "Project's Starting Date",
      date: ["March/14/2024" , "March/16/2024"],
      description: "South Dakota Project",
      type: "event",
    },
  ];
constructor( private http: HttpService){
  
}


ngOnInit() {
  console.log($("#calendar"));
  $("#calendar").evoCalendar({
    calendarEvents: this.myEvents,
    theme:'Midnight Blue'
  });   
}
}
