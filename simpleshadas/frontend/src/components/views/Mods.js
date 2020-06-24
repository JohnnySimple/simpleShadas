import React from 'react';
import {Modal, Button} from 'reactstrap';

function Mods(props) {
    return (
        <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Title
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
    )
}

export default Mods