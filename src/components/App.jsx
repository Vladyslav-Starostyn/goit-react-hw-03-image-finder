import { Component } from "react"
import {Searchbar} from "components/Searchbar/Searchbar"

export class App extends Component {
  render() {
    return (
     <Searchbar onSubmit={this.setSearchQuery} />
  );
  }
 
};