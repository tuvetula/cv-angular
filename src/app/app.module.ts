import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {environment} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule, AngularFireStorage} from '@angular/fire/storage';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {FormationsContainerComponent} from './formations-container/formations-container.component';
import {HomePageComponent} from './home-page/home-page.component';
import {Page404NotFoundComponent} from './page404-not-found/page404-not-found.component';
import {ExperiencesContainerComponent} from './experiences-container/experiences-container.component';
import {CompetencesContainerComponent} from './competences-container/competences-container.component';
import {ProjetsContainerComponent} from './projets-container/projets-container.component';
import {LoisirsContainerComponent} from './loisirs-container/loisirs-container.component';
import {ContactContainerComponent} from './contact-container/contact-container.component';
import {CarouselConfigComponent} from './shared/components/Caroussel/carousel-config/carousel-config.component';
import {ScrollUpButtonComponent} from './shared/components/scroll-up-button/scroll-up-button.component';
import {ContactFormComponent} from './shared/components/contact-form/contact-form.component';
import {TopbarBackgroundComponent} from './shared/components/topbar-background/topbar-background.component';
import {FooterComponent} from './shared/components/footer/footer.component';

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
    ContactFormComponent,
    TopbarBackgroundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6Lc77LMaAAAAALzBEaLK5ERf2i8qgjrKqCxY8I-G',
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
