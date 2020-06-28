import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../../services/Contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;
  public resultSendMessage: boolean;
  public errorSendMessageToDisplay: string = null;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['',[Validators.required , Validators.minLength(2)]],
      firstName: ['',[Validators.required , Validators.minLength(2)]],
      email: ['',[Validators.required,Validators.email]],
      message: ['',[Validators.required , Validators.minLength(10)]]
    })
  }
  public submit(): void {
    this.errorSendMessageToDisplay = null;
    this.resultSendMessage = false;
    //On supprime les blancs en début et fin de chaque champ
    for (let item in this.contactForm.value){
      this.contactForm.value[item] = this.contactForm.value[item].trim();
    }
    if(this.contactForm.valid){
      this.contactService.contactRegister(this.contactForm.value)
      .then(() => {
        this.resultSendMessage = true;
        this.resetForm();
      })
      .finally(()=>{
        setTimeout(() => {
          this.resultSendMessage = false;
        }, 5000);
      })
      .catch(error => {
        this.resultSendMessage = false;
        this.errorSendMessageToDisplay = error;
      })
    }
  }
  public resetForm(): void {
    this.contactForm.reset();
  }

}
