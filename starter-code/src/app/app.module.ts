import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { MoviesService } from './movies.service';

const routesArray: Routes = [
  { path: "home", component: MyHomeComponentComponent},

  { path: "movie/:id", component: MyMovieComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routesArray)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
