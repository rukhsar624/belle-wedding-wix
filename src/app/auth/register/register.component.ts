import { Component, ElementRef, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    });
    this.otpForm = this.fb.group({
      email: ['', Validators.required, [Validators.email]]
    })
  }
  createUserAccount() {
    if (this.isFormValid) {
      const password = this.registerForm.controls['password'];
      const confirm_password = this.registerForm.controls['password_confirmation'];
      const email = this.registerForm.controls['email'].value;
      if (password !== confirm_password) {
        this.toaster.error('password & confirm-password does not match')
      }
      localStorage.setItem('email', email)
      console.log(this.registerForm.value);
      this.http.post('/verify-otp', { email: email, page: 'auth' }, false).subscribe((res: any) => {
        console.log(res, 'res');
        this.modalOpen.nativeElement.click();
      });
    } else {

    }
  }
  singUp() {
    this.http.post('/auth/register', this.registerForm.value, false).subscribe((res: any) => {
      console.log(res, 'hello users');
      localStorage.setItem('email', this.registerForm.controls['email'].value)
      this.router.navigateByUrl('/auth/login');

    }), ((error: any) => {
      console.log(error, 'Error');

    })
  }
  onOtpChange(event: any) {
    console.log(event);
    if (event.length === 4) {
      this.registerForm.addControl(
        'otp',
        new FormControl(event, [Validators.required])
      );
      this.registerForm.addControl(
        'otp',
        new FormControl(event, [Validators.required])
      );
    } else {
      this.registerForm.removeControl('otp');
      this.registerForm.removeControl('otp');
    }

  }
  showPassword() {
    this.show = !this.show;
  }
  notshowPassword() {
    this.notshow = !this.notshow;
  }
  // modal open
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }


  onSubmit(form: FormGroup) {
    console.log(form);
  }
  resendOtp() {
    if (this.isFormValid) {
      const email = localStorage.getItem('email');
      if (!email) {
        console.log('Email not found');
        return;
      }

      console.log(this.registerForm.value);
      this.http.post('otp', { email: email, page: 'auth' }, false).subscribe((res: any) => {
        console.log(res, 'hello');
      });
    } else {
    }
  }
}
