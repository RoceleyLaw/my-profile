import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { HackerNewsPageComponent } from './hacker-news-page/hacker-news-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SplashPageComponent,
    HackerNewsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/splash-page',
        pathMatch: 'full'
      },
      {
        path: 'main-page',
        component: MainPageComponent
      },
      {
        path: 'splash-page',
        component: SplashPageComponent
      },
      {
        path:'hacker-news-page',
        component: HackerNewsPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
