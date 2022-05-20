import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'
import pikachuLogo from '../resources/pikachu.png'
const Loading = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={style.textCenter}>
        <img src={pikachuLogo} alt='pikachu'style={style.logo}/>
        <h2 >Welcome to Pokedex!</h2>
        <p>Search and see information about any Pokemon</p>
        
        <div style={style.loading}>
            <h5>Loading content, please wait...</h5>
            <div>
                <Spinner animation="border" variant="secondary" />
            </div>
        </div>                 

      </Modal.Body>
    </Modal>
  )
}
const style = {
    textCenter: {
        textAlign: "center"
    },
    loading: {
        paddingTop: "10%"
    },
    logo: {
        height: "70px",
        width: "70px"
    }
}
export default Loading;