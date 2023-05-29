import * as B from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';

const Second = () => {
  return (
    <>
      <NavigationBar/>
      <B.Card className="text-center background-image">
        <B.Card.Body
          style={{
            marginTop: '35vh',
            marginBottom: '35vh',
          }}>
          <B.Card.Title>Halaman About</B.Card.Title>
          <B.Card.Text>
           Ini Halaman About
          </B.Card.Text>
          <B.Button variant="primary">Go somewhere</B.Button>
        </B.Card.Body>
        <B.Card.Footer className="bg-dark text-muted">© 2023</B.Card.Footer>
      </B.Card>
    </>
  );
};

export default Second;
