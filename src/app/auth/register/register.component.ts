import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public show: boolean = false;
  public notshow: boolean = false;
  public registerForm: FormGroup
  public otpForm: FormGroup;
  public role!: string;
  isFormValid: boolean = false;
  private modalService = inject(NgbModal);
  closeResult = '';
  @ViewChild('modalOpen') modalOpen!: ElementRef;
  constructor(private fb: FormBuilder, private http: HttpService, private router: Router, private toaster: ToastrService) {
    this.registerForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', Validators.required],
      phone_no: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      role: ['users', [Validators.required]],
    });
    this.registerForm.valueChanges.subscribe(() => {
      this.isFormValid = this.registerForm.valid;
    });
    this.otpForm = this.fb.group({
      email: ['', Validators.required, [Validators.email]]
    });
  }
  ngOnInit(){
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
  
  userSingUp(){
    if(this.isFormValid){
      const password = this.registerForm.controls['password'].value;
      const password_confirmation = this.registerForm.controls['password_confirmation'].value;
      if(password !== password_confirmation){
        this.toaster.error('password not match')
        console.log('hello');
        
      }

    }
    this.http.post('/auth/register' , this.registerForm.value , true).subscribe((res:any)=>{
      console.log(res, "res");
      this.router.navigateByUrl('auth/login');
    },
    (err: any) => {
      console.log(err.status, "sdfs");
      if (err.status == 403) {
        console.log('hello');
        
    
      }
    })

  }
  showPassword() {
    this.show = !this.show;
  }
  notshowPassword() {
    this.notshow = !this.notshow;
  }
 
}
