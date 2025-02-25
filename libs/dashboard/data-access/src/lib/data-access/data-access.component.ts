import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-data-access',
  imports: [CommonModule],
  templateUrl: './data-access.component.html',
  styleUrl: './data-access.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DataAccessComponent {}
