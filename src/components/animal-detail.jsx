import { ANIMALS } from "../../data"
import { Link, useParams } from "wouter"

export default function AnimalDetail() {
    const {id} = useParams();
    const animal = ANIMALS.find(a => a.id === Number(id))
    if(!animal) {
       return(
              <div>
                <h2>Animal not found</h2>
                <Link to= "/animals">Back to animals</Link>
              </div>
       )
    } 
    return (
        <div>
            <h2>{animal?.name}</h2>
            <p>{animal?.description}</p>
        </div>
    )
}
