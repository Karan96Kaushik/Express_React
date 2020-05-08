import MyContext from './mycontext';

class MyProvider extends Component {
    state = {
        account: ''
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.account
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}