import { ViewChild, ElementRef, Component, OnInit, Inject } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  elementRef: ElementRef;
  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
   }

  ngOnInit() {
    $(this.elementRef.nativeElement).find('.moving-box').draggable({containment:'#draggable-parent'});
  }
}
