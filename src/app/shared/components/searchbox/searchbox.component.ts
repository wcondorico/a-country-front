import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent implements OnInit{
  private readonly debouncer: Subject<string> = new Subject<string>()

  @Input() placeHolder! : string
  @Output() eventSearch = new EventEmitter()
  @Output() onDebounce = new EventEmitter()
  validateForm: FormGroup<{
    search: FormControl<string|null>;
  }> = new FormGroup({
    'search': new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(700)
    )
    .subscribe( value => {
      this.onDebounce.emit(value)
    }
    )
  }

  sendValue() {
    this.eventSearch.emit(this.validateForm.value.search!)
  }

  onkeyPress() {
    this.debouncer.next(this.validateForm.value.search!)
  }
}
