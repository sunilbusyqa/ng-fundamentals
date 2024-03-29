import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
            <event-thumbnail #thumbnail [event]="eventModel" (eventClick)="handleEventClicked($event)"></event-thumbnail>
            <h3>{{thumbnail.someProperty}}</h3>
            <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
        </div>
    `,
    styles: [`
        .well div { color: red; }
    `]
})

export class EventsListComponent {
    eventModel = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data) {
        console.log('received: ', data);
    }
}