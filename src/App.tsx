import './App.css'
import Header from './components/Header'
import ColumnistCard from './components/ColumnistCard'

function App() {
  return (
    <>
      <Header />
      <ColumnistCard
        src={'https://f.i.uol.com.br/fotografia/2018/02/02/15175771955a7463ebced4d_1517577195_1x1_th.jpg'}
        columnistName={'Joel Pinheiro da Fonseca'}
        columnTitle={'Por que Lula segue batendo cabeça no Congresso?'}
        columnUrl={''}
      />
    </>
  )
}

export default App
