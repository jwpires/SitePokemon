import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { api } from '../functions/api';
import { HabilidadesPokemon } from '../types/interfacePokemons';
import '../styles/style.css'

type Props = {
  id: number,
  nome: string;
}

function PokeInfo(prop: Props) {

  const [show, setShow] = useState(false);
  const [habilidadePokemon, setHabilidadePokemon] = useState<HabilidadesPokemon>({});
  // var habilidadePokemon: HabilidadesPokemon = {};

  const exibirHabilitadePokemon = async (id: number) => {

    try {
      const endpoint = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
      const dadosPokemon = await endpoint.json();
      const arrFlavor = dadosPokemon.flavor_text_entries.filter(e => e.language.name === 'en')
      .map((e) => e.flavor_text.replace('/[\n\f\r\t]/g', ' '))

      const arrEgg = dadosPokemon.egg_groups.filter(e => e.name !== '');
      
      const habilidade: HabilidadesPokemon = {
        cor: dadosPokemon.color.name,
        grupoPokemon: arrEgg,
        descricaoPokemon: arrFlavor,
        taxaCrescimento: dadosPokemon.growth_rate.name,
        tipoDeHabitate: dadosPokemon.habitat.name,
        forma: dadosPokemon.shape.name
      }
      setHabilidadePokemon(habilidade);
      // habilidadePokemon = habilidade;
      console.log(habilidadePokemon);
      // return habilidade;
    } catch (error) {
      console.log(error);
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    exibirHabilitadePokemon(prop.id);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} id='buttonInfoPokemon'>
        TESTE
      </Button>

      <Modal className='modal-container'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      // style={{ 
      //   position: 'fixed', 
      //   top: 0, 
      //   left: 0, 
      //   width: '100%', 
      //   height: '100%',
      //   backgroundColor: 'rgba(0, 0, 0, .5)'
      // }}
      >
        <Modal.Header closeButton className='modalHeader'>
          <Modal.Title>Pokemon Abilities </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-dialog'>
          <p>Color: {habilidadePokemon.cor}</p>
          <p>Description: {habilidadePokemon.descricaoPokemon?.map( (e, index) => <li key={index}> {e.toString()} </li>)}</p>
          <p>Form: {habilidadePokemon.forma}</p>
          <p>Group Description: {habilidadePokemon.grupoPokemon?.map( (e, index) => <li key={index}> {e.toString()} </li>)}</p>
          <p>Growth Rate: {habilidadePokemon.taxaCrescimento}</p>
          <p>Skill Type: {habilidadePokemon.tipoDeHabitate}</p>
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PokeInfo;