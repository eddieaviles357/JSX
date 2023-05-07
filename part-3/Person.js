const Person = ( {name, age, hobbies = []} ) => {
    return (<p>
        Learn some information about this person
        { (age >= 18) ? <h3>please go vote!</h3> : <h3>you must be 18</h3> }
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>hobbies</p>
        <ul>
            { hobbies.map( hobby => <li>{ hobby }</li>) }
        </ul>
        </p>
    )
}
    