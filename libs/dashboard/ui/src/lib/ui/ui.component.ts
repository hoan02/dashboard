import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui',
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UiComponent {}
