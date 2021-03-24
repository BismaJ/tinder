import React from 'react'

function TinderCards() {
    return (
        <div>
            fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(result => {
                this.setState({users: result, isFetching: false})
            })
            
        </div>
    )
}

export default TinderCards
