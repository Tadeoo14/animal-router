import { useState } from 'react'
import { Router, Route, Link, Switch } from 'wouter'
import './App.css'
import ListOfAnimals from './components/list-of-animals'
import AnimalDetail from './components/animal-detail'

function App() {
  
  return (
    <Switch>
      <Route path="/">
        <h1>Welcome!</h1>
        <Link to="/animals">Go to animals</Link >
      </Route>
      <Route path="/animals" component={ListOfAnimals}/>
      <Route path="/animals/:id">
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
