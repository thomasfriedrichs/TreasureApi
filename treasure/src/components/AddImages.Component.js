import React, { Component } from "react";
import ItemDataService from "../services/Item.Service";
import { Link } from "react-router-dom";


export default class AddImages extends Component {
  constructor(props) {
    super(props);
    this.onChangeImages = this.onChangeImages.bind(this); 
    this.saveItem = this.saveItem.bind(this);
    this.state = {
      itemId: this.itemId,
      images: "",
    }
  }

  onChangeImages(e) {  //IMAGES
    this.setState({
      images: e.target.value,
    });
  }

  saveItem() {
    var data = {
      images: this.state.images,
    }

    ItemDataService.create(data)
      .then((response) => {
        this.setState({
          itemId: response.data.itemId,
          images: response.data.images,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  

render() {
  return (
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
        <h4>You've added successfully!</h4>
        <Link to={"/items/"}>
          <button className="edit btn btn-outline-primary">
            Home
          </button>
        </Link>
        </div>
      ) : (
        <div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
          type="file"
          className="form-control"
          id="images"
          required
          value={this.state.images}
          onChange={this.onChangeImages}
          name="images"
          />
        </div>
        <button onClick={this.saveItem} className="btn btn-success">
          Post
        </button>
        </div>
      )}
      </div>
  ); }

}