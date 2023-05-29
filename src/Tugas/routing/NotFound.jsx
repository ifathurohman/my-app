import {useNavigate} from 'react-router-dom';
import * as B from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../../Components/NavigationBar';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <B.Card className="text-center background-image">
        <B.Card.Body
          style={{
            marginTop: '35vh',
            marginBottom: '35vh',
          }}>
          <B.Card.Title>404 Not Found</B.Card.Title>
          <B.Card.Text>Ini Halaman 404 Not Found</B.Card.Text>
          <B.Button onClick={() => navigate('/')} variant="primary">
            Go Home
          </B.Button>
        </B.Card.Body>
        <B.Card.Footer className="bg-dark text-muted">© 2023</B.Card.Footer>
      </B.Card>
    </>
  );
};

export default NotFound;
