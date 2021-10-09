import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex: '1'}}>
            {source}
          </span>
          {/* {Need to change to style to a JS element} */}
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://i.dailymail.co.uk/1s/2021/09/20/15/48148271-0-image-a-10_1632146620313.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

//the given date is an ISO string
//convert it to GMT format
//ex.
//a="2021-09-30T20:08:16Z
//d=new Date(a)
//d.toGMTString()
//target="_blank" open the webpage in a new Tab

//More work that can be done:
//1.Give an option to user to change country wise news
//2.Display date and time according to that country local time
//3.Provide the search bar to the user(where user will will enter the query) and then display new according to
//that query,if nothing found do No News Item Found

//To add published at:
//Use Card from BootStrap

//To add source of news
//You can use badges in BootStrap

//to add inline CSS to bootstrap class see line 10