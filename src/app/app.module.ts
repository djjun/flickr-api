import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { FooterComponent, HeaderComponent, LayoutComponent } from './shared'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { APIInterceptor } from './core/interceptors/api.interceptor'
import { AngularFontAwesomeModule } from 'angular-font-awesome'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    }
  ],
  exports: [LayoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
