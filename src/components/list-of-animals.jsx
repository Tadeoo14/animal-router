import  { Link } from 'wouter';
import { ANIMALS } from '../../data';

export default function ListOfAnimals() {
  return (
    <div>
        <Link to="/" >Volver a la pagina principal</Link>
        <h2>List Of Animals:</h2>
        <ul>{ANIMALS.map(a =>(
            <li key={a.id}>
                <Link to={`/animals/${a.id}`}>{a.name}</Link>
            </li>
        ))}</ul>
    </div>
  )
}
