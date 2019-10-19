import { Component, Input } from '@angular/core'

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well hoverwell thumbnail pointable">
            <h2>
                <ng-content select="[well-title]"></ng-content>
            </h2>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `
})

export class CollapsibleWellComponent {
    visible: boolean = true

    toggleContent() {
        this.visible = !this.visible
    }
}