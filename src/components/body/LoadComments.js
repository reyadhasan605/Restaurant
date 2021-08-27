import React from 'react';

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import dateFormat from 'dateformat'

let LoadComments = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{props.it.author}  {props.it.rating}*</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Comment : {props.it.comment}</CardSubtitle>
                    <CardText>{dateFormat(props.date, "dddd, mmmm dS, yyyy, h:MM TT")}</CardText>
                </CardBody>
            </Card>

        </div>
    );
}
export default LoadComments;