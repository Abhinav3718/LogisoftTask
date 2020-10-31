import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private service: CommonService) { }

  isFav: boolean;

  contacts: any[] = [];

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
    //this.service.updateData(this.data)
    this.service.getData().subscribe(res => this.data = res)
    this.isFav = true;
    this.contacts = [];
    this.contacts.push({'id': 1, 'type': 'Mobile', 'no': ''})
  }

  toggleFav() {
    this.isFav = !this.isFav;
  }

  AddContact(item, number) {
    this.contacts.filter(record => record.id = item.id)[0].no = number;

    let obj = {'id': item.id + 1, 'type': 'Mobile', 'no': ''}
    this.contacts.push(obj)
  }

  onChangeDropdown(dropdownSelection, item) {
    this.contacts.filter(record => record.id = item.id)[0].type = dropdownSelection.target.value;
  }

  DeleteContact(item) {
    this.contacts.splice(item.id - 1, 1);
  }

  CreateUser(firstName, lastName) {
    let obj = {'first_name': firstName.value, 'last_name': lastName.value, 'contact': this.contacts, 'favorite': this.isFav, 'gender':''}
    this.data.push(obj);
    this.service.updateData(this.data)
  }
}
