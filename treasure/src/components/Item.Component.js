import React, { Component } from "react";
import ItemDataService from "../services/Item.Service";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeDimensions = this.onChangeDimensions.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    //this.onChangeImages = this.onChangeImages.bind(this); ///IMAGES
    this.getItem = this.getItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      currentItem: {
        itemId: null,
        title: "",
        description: "",
        address: "",
        condition: "",
        url: "",
        dimensions: "",
        weight: "",
        // images: "", //IMAGE
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getItem(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentItem: {
        ...prevState.currentItem,
        description: description,
      },
    }));
  }

  onChangeAddress(e) {
    const address = e.target.value;

    this.setState((prevState) => ({
      currentItem: {
        ...prevState.currentItem,
        address: address,
      },
    }));
  }

  onChangeCondition(e) {
    const condition = e.target.value;

    this.setState((prevState) => ({
      currentItem: {
        ...prevState.currentItem,
        condition: condition,
      },
    }));
  }

  onChangeUrl(e) {
    const url = e.target.value;

    this.setState((prevState) => ({
      currentItem: {
        ...prevState.currentItem,
        url: url,
      },
    }));
  }

  onChangeDimensions(e) {
    const dimensions = e.target.value;

    this.setState((prevState) => ({
      currentItem: {
        ...prevState.currentItem,
        dimensions: dimensions,
      },
    }));
  }

  onChangeWeight(e) {
    const weight = e.target.value;

    this.setState((prevState) => ({
      currentItem: {
        ...prevState.currentItem,
        weight: weight,
      },
    }));
  }

  // onChangeImages(e) { 
  //   const images = e.target.value;  //IMAGES

  //   this.setState(prevState => ({
  //     currentItem: {
  //     ...prevState.currentItem,
  //     images: images
  //     }
  //   }));
  // }

  getItem(id) {
    ItemDataService.get(id)
      .then((response) => {
        this.setState({
          currentItem: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateItem() {
    ItemDataService.update(
      this.state.currentItem.itemId,
      this.state.currentItem
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The item was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteItem() {
    ItemDataService.delete(this.state.currentItem.itemId)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/Items");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentItem } = this.state;
    return (
      <div>
        {currentItem ? (
          <div className="edit-form">
            <h4>Item</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentItem.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentItem.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentItem.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="condition">Condition</label>
                <input
                  type="text"
                  className="form-control"
                  id="condition"
                  value={currentItem.condition}
                  onChange={this.onChangeCondition}
                />
              </div>
              <div className="form-group">
                <label htmlFor="url">Url</label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  value={currentItem.url}
                  onChange={this.onChangeUrl}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dimensions">Dimensions</label>
                <input
                  type="text"
                  className="form-control"
                  id="dimensions"
                  value={currentItem.dimensions}
                  onChange={this.onChangeDimensions}
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="weight"
                  value={currentItem.weight}
                  onChange={this.onChangeWeight}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="images">Images</label>
                <input
                  type="file"
                  className="form-control"
                  id="images"
                  value={currentItem.images}
                  onChange={this.onChangeImages}
                />
                </div> */}
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
              </div>
            </form>
            <button
              className="btn btn-outline-danger mr-5"
              onClick={this.deleteItem}
            >
              Delete
            </button>
            <button
              type="submit"
              className="btn btn-outline-success ml-5"
              onClick={this.updateItem}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Item...</p>
          </div>
        )}
      </div>
    );
  }
}
