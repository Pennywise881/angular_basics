import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/locations';

  constructor() { }

  // async getAllHousingLocations(): Promise<Housinglocation[]> {
  //   // return this.housingLocationList;
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }
  
  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    const locations: Housinglocation[] = (await data.json()) ?? [];

    // Append the baseUrl to the photo field of each housing location
    return locations.map(location => {
      // location.photo = `${this.baseUrl}${location.photo}`;
      location.photo = this.baseUrl + location.photo
      return location;
    });
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }
}
