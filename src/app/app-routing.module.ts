import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationsContainerComponent } from './formations-container/formations-container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { ExperiencesContainerComponent } from './experiences-container/experiences-container.component';
import { CompetencesContainerComponent } from './competences-container/competences-container.component';
import { ProjetsContainerComponent } from './projets-container/projets-container.component';
import { LoisirsContainerComponent } from './loisirs-container/loisirs-container.component';


const routes: Routes = [
  { path: "Formations" , component: FormationsContainerComponent},
  { path: "Experiences-professionnelles" , component: ExperiencesContainerComponent},
  { path: "Competences" , component: CompetencesContainerComponent},
  { path: "Projets" , component: ProjetsContainerComponent},
  { path: "Loisirs" , component: LoisirsContainerComponent},
  { path: "" , component: HomePageComponent, pathMatch:"full"},
  { path: "**" , component: Page404NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
