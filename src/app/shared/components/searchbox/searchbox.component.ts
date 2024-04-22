import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {
  @Input() placeHolder! : string
  @Output() eventSearch = new EventEmitter()

  sendValue(value: string) {
    this.eventSearch.emit(value)
  }

}
