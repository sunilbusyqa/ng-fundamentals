import { Injectable } from '@angular/core'
import { IEvent } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class EventService {
    
    constructor(private http: HttpClient) {}

    getEvents():Observable<IEvent[]> {
        return this.http.get<IEvent[]>('/api/events')
            .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error)
            return of(result as T);
        }
    }

    getEvent(id:number):Observable<IEvent> {
        return this.http.get<IEvent>('/api/events/' + id)
            .pipe(catchError(this.handleError<IEvent>('getEvent')))
    }

    saveEvent(event) {
        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post<IEvent>('/api/events', event, options)
            .pipe(catchError(this.handleError<IEvent>('saveEvent')))
    }
}

const EVENTS:IEvent[] = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
        address: '1057 DT',
        city: 'London',
        country: 'England',
        },
        votes: 1
    },
    {
        id: 2,
        name: 'ng-nl',
        date: new Date( '4/15/2037'),
        time: '9:00 am',
        price: 950.00,
        imageUrl: '/assets/images/ng-nl.png',
        onlineUrl: 'https://www.busyqa.com',
        votes: 2
    },
    {
        id: 3,
        name: 'ng-conf 2037',
        date: new Date( '5/4/2037'),
        time: '9:00 am',
        price: 759.00,
        imageUrl: '/assets/images/ng-conf.png',
        location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
        },
        votes: 5
    },
    {
        id: 4,
        name: 'UN Angular Summit',
        date: new Date( '6/10/2037'),
        time: '8:00 am',
        price: 800.00,
        imageUrl: '/assets/images/basic-shield.png',
        location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
        },
        votes: 3
    },
    {
        id: 5,
        name: 'ng-vegas',
        date: new Date( '2/10/2037'),
        time: '9:00 am',
        price: 400.00,
        imageUrl: '/assets/images/ng-vegas.png',
        location: {
        address: 'The Excalibur',
        city: 'Las Vegas',
        country: 'USA'
        },
        votes: 2
    }
    ]