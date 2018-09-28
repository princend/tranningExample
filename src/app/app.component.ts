import { Component, OnInit } from '@angular/core';
import { CarServiceService } from './car-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tranning';
  cars;
  newCars;


  constructor(private carService: CarServiceService) {
    this.carService.getData().subscribe(e => this.newCars = this.cars = e)

  }

  appSearch(event) {
    this.newCars = [];
    this.cars.forEach(element => {
      this.newCars.push(Object.assign({}, element))
    });
    // this.newCars = this.newCars.filter(i => i.name.indexOf(event) > -1 || !event)

    this.newCars = this.newCars.filter(i => i.name.toLowerCase().includes(event.toLowerCase()) || !event)
  }






}
