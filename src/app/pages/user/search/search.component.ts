import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchvalue: any = {
    search: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  Search() {
    console.log(this.searchvalue.search);
    console.log(typeof this.searchvalue.search);
    let newSearch = this.searchvalue.search/*.replace(/ /g, '+')*/;
    console.log(newSearch);
    localStorage.setItem('search', newSearch);
    this.router.navigate(['/user-dashboard/feed']);
  }
}
