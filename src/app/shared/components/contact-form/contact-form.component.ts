import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../../services/Firebase/contact.service';
import { Subscription } from 'rxjs';
import { ContactFormModel } from '../../Models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  public contactForm: FormGroup;
  public resultSendMessage: boolean;
  public errorSendMessageToDisplay: string = null;
  private contactFormSubscription: Subscription;

  public formFieldsErrors: ContactFormModel = {
    name: '',
    firstName: '',
    email: '',
    message: ''
  };
  public errorsMessage: {} = {
    name: {
      required: 'Ce champ est requis.',
      minlength: 'Ce champ doit comporter au moins 2 caractères.'
    },
    firstName: {
      required: 'Ce champ est requis.',
      minlength: 'Ce champ doit comporter au moins 2 caractères.'
    },
    email: {
      required: 'Ce champ est requis.',
      email: 'Veuillez renseigner une adresse mail valide.'
    },
    message: {
      required: 'Ce champ est requis.',
      minlength: 'Ce champ doit comporter au moins 10 caractères.'
    }
  };
  private siteKey: string;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) {
    this.siteKey = '6Lfy4bMaAAAAAO8ZZZ2UQ87p6McnKBb_oR5N8fgl';
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required , Validators.minLength(2)]],
      firstName: ['', [Validators.required , Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required , Validators.minLength(10)]],
      recaptchaReactive: [null, Validators.required]
    });
    this.contactFormSubscription = this.contactForm.statusChanges.subscribe(
      () => this.statusFormChange()
    );
  }
  public submit(): void {
    this.errorSendMessageToDisplay = null;
    this.resultSendMessage = false;
    // On supprime les blancs en début et fin de chaque champ
    for (const item in this.contactForm.value){
      this.contactForm.value[item] = this.contactForm.value[item].trim();
    }
    if(this.contactForm.valid){
      this.contactService.contactRegister(this.contactForm.value)
      .then(() => {
        this.resultSendMessage = true;
        this.resetForm();
      })
      .catch(error => {
        this.resultSendMessage = false;
        this.errorSendMessageToDisplay = error;
      })
      .finally(()=>{
        if(this.resultSendMessage){
          setTimeout(() => {
            this.resultSendMessage = false;
          }, 4000);
        }
      })
    }
  }
  public statusFormChange(): void {
    if (!this.contactForm){
      return;
    }
    for (const field in this.formFieldsErrors){
      this.formFieldsErrors[field] = '';
      const control = this.contactForm.get(field);
      if (control && control.touched && control.invalid) {
        const messages = this.errorsMessage[field];
          for (const key in control.errors) {
         this.formFieldsErrors[field] += messages[key] + ' ';
        }
       }
    }
  }
  public resetForm(): void {
    this.contactForm.reset();
  }
  ngOnDestroy(): void {
    this.contactFormSubscription.unsubscribe();
  }
}
