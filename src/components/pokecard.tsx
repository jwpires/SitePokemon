import Figure from 'react-bootstrap/Figure';
// import { PokeOffCanvas } from './pokeOffCanvas';
import '../styles/style.css'
import PokeInfo from './pokeInfo';

type Props = {
    id: number,
    pokeNome: string,
    pokeImagem: string
    cardWidth: number,
    cardHeight: number,
}

export const PokeCard = (props: Props) => {
  return (
    <Figure >
      <Figure.Image
        width={props.cardWidth}
        height={props.cardHeight}
        alt={props.cardWidth.toString()+"X"+props.cardHeight.toString()}
        src={props.pokeImagem}
      />
      <Figure.Caption>
        {/* <h1 className="nomePokemon">{props.pokeNome}</h1> */}
        
        <PokeInfo id={props.id} nome={props.pokeNome}></PokeInfo> 
        {/* colocar o botão no card aqui, e remover o pokeInfo */}
        {/* Modal deve ir para tela HOME! */}
      </Figure.Caption>
      
    </Figure>
  );
}

