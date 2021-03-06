import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { base } from '../../redux/baseUrl'

let MenuList = (props) => {
    return (
        <div>

            <Card inverse style={{ margin: '10px' }}>
                <CardImg width="100%" src={base + props.dish.image} alt={props.dish.name} />
                <CardImgOverlay>
                    <CardTitle tag="h5" style={{ cursor: 'pointer' }} onClick={props.DishSelect.bind(this, props.dish)}>{props.dish.name}</CardTitle>
                    <CardText>
                        <small className="text-muted" style={{ color: 'blue' }}>Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>

        </div>
    );
}
export default MenuList;