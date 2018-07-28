import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [{
    name: "Salmon - Canned",
    price: "$91.56",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    review: [
      {
        name: "Denis",
        text: "Some review text"
      }
    ],
    reviewShow: false
  },
    {
      name: "Soup - Beef, Base Mix",
      price: "$126.14",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Ivan",
          text: "Some review text"
        },
        {
          name: "Maks",
          text: "Some review text"
        }
      ],
      reviewShow: false
    },
    {
      name: "Salmon - Canned",
      price: "$91.56",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [],
      reviewShow: false
    },
    {
      name: "Beef",
      price: "$106.14",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Ivan",
          text: "Some review text"
        },
        {
          name: "Maks",
          text: "Some review text"
        },
        {
          name: "Olga",
          text: "Some review text"
        }
      ],
      reviewShow: false
    },
    {
      name: "Salmon",
      price: "$191.56",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Denis",
          text: "Some review text"
        }
      ],
      reviewShow: false
    },
    {
      name: "Soup",
      price: "$26.14",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Ivan",
          text: "Some review text"
        },
        {
          name: "Maks",
          text: "Some review text"
        }
      ],
      reviewShow: false
    }
    ];

  constructor() {
  }

  ngOnInit() {
  }

  toggleReviews(index) {
    this.items[index].reviewShow = !this.items[index].reviewShow;
  }

  itemDelete(index) {
    if (confirm(`Вы действительно хотите удалить ${this.items[index].name}?`))
      this.items.splice(index, 1);
  }

}

