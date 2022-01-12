import './App.css';

function App() {
  return (
    <form method='GET' action='http://localhost:3001/'>
      <label>Nombre</label>
      <input type='text' id='name' placeholder='Nombre'/>
      <input type={'submit'} value='Enviar' />
    </form>
  );
}

export default App;
