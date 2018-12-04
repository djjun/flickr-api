import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { FooterComponent, HeaderComponent, LayoutComponent } from './shared/ui'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { APIInterceptor } from './core/interceptors/api.interceptor'
import { CardComponent, LoadingComponent } from './shared/components'
import { NgxMasonryModule } from 'ngx-masonry'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMasonryModule,
    InfiniteScrollModule
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
