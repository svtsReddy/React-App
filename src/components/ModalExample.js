import React, { useState } from 'react';
import { Button, Modal, Form,FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div>
         <Form >
                        <FormGroup>
                            <Label for="exampleEmail" >Name :</Label>
                            <Input type="text" name="name" id="name" placeholder="Enter Name" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" >Password :</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" />
                        </FormGroup>
                        {' '}
                        <Button>Submit</Button>
                        </Form>
                        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;