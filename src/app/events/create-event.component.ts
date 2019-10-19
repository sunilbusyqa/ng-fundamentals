import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared'

@Component({
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {
    isDirty:boolean = true
    constructor(private router:Router, private eventService:EventService) {

    }

    ngOnInit() {
        
    }

    saveEvent(formValues) {
        this.eventService.createEvent(formValues)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}