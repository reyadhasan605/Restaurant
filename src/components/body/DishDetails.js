import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import LoadComments from './LoadComments.js';
import CreateComment from './CreateComment';
import { base } from '../../redux/baseUrl'
class DishDetails extends Component {

    render() {
        let com = this.props.comment.map(item => {

            return (
                <LoadComments it={item} date={item.date} key={item.id} />
            );

        })
        return (
            <div>
                <Card style={{ margin: '10px', padding: '10px' }}>
                    <CardImg top width="100%" src={base + this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle tag="h5">{this.props.dish.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Price : {this.props.dish.price} TK</CardSubtitle>
                        <CardText>{this.props.dish.description}</CardText>
                        <hr />
                        {com}
                        <hr />
                        <CreateComment dishid={this.props.dish.id} />
                    </CardBody>
                </Card>
            </div>

        );
    }
}

export default DishDetails