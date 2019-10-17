import React, { Component } from "react";
import Link from "next/link";
class CollectionHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      width: "300px",
      height: "300px",
      margin: "10px 10px 10px 10px",
      backgroundColor: "white"
    };

    return (
      <div className="listing-item" style={{ backgroundColor: "white" }}>
        <div className="listing-image">
          <img
            src={this.props.image_url}
            alt="Image"
            className="img-fluid"
            style={style}
          />
        </div>
        <div className="listing-item-content">
          <a
            href="#"
            className="bookmark"
            data-toggle="tooltip"
            data-placement="left"
            title="Bookmark"
          >
            <span className="icon-heart"></span>
          </a>

          <h2 className="mb-1">
            <a href="#">{this.props.title}</a>
          </h2>
          <span className="address">{this.props.description}</span>
          <div>
            <Link href={`restaurantByCollection?cid=${this.props.id}`}>
              <a className="px-3 mb-3 category">explore</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionHolder;
