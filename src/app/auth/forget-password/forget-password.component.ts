import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  public forgetPassword: FormGroup
  isFormValid: boolean = false
  closeResult = '';
  @ViewChild('modalOpen') modalOpen!: ElementRef;
  constructor(private fb: FormBuilder, private toaster: ToastrService, private http: HttpService,private modalService: NgbModal,
    private router: Router) {
    this.forgetPassword = this.fb.group({
      email: ['', [Validators.required , Validators.email]],
    })
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' , centered: true })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  sendOtp() {
    const email = this.forgetPassword.controls['email'].value;
    this.http.post('/send-otp', { email: email, role:localStorage.getItem('role'), page: 'forget' }, false).subscribe((res: any) => {
      this.modalOpen.nativeElement.click();
    });
  }

  resendOtp() {
    const email = this.forgetPassword.controls['email'].value;
    this.http.post('/send-otp', { email: email, role: localStorage.getItem('role'), page: 'forget' }, false).subscribe((res: any) => {
    });
  }

  verifyOtp() {
    const email = this.forgetPassword.controls['email'].value;
    const otp = this.forgetPassword.controls['otp'].value;
    // this.http.post('/verify-otp', { email: email, otp: otp }, false).subscribe(
    //   (res: any) => {
    //     if (res.message === 'Otp verified') {
    //       this.modalService.dismissAll();
    //       this.router.navigate(['/auth/reset']);
    //       localStorage.setItem('email', email);
    //       localStorage.setItem('otp', otp);
    //     } else {
    //     }
    //   },
    // );
    this.http.post('/verify-otp', { email: email, otp: otp }, false).subscribe(
      (res: any) => {
        console.log('API Response:', res);
    
        if (res.message === 'Otp verified.') {
          console.log('Otp verified. Navigating to /auth/reset...');
          this.modalService.dismissAll();
          this.router.navigate(['/auth/reset']);
          localStorage.setItem('email', email);
          localStorage.setItem('otp', otp);
        } else {
          console.log('Otp not verified.');
        }
      },
      (error) => {
        console.error('Error in API request:', error);
      }
    );
    
  }
  onOtpChange(event: any) {
    console.log(event);
    if (event.length === 4) {
      this.forgetPassword.addControl('otp', new FormControl(event, [Validators.required]));
    } else {
      this.forgetPassword.removeControl('otp');
    }
  }
  reset() {

  }
  
}
