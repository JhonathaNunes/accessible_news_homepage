import './App.css'
import ColumnistsSection from './components/ColumistsSection'
import Header from './components/Header'

function App() {
  const columns = [
    {
      src: 'https://f.i.uol.com.br/fotografia/2018/02/02/15175771955a7463ebced4d_1517577195_1x1_th.jpg',
      columnistName: 'Joel Pinheiro da Fonseca',
      columnTitle: 'Por que Lula segue batendo cabeça no Congresso?',
      columnUrl: '',
    },
    {
      src: 'https://f.i.uol.com.br/fotografia/2018/02/02/15175771955a7463ebced4d_1517577195_1x1_th.jpg',
      columnistName: 'Joel Pinheiro da Fonseca',
      columnTitle: 'Por que Lula segue batendo cabeça no Congresso?',
      columnUrl: '',
    },
    {
      src: 'https://f.i.uol.com.br/fotografia/2018/02/02/15175771955a7463ebced4d_1517577195_1x1_th.jpg',
      columnistName: 'Joel Pinheiro da Fonseca',
      columnTitle: 'Por que Lula segue batendo cabeça no Congresso?',
      columnUrl: '',
    },
    {
      src: 'https://f.i.uol.com.br/fotografia/2018/02/02/15175771955a7463ebced4d_1517577195_1x1_th.jpg',
      columnistName: 'Joel Pinheiro da Fonseca',
      columnTitle: 'Por que Lula segue batendo cabeça no Congresso?',
      columnUrl: '',
    },
  ];

  return (
    <>
      <Header />
      <ColumnistsSection columnistCards={columns} />
    </>
  )
}

export default App
