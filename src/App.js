import React from 'react';
import seed from './seed';
import ItemsContainer from './components/ItemsContainer'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.setState({
      items: seed.groups
    })
  }

  render() {
    console.log(this.state.items)
    return (
    <div className="App" >
        <ItemsContainer data={this.state.items} />
    </div>
    );
  }
}
