import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { FileHandle } from '../model/file-handle.model';
import { ManageProfileInfo } from '../model/ManageProfileInfo';
import { SecurityQuestion } from '../model/securityQuestion';
import { SecurityQuestionService } from '../service/security-question.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{

  updateProfileForm: any;
  userId: number = 0;
  submitted: boolean = false;
  customer: Customer = new Customer();
  questions: SecurityQuestion[] = [];
  profileInfo: ManageProfileInfo = {
    userId: 0,
    pan: 0,
    panImage: [],
    aadhar: 0,
    aadharImage: [],
    phone: ''
  };

  constructor (
    private formBuilder: FormBuilder,
    private userService: UserService,
    private questionService: SecurityQuestionService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {

    this.updateProfileForm = this.formBuilder.group({
      phone: ['', Validators.required],
      pan: ['', Validators.required],
      aadhar: ['', Validators.required],
      uploadPan: ['', Validators.required],
      uploadAadhar: ['', Validators.required]
    })
    console.log("User id in profile: "+this.userId);
    this.userService.findUserById(this.userId).subscribe(result => {
      console.log(result);
      this.customer = result;
    }, error => {
      console.log(error);
    });
    this.questionService.getAllSecurityQuestions().subscribe(result => {
      this.questions = result;
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.profileInfo.userId = this.userId;
    console.log(this.profileInfo);
    const profileFormData = this.prepareFormData(this.profileInfo);
    this.userService.uploadUserDetails(profileFormData, this.userId).subscribe(result => {
      alert("Profile Details Updated Successfully");
    }, error => {
      alert("Issues processing request. Please try again later");
      this.reset();
    });

  }

  prepareFormData(profileInfo: ManageProfileInfo): FormData {
    const formData = new FormData();
    formData.append(
      'profileData',
      new Blob([JSON.stringify(profileInfo)], {type: 'application/json'})
    );

    for(var i = 0; i < profileInfo.panImage.length; i++) {
      formData.append(
        'panImage',
        profileInfo.panImage[i].file,
        profileInfo.panImage[i].file.name
      );
    }
    for(var i = 0; i < profileInfo.aadharImage.length; i++) {
      formData.append(
        'aadharImage',
        profileInfo.aadharImage[i].file,
        profileInfo.aadharImage[i].file.name
      );
    }

    return formData;

  }

  navToSecurityQuestions(): void {
    this.router.navigate(['/../securityQuestions'], {state: {customer: this.customer}});
  }

  onPanFileSelected(event: any) {
    if(event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.profileInfo.panImage.push(fileHandle);
    }
  }

  onAadharFileSelected(event: any) {
    if(event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.profileInfo.aadharImage.push(fileHandle);
    }
  }

  reset(): void {
    this.submitted = false;
    this.updateProfileForm.reset();
  }

  get f() {
    return this.updateProfileForm.controls;
  }

}
