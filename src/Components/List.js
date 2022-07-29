import React, { Component } from "react";
import SingleItme from "./SingleItme";

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          {this.props.articles.map((elt) => (
            <SingleItme
              key={elt.id}
              elt={elt}
              incrementQuatity={this.props.incrementQuatity}
              DecrementQuantity={this.props.DecrementQuantity}
              deleteArticle={this.props.deleteArticle}
              handleTotalIncrement={this.props.handleTotalIncrement}
              handleTotalDecrement={this.props.handleTotalDecrement}
         
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Total sum:</h1>
          <h1>{this.props.sum}</h1>
          <h1>$</h1>
        </div>
      </div>
    );
  }
}

export default List;
