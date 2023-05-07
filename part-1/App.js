
const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name='Ed'/>
        </div>
    )
};

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);