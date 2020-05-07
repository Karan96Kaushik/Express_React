import MyContext from './mycontext';

class MyProvider extends Component {
    state = {
        account: ''
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    change: selectedID => {
                        var account = Object.assign({}, this.state.account);
                        account = selectedID;
                        this.setState({
                            account
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}