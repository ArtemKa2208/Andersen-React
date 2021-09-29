import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
export default(props) => (
  <>
  <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header >
      <Modal.Title>Registration</Modal.Title>
      <button onClick={props.handleClose}>x</button>
    </Modal.Header>
    <Modal.Body>
      <label>Full name</label>
      <input type="text" />
      <label>Date of Birth</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" minlength="6"/>
      <label>Email</label>
      <input type="email" />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={props.handleClose}>
        Registration
      </Button>
    </Modal.Footer>
  </Modal>
</>
)