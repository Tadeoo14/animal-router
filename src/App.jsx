import { Router, Route, Link, Switch } from 'wouter'
import './App.css'
import ListOfAnimals from './components/list-of-animals'
import AnimalDetail from './components/animal-detail'
import { lazy, Suspense } from 'react'

//lazy load components
const AnimalDetailPage = lazy(() => import('./components/animal-detail'))
const ListOfAnimalsPage = lazy(() => import('./components/list-of-animals'))

function App() {
  
  return (
    <Switch>


      <Route path="/">
        <h1>Welcome!</h1>
        <Link to="/animals">Go to animals</Link >
      </Route>
        <Route path="/animals">
          <Suspense fallback={<h1>Cargando lista...</h1>}>
              <ListOfAnimalsPage/>
          </Suspense>
        </Route>
      <Route path="/animals/:id" component={AnimalDetailPage}>
        {(params) => <AnimalDetail animalId={params.id}/>}
      </Route>


      <Route path='/*'>
        <h1>404 NOT FOUND</h1>
        <Link to='/'>Volver</Link>
      </Route>
    </Switch>
  )
}

export default App
