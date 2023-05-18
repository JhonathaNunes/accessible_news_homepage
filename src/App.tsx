import ColumnistsSection from './components/ColumistsSection'
import Header from './components/Header'
import NewsArticle from './components/NewsArticle';

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

  const relateds = [
    {
      title: "PEC da Anistia se choca com decisões de STF e TSE sobre inclusão de mulheres e negros",
      link: "https://www1.folha.uol.com.br/poder/2023/05/ministerio-da-igualdade-racial-chama-pec-da-anistia-de-retrocesso-inadmissivel.shtml"
    },
    {
      title: "PEC da Anistia se choca com decisões de STF e TSE sobre inclusão de mulheres e negros",
      link: "https://www1.folha.uol.com.br/poder/2023/05/ministerio-da-igualdade-racial-chama-pec-da-anistia-de-retrocesso-inadmissivel.shtml"
    },
  ]

  return (
    <>
      <Header />
      <main>
        <ColumnistsSection columnistCards={columns} />
        <div className='news-block'>
          <section className='news-content'>
            <NewsArticle
              headlineKicker='PEC DA ANISTIA'
              kickerLink='https://www1.folha.uol.com.br/poder/folhajus/'
              headlineSize='h1'
              href='https://www1.folha.uol.com.br/poder/2023/05/pgr-sob-lula-apoia-investigacao-contra-bolsonaro-que-antes-considerava-ilegal-e-nula.shtml'
              headline='PGR sob Lula apoia investigação contra Bolsonaro que antes considerava ilegal e nula'
              subheadline='Procuradoria chefiada por Augusto Aras se manifestou por arquivamento de apuração várias vezes ao longo de 2022'
              relateds={relateds}
              />
          </section>
          <aside className='aside-content'>

          </aside>
        </div>
        
        
      </main>
      
    </>
  )
}

export default App
