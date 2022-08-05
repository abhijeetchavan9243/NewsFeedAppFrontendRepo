import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public article = {
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
  };
  articles: any = [];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    console.log('inside the ...');
    var val = localStorage.getItem('search');

    this.searchService.getArticles(val).subscribe(
      (data) => {
        var myJsonString = JSON.stringify(data);
        var myJsonObject = JSON.parse(myJsonString);

        //traversing through articles
        for (let index = 0; index < myJsonObject.articles.length - 1; index++) {
          var getAuthor = myJsonObject.articles[index].author;
          if (getAuthor == null) {
            getAuthor = 'Anonymous';
          }
          var getTitle = myJsonObject.articles[index].title;
          if (getTitle == null) {
            getTitle = 'No Title Available';
          }
          var getDescription = myJsonObject.articles[index].description;
          if (getDescription == null) {
            getDescription = 'No Description';
          }
          var getUrl = myJsonObject.articles[index].url;
          if (getUrl == null) {
            getUrl = 'No Url Availble';
          }
          var getUrlToImage = myJsonObject.articles[index].urlToImage;
          if (getUrlToImage == null) {
            getUrlToImage = 'No Image Available';
          }
          var getPublishedAt = myJsonObject.articles[index].publishedAt;
          if (getPublishedAt == null) {
            getPublishedAt = 'No Publication Date Available';
          }

          //storing single article
          var obj = {};
          var myjsString = JSON.stringify(obj);
          var myObject = JSON.parse(myjsString);
          myObject.author = getAuthor;
          myObject.title = getTitle;
          myObject.description = getDescription;
          myObject.url = getUrl;
          myObject.urlToImage = getUrlToImage;
          myObject.publishedAt = getPublishedAt;

          //storing single article in articles array
          this.articles.push(myObject);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
