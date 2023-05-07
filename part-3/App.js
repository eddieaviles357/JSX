const App = () => (
    <div>
        <Person 
            name='Ed' 
            age={35} 
            hobbies={['coding', 'guitar', 'sports']}
        />
        <Person 
            name='Nan' 
            age={39} 
            hobbies={['Shopping', 'music', 'creating']}
        />
        <Person 
            name='Eric' 
            age={8} 
            hobbies={['planets', 'cars', 'drawing']}
        />
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)