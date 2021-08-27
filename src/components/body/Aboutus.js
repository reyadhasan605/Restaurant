import React, { Component } from 'react'

class Aboutus extends Component {

    componentDidMount() {
        // axios.get('http://localhost:3000/dishes')
        //     .then(response => response.data)
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err.message));


        // axios.get('http://localhost:3000/dishes')
        //     .then(response => response.data)
        //     .then(data => console.log("About ", data))
        //     .catch(err => console.log(err))
        // axios.post('http://localhost:3000/dishes', { name: "cheese", price: 80 })
        //     .then(resposne => console.log(resposne));

    }
    render() {

        document.title = "About"
        return (
            <div>

            </div>
        );
    }


}


export default Aboutus;