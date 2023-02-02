import 'zone.js/dist/zone';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LinksComponent } from './links/links.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LinksComponent, ToolbarComponent],
  template: `
    <app-toolbar [title]="title">
    <app-links toolbar-links></app-links>
    </app-toolbar>
  `,
})
export class App {
  title = 'Angular';
}

bootstrapApplication(App);
