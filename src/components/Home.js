import React  from 'react';
import {Row, Col,  Badge,Jumbotron, Container, Table} from 'reactstrap';
import ModalExample from './ModalExample';

   
class Home extends React.Component{
    
    render(){
        
        return(
            <Container>
                 <Row>
                   <Col sm="3">
                   </Col>
                   <Col sm="6">
                     <Jumbotron  > 
                     <Table>
                         <tr><td>
                         <h1>Welcome <Badge color="secondary">Tambola</Badge></h1>
                         </td>
                         </tr>
                        <tr>
                        <td>
                        Please Login or Signup to play.
                        </td>
                        </tr>
                        <tr><td>
                             <ModalExample buttonLabel="Login" className="Login"> </ModalExample>
                             </td>
                        </tr>
                        <tr><td>
                            <ModalExample buttonLabel="Sign Up" className="Signup"> </ModalExample>
                            </td>
                        </tr>
                    </Table>
                     </Jumbotron>
                   </Col>
                   </Row>
            </Container>
            
        );
    }
}
export default Home;