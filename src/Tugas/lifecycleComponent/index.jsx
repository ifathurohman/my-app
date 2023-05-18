import {useEffect, useState} from 'react';
import axios from 'axios';
import * as B from 'react-bootstrap';
import {v4} from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

const API_KEY = '59c7f98243a548a09c7eb2566b123b87';

export default function Lifecycle() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  function searchData() {
    hitApi(
      `https://newsapi.org/v2/everything?q=${inputValue}&sortBy=popularity&apiKey=${API_KEY}`,
    );
  }

  function hitApi(fullUrl) {
    axios.get(fullUrl).then(res => {
      setData(res.data.articles);
    });
  }

  useEffect(() => {
    hitApi(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
  }, []);

  return (
    <div>
      <B.Navbar bg="dark" variant="dark" expand="lg">
        <B.Container>
          <B.Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn3.iconfinder.com/data/icons/artificial-intelligence-ultra-color/60/006_-_Ai_Brain-256.png"
              width="24"
              height="24"
              className="d-inline-block"
            />{' '}
            React-News
          </B.Navbar.Brand>
          <B.Navbar.Toggle aria-controls="basic-B.navbar-nav" />
          <B.Navbar.Collapse id="basic-B.navbar-nav">
            <B.Nav className="me-auto">
              <B.Nav.Link href="#home">NEWS</B.Nav.Link>
              <B.Nav.Link href="#link">TREN</B.Nav.Link>
              <B.NavDropdown title="TEKNO" id="basic-nav-dropdown">
                <B.NavDropdown.Item href="#action/3.1">
                  APPS & OS
                </B.NavDropdown.Item>
                <B.NavDropdown.Item href="#action/3.2">
                  INTERNET
                </B.NavDropdown.Item>
                <B.NavDropdown.Item href="#action/3.3">
                  BUSINESS
                </B.NavDropdown.Item>
                <B.NavDropdown.Divider />
                <B.NavDropdown.Item href="#action/3.4">
                  INDEKS
                </B.NavDropdown.Item>
              </B.NavDropdown>
            </B.Nav>
          </B.Navbar.Collapse>
        </B.Container>
      </B.Navbar>
      <B.Card className="">
        <B.Card.Body>
          <B.Container className="p-4">
            <B.Form className="d-flex">
              <B.Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <B.Button variant="outline-success" onClick={searchData}>
                Search
              </B.Button>
            </B.Form>
            <B.Row>
              {data.map(article => (
                <B.Card key={v4()} style={{width: '30%'}} className="m-3 p-3">
                  <B.Card.Img
                    style={{maxHeight: '50vh'}}
                    key={v4()}
                    variant="top"
                    src={article.urlToImage}
                  />
                  <B.Card.Body>
                    <B.Card.Title key={v4()}>{article.title}</B.Card.Title>
                    <B.Card.Text key={v4()}>{article.description}</B.Card.Text>
                  </B.Card.Body>
                  <B.ListGroup className="list-group-flush">
                    <B.ListGroup.Item key={v4()}>
                      {article.author}
                    </B.ListGroup.Item>
                    <B.ListGroup.Item key={v4()}>
                      {article.publishedAt}
                    </B.ListGroup.Item>
                  </B.ListGroup>
                  <B.Button key={v4()} href={article.url}>
                    Detail
                  </B.Button>
                </B.Card>
              ))}
              {data.length < 1 && (
                <p style={{textAlign: 'center', fontSize: '50px'}}>Loading..</p>
              )}
            </B.Row>
          </B.Container>
        </B.Card.Body>
        <B.Card.Footer className="bg-dark text-muted center">
          © 2023
        </B.Card.Footer>
      </B.Card>
    </div>
  );
}
