import React, { Component } from 'react'
import { Form, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { AddToStore } from '../../redux/Action'


const mapDispatchToproops = (dispatch) => {

    return {
        addcomment: (dishId, author, rating, comment, date, id) => dispatch(AddToStore(dishId, author, rating, comment, date, id))
    }
}


class CreateComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
    }
    handleinputchange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handlesubmit(event) {
        let now = new Date();
        this.props.addcomment(this.props.dishid, this.state.author, this.state.rating, this.state.comment, now, this.state.comment.length);

        event.preventDefault();
        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
    }

    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handlesubmit(event)}>
                    <Input type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={(event) => this.handleinputchange(event)}
                        required
                    />
                    <br />
                    <Input type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={(event) => this.handleinputchange(event)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <textarea
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={(event) => this.handleinputchange(event)}
                        required
                    />
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>

            </div>
        );
    }
}
export default connect(null, mapDispatchToproops)(CreateComment)