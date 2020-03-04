import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Styles/Main.css'
import Header from './Components/Header/Header'
import FormSection from './Components/FormSection/FormSection'
import Copyright from './Components/Copyright/Copyright'
import { Container, Row } from 'react-bootstrap'
import TermsConditions from './Components/TermsConditions/TermsConditions'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Container>
        <Row>
          <section id="main_content"> */}
            <FormSection />
          {/* </section>
        </Row>
      </Container> */}
      <Footer />
      <TermsConditions />
    </div>
  );
}

export default App;
