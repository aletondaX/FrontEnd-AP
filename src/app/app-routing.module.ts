import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { AddEducacionComponent } from './components/educacion/add-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { AddExperienciaComponent } from './components/experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'iniciar-sesion', component: LoginComponent},
  {path: 'editAcercaDe/:id', component: EditAcercaDeComponent},
  {path: 'addExperiencia', component: AddExperienciaComponent},
  {path: 'editExperiencia/:id', component: EditExperienciaComponent},
  {path: 'addEducacion', component: AddEducacionComponent},
  {path: 'editEducacion/:id', component: EditEducacionComponent},
  {path: 'nuevoproyecto', component: NewProyectosComponent},
  {path: 'editproyecto/:id', component: EditProyectosComponent},
  {path: 'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
