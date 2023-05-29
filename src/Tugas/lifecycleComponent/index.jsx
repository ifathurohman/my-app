import {useEffect, useState} from 'react';
import axios from 'axios';
import * as B from 'react-bootstrap';

import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

import {format} from 'date-fns';

const API_KEY = '59c7f98243a548a09c7eb2566b123b87';
const PER_PAGE = 6;

export default function Lifecycle() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const [pageCount, setPageCount] = useState(0);

  function searchData() {
    hitApi(
      `https://newsapi.org/v2/everything?q=${inputValue}&sortBy=popularity&apiKey=${API_KEY}&page=1&pageSize=${PER_PAGE}`,
    );
  }

  function hitApi(fullUrl) {
    axios.get(fullUrl).then(res => {
      setData(res.data.articles);
      console.log(res.data);
      setPageCount(Math.ceil(res.data.totalResults / PER_PAGE));
    });
  }

  function handlePageClick(e) {
    const selectedPage = e.selected;
    hitApi(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=${selectedPage}&pageSize=${PER_PAGE}`,
    );
  }

  useEffect(() => {
    hitApi(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=1&pageSize=${PER_PAGE}`,
    );
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
              {data.map((article, index) => (
                <B.Card key={index} style={{width: '30%'}} className="m-3 p-3">
                  <B.Card.Img
                    style={{maxHeight: '50vh'}}
                    variant="top"
                    src={article.urlToImage}
                  />
                  <B.Card.Body>
                    <B.Card.Title>{article.title}</B.Card.Title>
                    <B.Card.Text>{article.description}</B.Card.Text>
                  </B.Card.Body>
                  <B.ListGroup className="list-group-flush">
                    <B.ListGroup.Item>{article.author}</B.ListGroup.Item>
                    <B.ListGroup.Item>
                      {format(new Date(article.publishedAt), 'd MMM y, H:m')}
                    </B.ListGroup.Item>
                  </B.ListGroup>
                  <B.Button href={article.url}>Detail</B.Button>
                </B.Card>
              ))}
              {data.length < 1 && (
                <p style={{textAlign: 'center', fontSize: '50px'}}>Loading..</p>
              )}
            </B.Row>

            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </B.Container>
        </B.Card.Body>
        <B.Card.Footer className="bg-dark text-muted center">
          © 2023
        </B.Card.Footer>
      </B.Card>
         
    </div>
  );
}
