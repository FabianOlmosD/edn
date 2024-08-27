import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { db } from '../Conf/firebase';
import { addDoc, collection } from 'firebase/firestore'; // Importa las funciones necesarias de Firebase
import '../index.css';

function Contact() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "contactMessages"), {
        nombre,
        apellido,
        email,
        mensaje,
        timestamp: new Date()
      });
      setShowSuccessMessage(true); // Mostrar mensaje de éxito
    } catch (e) {
      console.error("Error añadiendo el documento: ", e);
      alert("Error enviando el mensaje");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'apellido') {
      setApellido(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'mensaje') {
      setMensaje(value);
    }
  };

  return (
    <Container className="card-container">
      <Card border="warning">
        <Card.Body className='consultoria-section card-text text-white'>
          <h3 className='text-white text-center'>CONTACTO</h3>
          {showSuccessMessage ? (
            <div className="text-center" style={{ fontSize: '2em', color: 'white' }}>
              ¡Tu mensaje fue enviado exitosamente, nos contactaremos a la brevedad!
            </div>
          ) : (
            <Form onSubmit={handleClick}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su apellido"
                  name="apellido"
                  value={apellido}
                  onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={email}
                  onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="mensaje"
                  value={mensaje}
                  onChange={handleChange} />
              </Form.Group>
              <Button type='submit' variant="outline-warning">Enviar</Button>{' '}
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
