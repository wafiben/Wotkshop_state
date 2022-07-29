import React, { Component } from "react";
import "./App.css";
import List from "./Components/List";

class App extends Component {
  state = {
    articles: [
      {
        id: 0,
        name: "pc",
        price: 55,
        qte: 0,
        image:
          "https://www.tunisianet.com.tn/134151-large/pc-portable-lenovo-ideapad-l340-15irh-gaming-i5-9e-gen-8-go-sac-a-dos-lenovo-offert.jpg",
      },
      {
        id: 1,
        name: "ipod",
        price: 20,
        qte: 0,
        image:
          "https://i.etsystatic.com/19007236/r/il/dd3a32/2133570822/il_fullxfull.2133570822_qkhj.jpg",
      },
    ],
    sum: 0,
  };
  incrementQuatity = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id == id) {
          return { ...elt, qte: elt.qte + 1 };
        } else {
          return elt;
        }
      }),
    });
  };
  DecrementQuantity = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id == id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        } else {
          return elt;
        }
      }),
    });
  };
  deleteArticle = (article) => {
    this.setState({
      articles: this.state.articles.filter((elt) => elt.id !== article.id),
      sum: this.state.sum - article.qte * article.price,
    });
  };
  handleTotalIncrement = (x) => {
    this.setState({ sum: this.state.sum + x.price });
  };
  handleTotalDecrement = (x) => {
    if (this.state.sum > 0||x.qte>0) {
      this.setState({ sum: this.state.sum - x.price });
    }
  };

  render() {
    const { articles, sum } = this.state;
    return (
      <div className="App">
        <List
          articles={articles}
          sum={sum}
          incrementQuatity={this.incrementQuatity}
          DecrementQuantity={this.DecrementQuantity}
          deleteArticle={this.deleteArticle}
          handleTotalIncrement={this.handleTotalIncrement}
          handleTotalDecrement={this.handleTotalDecrement}
        />
      </div>
    );
  }
}

export default App;
