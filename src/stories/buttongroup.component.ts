import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttongroup',
  template: `
    <div class="d-flex">
      <div
      *ngFor="let button of buttons"
      >
      <storybook-button
          [primary] = button.primary
          [size]=button.size
          (onClick)="onCreateAccount.emit($event)"
        ></storybook-button>

      </div>
    </div>
        
  `,
  styles: [
  ]
})
export class ButtongroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  onCreateAccount = new EventEmitter<Event>();
  @Input()
  buttons: any; 

}
