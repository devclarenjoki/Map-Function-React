import logo from './logo.svg';
import './App.css';
import PersonData from './PersonData'
import Person from './Person'

function App() {
  const PersonComponents =   PersonData.map(function(details){
    return (
        <Person key= {details.id} person={details}/>
    )
})
  return (
    <div className ="App">
      {PersonComponents}
    </div>
  );
}

export default App;
