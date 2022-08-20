import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsapiService } from './service/newsapi.service';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { CienciaComponent } from './ciencia/ciencia.component';
import { FinancasComponent } from './financas/financas.component';
import { SaudeComponent } from './saude/saude.component';
import { EntretenimentoComponent } from './entretenimento/entretenimento.component';
import { EsportesComponent } from './esportes/esportes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TecnologiaComponent,
    CienciaComponent,
    FinancasComponent,
    SaudeComponent,
    EntretenimentoComponent,
    EsportesComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
