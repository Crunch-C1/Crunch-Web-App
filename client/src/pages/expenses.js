import React, { Component} from 'react'
import { Container } from 'reactstrap';
import "../css/past.css";
import Sidebar from "../components/sidebar";
import logo from "../images/Crunch_logo_colored.png";
import Grid from "@material-ui/core/Grid";
import Table from 'react-bootstrap/Table'

export default class restaurants extends Component {
render()
{
    return(
        <div className="user-dashboard-past">
            <Sidebar/>
            <Container 
                className="user-dashboard-past-pages" 
                fluid={true}/>
            <Container
                className="user-dashboard-past-content"
                fluid={true}
            >
                     <Table striped bordered hover size="sm">
                
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Restaurant</th>
                    <th>Amount Paid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mcdonalds</td>
                    <td>$10000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Chick-fil-a</td>
                    <td>$800</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Wendys</td>
                    <td>$45</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Five Guys</td>
                    <td>$23</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Panera</td>
                    <td>$12</td>
                  </tr>
                </tbody>
              </Table>
            </Container>

        </div>
    )
}
}