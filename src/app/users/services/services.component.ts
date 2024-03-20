import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public formDate:FormGroup;
  // myEvents = [
  //   {
  //     id: "required-id-1",
  //     name: "Project's Starting Date",
  //     date: ["March/14/2024" , "March/16/2024"],
  //     description: "South Dakota Project",
  //     type: "event",
  //   },
  // ];
constructor( private http: HttpService, private fb:FormBuilder){
  this.formDate=this.fb.group({
    starting_date:['', Validators.required],
    ending_date:['' , Validators.required]
  })  
  
}
submitDates(){
  this.http.post('/booking' , this.formDate.value, true).subscribe((res:any)=>{
    console.log(this.formDate,'data');
    
  }),((err: any) => {
    console.log(err);
  })
}
ngOnInit() {
  // console.log($("#calendar"));
  // $("#calendar").evoCalendar({
  //   calendarEvents: this.myEvents,
  //   theme:'Midnight Blue'
  // });   
}
}
