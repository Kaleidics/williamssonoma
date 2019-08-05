import React from "react";
import seed from "./seed";
import ItemsContainer from "./components/ItemsContainer";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    //sets the seed data from seed file to the state
    componentDidMount() {
        this.setState({
            items: seed.groups
        });
    }

    render() {
        return (
            <div className="App">
                <ItemsContainer data={this.state.items} />
            </div>
        );
    }
}
