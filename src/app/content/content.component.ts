import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {



   @Input() list :any[];
  fontSize=24;
  constructor() { }

  ngOnInit() {
  }




  enlarge(){
this.fontSize++
  }

}
