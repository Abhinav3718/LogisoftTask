import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private service: CommonService) {
    service.updateData(this.data)
   }

  search = '';

  data = [
    {
      "first_name": "DORIS ALICE",
      "last_name": "BOOTH",
      "gender": "Female",
      "favorite": true,
      "contact": [
          {
              "type": "Mobile",
              "no": "7340765896"
          }
      ]
  },
  {
      "first_name": "WILLIAM JOSEPH",
      "last_name": "BOOTH",
      "gender": "Male",
      "favorite": false,
      "contact": [
          {
              "type": "Work",
              "no": "0406245631"
          }
      ]
  },
  {
      "first_name": "DAVID MARK",
      "last_name": "BRILLER",
      "gender": "Male",
      "favorite": false,
      "contact": [
          {
              "type": "Work",
              "no": "0406245631"
          }
      ]
  },
  {
      "first_name": "KATHLEEN SUE",
      "last_name": "BETLOCK",
      "gender": "Female",
      "favorite": false,
      "contact": [
          {
              "type": "Home",
              "no": "950218777"
          }
      ]
  },
  {
      "first_name": "ERIC JOHN",
      "last_name": "BETLOCK",
      "gender": "Male",
      "favorite": false,
      "contact": [
          {
              "type": "Home",
              "no": "950218777"
          }
      ]
  },
  {
      "first_name": "DAVID KINSLEY",
      "last_name": "BARNES",
      "gender": "Male",
      "favorite": false,
      "contact": [
          {
              "type": "Home",
              "no": "950218777"
          }
      ]
  },
  {
      "first_name": "ROBERT JOSEPH",
      "last_name": "BOARDMAN",
      "gender": "Male",
      "favorite": false,
      "contact": [
          {
              "type": "Home",
              "no": "950218777"
          }
      ]
  },
  {
      "first_name": "LINDA DARLENE",
      "last_name": "BEST",
      "gender": "Female",
      "favorite": false,
      "contact": [
          {
              "type": "Work",
              "no": "0406245631"
          }
      ]
  },
  {
      "first_name": "BYRON WILLIAM",
      "last_name": "BEST",
      "gender": "Male",
      "favorite": false,
      "contact": [
          {
              "type": "Home",
              "no": "950218777"
          }
      ]
  },
  {
      "first_name": "VIRGINIA ANN",
      "last_name": "BELLMAN",
      "gender": "Female",
      "favorite": false,
      "contact": [
          {
              "type": "Home",
              "no": "950218777"
          }
      ]
  }
  ];

  ngOnInit(): void {
    this.service.getData().subscribe(res => this.data = res);
  }

  test(select){
console.log(select)
  }

  navigateToCreate() {
    this.router.navigate(['create'])
  }
}
