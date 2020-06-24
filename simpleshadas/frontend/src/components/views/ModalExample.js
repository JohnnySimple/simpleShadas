import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (
    <div>
        <Button color="danger" onClick={toggle}>launch modal</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                This is a test modal.
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Do something</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
);
}

export default ModalExample;