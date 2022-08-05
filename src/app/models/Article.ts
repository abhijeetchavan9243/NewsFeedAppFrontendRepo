export class Article {
  private _author: string;
  private _title: string;
  private _description: String;
  private _url: string;
  private _urlToImage: string;
  private _publishedAt: string;

  constructor(
    author: string,
    title: string,
    description: String,
    url: string,
    urlToImage: string,
    publishedAt: string
  ) {
    this._author = author;
    this._title = title;
    this._description = description;
    this._url = url;
    this._urlToImage = urlToImage;
    this._publishedAt = publishedAt;
  }

  //getters and setters
  public get author(): string {
    return this._author;
  }
  public set author(value: string) {
    this._author = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get description(): String {
    return this._description;
  }
  public set description(value: String) {
    this._description = value;
  }
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }
  public get urlToImage(): string {
    return this._urlToImage;
  }
  public set urlToImage(value: string) {
    this._urlToImage = value;
  }
  public get publishedAt(): string {
    return this._publishedAt;
  }
  public set publishedAt(value: string) {
    this._publishedAt = value;
  }
}
