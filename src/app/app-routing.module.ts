import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CienciaComponent } from './ciencia/ciencia.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component'
import { EntretenimentoComponent } from './entretenimento/entretenimento.component';
import { FinancasComponent } from './financas/financas.component';
import { EsportesComponent } from './esportes/esportes.component';
import { SaudeComponent } from './saude/saude.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'techpage', component: TecnologiaComponent },
  { path: 'cienciapage', component: CienciaComponent },
  { path: 'entretpage', component: EntretenimentoComponent },
  { path: 'sportspage', component: EsportesComponent },
  { path: 'financaspage', component: FinancasComponent },
  { path: 'saudepage', component: SaudeComponent },
  { path: 'loginform', component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'loginform' },
  { path: 'signupform', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
