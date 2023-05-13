import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-slide',
  templateUrl: './table-slide.component.html',
  styleUrls: ['./table-slide.component.css']
})
export class TableSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const table = document.querySelector('.table') as HTMLElement;
const slider = document.querySelector('.slider')  as HTMLElement;
const sliderContainer = document.querySelector('.slider-container')  as HTMLElement;

// set the width of the slider container based on the width of the table
sliderContainer.style.width = table.offsetWidth + 'px';

// listen for mouse events on the slider and adjust the position of the table accordingly
let isDragging = false;
let startPosition = 0;
let startScrollLeft = 0;

slider.addEventListener('mousedown', function(event) {
  isDragging = true;
  startPosition = event.clientX;
  startScrollLeft = table.scrollLeft;
});

slider.addEventListener('mousemove', function(event) {
  if (isDragging) {
    const delta = event.clientX - startPosition;
    const maxDelta = sliderContainer.offsetWidth - table.offsetWidth;
    const newScrollLeft = startScrollLeft + (delta / sliderContainer.offsetWidth) * maxDelta;
    table.scrollLeft = newScrollLeft;
  }
});

document.addEventListener('mouseup', function(event) {
  isDragging = false;
});
  }

  

}