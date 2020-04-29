import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { JdaComponent } from './components/jda/jda.component';
import { OutputComponent } from './components/output/output.component';
import { TcoHeaderComponent } from './shared/components/tco-header/tco-header.component';
import { TcoProgressComponent } from './shared/components/tco-progress/tco-progress.component';
import { TcoLayoutComponent } from './shared/components/tco-layout/tco-layout.component';
import { TcoFooterComponent } from './shared/components/tco-footer/tco-footer.component';
import { StartComponent } from './components/start/start.component';
import { LocalService } from './shared/services/local.service';
import {FormsModule} from '@angular/forms';
import { ShirtSizeComponent } from './components/shirt-size/shirt-size.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    LoginComponent,
    JdaComponent,
    OutputComponent,
    TcoHeaderComponent,
    TcoProgressComponent,
    TcoLayoutComponent,
    TcoFooterComponent,
    StartComponent,
    ShirtSizeComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
