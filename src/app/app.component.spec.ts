import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { LayoutComponent, HeaderComponent } from './shared/ui'
import { CardComponent, LoadingComponent } from './shared/components'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxMasonryModule } from 'ngx-masonry'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        LayoutComponent,
        HeaderComponent,
        CardComponent,
        LoadingComponent
      ],
      imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxMasonryModule,
        InfiniteScrollModule
      ]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
