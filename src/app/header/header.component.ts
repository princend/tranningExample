import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  // public keyword ='請輸入關鍵字'
  keyword: string;


  public title = '汽車誌';

  @Output() keywordChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }


  search(inputValue) {
console.log(inputValue);

    // console.log(this.keyword,'test');

    this.keywordChange.emit(inputValue)

  }

}
