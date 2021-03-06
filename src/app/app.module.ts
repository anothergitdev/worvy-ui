import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//module
import { OverlayModule } from '@angular/cdk/overlay';
import { MaterialModule } from './core/modules';
import { AboutComponent } from './guide/about/about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DeviceModule } from './device/device.module';
import { LoginComponent } from './login/login.component';
import { AutoconnectComponent } from './guide/autoconnect/autoconnect.component';
import { TimeagoPipe } from './core/pipes/timeago.pipe';
import { ProgressbarComponent } from './shared/components/progressbar/progressbar.component';
import { LoaderService } from './shared/services/loader.service';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    AutoconnectComponent,
    TimeagoPipe,
    ProgressbarComponent
  ],
  imports: [
    OverlayModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DeviceModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
