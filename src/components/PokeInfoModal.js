import React, {useEffect, useState} from 'react';
import './styles/PokeInfoModal.css';
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export const PokeInfoModal = (props) => {
  const typeColor = {
    normal: 'gray',
    fire: 'orange',
    water: 'mediumblue',
    grass: 'forestgreen',
    electric: 'gold',
    ice: 'paleturquoise',
    fighting: 'darkred',
    poison: 'darkmagenta',
    dColor: 'black'
  }
  const [data, setData] = useState(props.pokemondata);
  const [modalDiv, setModalDiv] = useState({});
  useEffect(() => {

  setData(props.pokemondata);

  console.log(data);

  const pokemonStats = data.stats.map((stat, index) => <div key={index} className="stat">
    <p>{stat.stat.name}</p>
    <span>
      <ProgressBar striped variant="success" now={stat.base_stat} />
    </span>
    <p id='effort'>Effort: {stat.effort}</p>
  </div>)
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
  setModalDiv({
    pokemonStats: pokemonStats,
    pokemonAbilities: pokemonAbilities,
    pokemonTypes: pokemonTypes
  })
  },[]);

  // console.log(data);

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
            <img src={data.photo}/>
            <h2>{data['formatted_name']}</h2>
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
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}
