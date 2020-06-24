import React, { Component } from 'react';
import {Modal, Button} from 'reactstrap';

export class Modals extends Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.show) {
            return null;
        }
        return(
            <div>
                <div>
                    {/* {this.props.children} */}
                    {this.props.item.name}
                </div>
                <div>
                    <Button onClick={this.onClose}>close</Button>
                </div>
                
            </div>
            
            // <Modal.Dialog>
            //     <Modal.Header closeButton>
            //         <Modal.Title>
            //             Title
            //         </Modal.Title>
            //     </Modal.Header>

            //     <Modal.Body>
            //         <p>Modal body text goes here.</p>
            //     </Modal.Body>

            //     <Modal.Footer>
            //         <Button variant="secondary">
            //             Close
            //         </Button>
            //     </Modal.Footer>
            // </Modal.Dialog>


            
        )
    }
}

export default Modals