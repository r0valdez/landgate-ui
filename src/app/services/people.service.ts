import { Injectable } from '@angular/core';
import {delay} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {PersonModel} from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  private mockPeopleList = [
    {firstName: 'John', lastName: 'Doe', age: '21', jobTitle: 'Wanna be Signer'},
    {firstName: 'Jane', lastName: 'Doe', age: '22', jobTitle: 'Signer'},
    {firstName: 'Bob', lastName: 'Barker', age: '80', jobTitle: 'TV Host'},
    {firstName: 'John', lastName: 'Doe', age: '21', jobTitle: 'Wanna be Signer'},
  ];


  getPeople(): Observable<PersonModel[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    // of(true).pipe(delay(100))
    const mockPeopleList = this.mockPeopleList.map(person => new PersonModel(person))
    return of(mockPeopleList).pipe(delay(100));
  }

  updatePeople(personId: number, person: PersonModel): Observable<PersonModel[]> {
    const mockPeopleList = this.mockPeopleList.map((mockPerson, index) => {
      if (personId == index) return person;
      return new PersonModel(mockPerson);
    })
    return of(mockPeopleList).pipe(delay(100));
  }
}
