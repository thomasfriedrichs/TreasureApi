import React, { Component } from "react";
import ItemDataService from "../services/Item.Service";
import { Link } from "react-router-dom";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeDimensions = this.onChangeDimensions.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    //this.onChangeImages = this.onChangeImages.bind(this); //IMAGES
    this.saveItem = this.saveItem.bind(this);
    this.newItem = this.newItem.bind(this);

    this.state = {
      itemId: null,
      title: "",
      description: "",
      address: "",
      condition: "",
      url: "",
      dimensions: "",
      weight: "",
      images: [], //IMAGES STATE

      submitted: false,
    };
  }

  onChangeItemId(e) {
    this.setState({
      itemId: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeCondition(e) {
    this.setState({
      condition: e.target.value,
    });
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }

  onChangeDimensions(e) {
    this.setState({
      dimensions: e.target.value,
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
    });
  }

  // onChangeImages(e) {  //IMAGES
  //   this.setState({
  //     images: e.target.value,
  //   });
  // }

  saveItem() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      address: this.state.address,
      condition: this.state.condition,
      url: this.state.url,
      dimensions: this.state.dimensions,
      weight: this.state.weight,
      images: this.state.images, //IMAGES
    };

    ItemDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          address: response.data.address,
          condition: response.data.condition,
          url: response.data.url,
          dimensions: response.data.dimensions,
          weight: response.data.weight,
          images: [], //IMAGES
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newItem() {
    this.setState({
      title: "",
      address: "",
      condition: "",
      url: "",
      dimensions: "",
      weight: "",
      //images: "",  //IMAGES
      description: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You've added successfully!</h4>
            <Link to={"/items/"}>
              <button className="edit btn btn-outline-primary">Home</button>
            </Link>
            <Link to={`/AddImages/${this.state.itemId}`}>
              <button className="edit btn btn-outline-primary">
                Add Images
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="adress"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                name="adress"
              />
            </div>

            <div className="form-group">
              <label htmlFor="condition">Condition</label>
              <input
                type="text"
                className="form-control"
                id="condition"
                required
                value={this.state.condition}
                onChange={this.onChangeCondition}
                name="condition"
              />
            </div>

            <div className="form-group">
              <label htmlFor="url">Url</label>
              <input
                type="text"
                className="form-control"
                id="url"
                required
                value={this.state.url}
                onChange={this.onChangeUrl}
                name="url"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dimensions">Dimensions</label>
              <input
                type="text"
                className="form-control"
                id="dimensions"
                required
                value={this.state.dimensions}
                onChange={this.onChangeDimensions}
                name="dimensions"
              />
            </div>

            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                required
                value={this.state.weight}
                onChange={this.onChangeWeight}
                name="weight"
              />
            </div>

            {/* <div className="form-group">
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
        </div> */}
            <button onClick={this.saveItem} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

//{this.state.submitted ? (
