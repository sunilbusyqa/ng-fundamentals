import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { ToastrService } from '../common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup

  constructor(private authService:AuthService, private router:Router, private toastr:ToastrService) {}

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.toastr.success("Profile saved as " + formValues.firstName + " " + formValues.lastName)
    }
  }

  cancel() {
    this.router.navigate(['events'])
  }
}