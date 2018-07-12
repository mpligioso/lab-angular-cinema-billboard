import { Component, OnInit } from '@angular/core';
import { Movie } from '../sample-movies';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId: any;
  movieItem: Movie;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myMovieServ: MoviesService
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
      .subscribe((myParams) => {
        this.movieId = myParams.get("id");

        this.movieItem = this.myMovieServ.getMovie(this.movieId)
        console.log(this.movieItem)
      })
  }

}
