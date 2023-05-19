import AsideContent from './components/AsideContent';
import ColumnistsSection from './components/ColumistsSection'
import Header from './components/Header'
import NewsArticle from './components/NewsArticle';
import SideNews from './components/SideNews';

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
  ];

  const asideContentList = [
    {
      headlineKicker: 'AUTONOMIA DO BC',
      headlineLink: '',
      headline: 'Campos Neto e Pacheco participam de seminário',
      summary: 'Evento, que acontece na segunda (22) em SP,  será transmitido ao vivo, às 10h',
      href: 'https://www1.folha.uol.com.br/seminariosfolha/2023/05/campos-neto-e-rodrigo-pacheco-participam-de-seminario-da-folha-sobre-autonomia-do-banco-central.shtml',
      imgSrc: 'https://f.i.uol.com.br/fotografia/2023/05/19/168449149064674ce229217_1684491490_3x2_xs.jpg',
      alt: 'Roberto Campos Neto e Rodrigo Pacheco participam de evento do LIDE em Londres',
    },
    {
      headlineKicker: 'TV Folha',
      headlineLink: 'https://www1.folha.uol.com.br/tv/',
      headline: 'Como traficantes evangélicos atuam no Rio? TV explica',
      summary: 'Isabella Faria conversa com Anna Virginia Balloussier no programa, ao vivo, às 18j',
      href: 'https://www1.folha.uol.com.br/tv/2023/05/como-traficantes-evangelicos-atuam-no-rio-tv-folha-explica.shtml',
      imgSrc: 'https://f.i.uol.com.br/fotografia/2023/03/13/1678704050640efdb225345_1678704050_3x2_xs.jpg',
      alt: 'Thumbnail para agregador de podcasts LIVE TV FOLHA',
    },
    {
      headlineKicker: 'Mês da mulher',
      headlineLink: 'https://www1.folha.uol.com.br/mulher/',
      headline: 'Mulheres têm assinatura grátis da Folha por 2 meses',
      summary: '',
      href: 'https://www1.folha.uol.com.br/mercado/2023/03/folha-oferece-assinatura-digital-gratis-por-dois-meses-para-mulheres.shtml',
      imgSrc: 'https://f.i.uol.com.br/fotografia/2023/05/15/168417131864626a367cfeb_1684171318_3x2_xs.jpg',
      alt: 'Montagem  Campanha de dia das mães da Folha',
    }
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
            <div className='news-and-slider-container'>
                <div className='slider'>

                </div>
                <SideNews />
            </div>
          </section>
          <aside className='aside-content'>
            {asideContentList.map((asideContent, index) => {
              return (
                <AsideContent
                  key={index}
                  headlineKicker={asideContent.headlineKicker}
                  headlineLink={asideContent.headlineLink}
                  headline={asideContent.headline}
                  summary={asideContent.summary}
                  href={asideContent.href}
                  imgSrc={asideContent.imgSrc}
                  alt={asideContent.alt}
                />
              )
            })}
          </aside>
        </div>
      </main>
    </>
  )
}

export default App
