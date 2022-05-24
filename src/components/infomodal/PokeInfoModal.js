import React from 'react';
import '../styles/PokeInfoModal.css';
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { setInfoModalClosed, clearInfoModal } from './infoModalSlice';
import { selectInfoModal } from './infoModalSlice';
import { useSelector, useDispatch } from 'react-redux';

export const PokeInfoModal = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(selectInfoModal);
  
  const pokemonStats = data.stats.map((stat, index) => <div key={index} className="stat">
    <p>{stat.stat.name}</p>
    <span>
      <ProgressBar striped variant="success" now={stat.base_stat} />
    </span>
    <p id='effort'>Effort: {stat.effort}</p>
  </div>);
  const pokemonAbilities = data.abilities.map((ability, index) => 
    <div key={index}>
      <Badge className={ability.ability.name}>
        {ability.ability.name}
      </Badge>
    </div>
  );
  const pokemonTypes = data.types.map((type, index) => 
    <div key={index}>
      <Badge className={type.type.name}>
        {type.type.name}
      </Badge>
    </div>
  );
  const modalDiv = {
    pokemonStats: pokemonStats,
    pokemonAbilities: pokemonAbilities,
    pokemonTypes: pokemonTypes
  };

  // console.log(data);
  const handleClose = () => {
    //close modal    
    //dispatch action to remove data from infomodal slice
    dispatch(clearInfoModal());
    dispatch(setInfoModalClosed());

  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pokemon Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
        <Row>
          <Col id='col-1'>
            <img src={data.photo} alt={data.name}/>
            <h2>{data.name}</h2>
            <h4>#00{data.id}</h4>
            <h5>Types</h5>
            {modalDiv.pokemonTypes}
            <div className='abilities'>
              <h5>Abilities</h5>
                {modalDiv.pokemonAbilities}
            </div>
          </Col>
          <Col id='col-2'>
              <div className='stats'>
                <h5>Base Stats</h5>
                {modalDiv.pokemonStats}
              </div>
          </Col>
        </Row>
        </Container>
        
      </Modal.Body>
      <Modal.Footer>
        <button
        onClick={handleClose}
        >Close</button>
      </Modal.Footer>
    </Modal>
  )
}
