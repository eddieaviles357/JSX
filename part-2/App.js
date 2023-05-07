const App = () => {
    return (
        <div>
            <h1 className='title'>Tweets:</h1>
            <Tweet username='Eddie' user='Eric' message='How are you?' date={new Date().toLocaleDateString(Date.now())}/>
            <Tweet username='Eric' user='Eddie' message='Great?' date={new Date().toLocaleDateString(Date.now())}/>
            <Tweet username='Nancy' user='Noah' message='Good to hear?' date={new Date().toLocaleDateString(Date.now())}/>
            <Tweet username='Noah' user='Nancy' message='Miss you?' date={new Date().toLocaleDateString(Date.now())}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);