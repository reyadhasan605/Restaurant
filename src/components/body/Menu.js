import React, { Component } from 'react';
import MenuList from './MenuList';
import DishDetails from './DishDetails';
import { CardColumns, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux'
import { fetchdished, fetchcomment } from '../../redux/Action';
import Loading from './Loading';
import { Alert } from 'reactstrap'

class Menu extends Component {

    constructor(props) {
        super(props);


    }

    state = {
        selectedDish: null,
        modalisopen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalisopen: !this.state.modalisopen
        });


    }
    handelmodal = () => {
        this.setState({
            modalisopen: !this.state.modalisopen
        })
    }
    componentDidMount() {
        this.props.startfetching();
        this.props.startfetchingcom();
    }

    render() {
        document.title = "Menu"
        if (this.props.dishfromredux.Loading) {
            return <Loading />
        }
        else if (this.props.dishfromredux.error != null) {
            return (
                <Alert color="danger">
                    {this.props.dishfromredux.error}
                </Alert>
            )

        }
        const menu = this.props.dishfromredux.dishes.map(item => {
            return (
                <MenuList dish={item} key={item.id}
                    DishSelect={this.onDishSelect}
                />
            );
        })

        let dd = null;
        if (this.state.selectedDish != null) {
            const com = this.props.commentfromrexux.comments.filter(c => {
                return this.state.selectedDish.id === c.dishId
            });
            dd = <DishDetails dish={this.state.selectedDish} comment={com}
            />
        }
        return (
            <div className='container'>

                <CardColumns>
                    {menu}
                </CardColumns>
                <Modal isOpen={this.state.modalisopen}>
                    <ModalBody>
                        {dd}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handelmodal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }

}
const mapstatetoprops = (sta) => {
    return {
        commentfromrexux: sta.comments,
        dishfromredux: sta.dish
    }
}
const mapdispatchtoprops = (dispatch) => {
    return {
        startfetching: () => dispatch(fetchdished()),
        startfetchingcom: () => dispatch(fetchcomment())
    }

}
export default connect(mapstatetoprops, mapdispatchtoprops)(Menu)