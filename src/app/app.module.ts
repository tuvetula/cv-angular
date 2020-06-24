import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormationsContainerComponent } from './formations-container/formations-container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { ExperiencesContainerComponent } from './experiences-container/experiences-container.component';
import { CompetencesContainerComponent } from './competences-container/competences-container.component';
import { ProjetsContainerComponent } from './projets-container/projets-container.component';
import { LoisirsContainerComponent } from './loisirs-container/loisirs-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { CarouselConfigComponent } from './shared/components/Caroussel/carousel-config/carousel-config.component';
import { ScrollUpButtonComponent } from './shared/components/scroll-up-button/scroll-up-button.component';
import { ContactFormComponent } from './shared/components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    Page404NotFoundComponent,
    FormationsContainerComponent,
    ExperiencesContainerComponent,
    CompetencesContainerComponent,
    ProjetsContainerComponent,
    LoisirsContainerComponent,
    ContactContainerComponent,
    CarouselConfigComponent,
    ScrollUpButtonComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
