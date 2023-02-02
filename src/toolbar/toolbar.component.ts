import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone:true
})
export class ToolbarComponent implements OnInit {
@Input() title = ''
  constructor() { }

  ngOnInit() {
  }

}