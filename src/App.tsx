import AsideContent from './components/AsideContent';
import Carousel from './components/Carousel';
import ColumnistsSection from './components/ColumistsSection'
import Header from './components/Header'
import NewsArticle from './components/NewsArticle';
import SideNews from './components/SideNews';
import Slide from './components/Slide';

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
      title: "TSE cassou Deltan com base em precedente de propaganda irregular e disputa na magistratura",
      link: "https://www1.folha.uol.com.br/poder/2023/05/tse-cassou-deltan-com-base-em-precedente-de-propaganda-irregular-e-disputa-na-magistratura.shtml"
    },
    {
      title: "Ministro do TSE algoz de Deltan Dallagnol foi alvo de delação na Lava Jato",
      link: "https://www1.folha.uol.com.br/poder/2023/05/ministro-do-tse-algoz-de-deltan-foi-alvo-de-delacao-na-lava-jato.shtml"
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
      summary: 'Isabella Faria conversa com Anna Virginia Balloussier no programa, ao vivo, às 18h',
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
              headlineKicker='FOLHAJUS'
              kickerLink='https://www1.folha.uol.com.br/poder/folhajus/'
              headlineSize='h1'
              href='https://www1.folha.uol.com.br/poder/2023/05/moro-culpa-lula-e-pt-por-cassacao-de-deltan-e-diz-que-tse-leva-inseguranca-ao-congresso.shtml'
              headline='Moro culpa Lula e PT por cassação de Deltan e diz que TSE leva insegurança ao Congresso'
              subheadline='Senador e ex-ministro de Bolsonaro afirma que tribunal fez interpretação incorreta da Lei da Ficha Limpa'
              relateds={relateds}
            />
            <div className='news-and-slider-container'>
                <div className='slider'>
                  <Carousel>
                    <Slide
                      imgSrc="https://f.i.uol.com.br/fotografia/2021/11/13/1636812157618fc57d2cbbe_1636812157_3x2_rt.jpg"
                      alt="Peixe leão"
                      title="Ameaça natural"
                      summary="Presença do peixe-leão é registrada na reserva biológica Atol das Rocas, ligada ao Rio Grande do Norte, e ameaça ambiente marinho - Yang Guanyu"
                      href="https://www1.folha.uol.com.br/ambiente/2023/05/peixe-leao-chega-ao-atol-das-rocas-e-ameaca-ambiente-marinho.shtml"
                    />
                    <Slide
                      imgSrc="https://f.i.uol.com.br/fotografia/2023/05/19/16845203486467bd9c792b4_1684520348_3x2_xl.jpg"
                      alt="Nova casa de Beyoncé e Jay-Z"
                      title="LAR DE R$ 1 BILHÃO"
                      summary="Beyoncé e Jay-Z compram segunda casa mais cara dos Estados Unidos, na Califórnia; veja fotos - Divulgação"
                      href="https://www1.folha.uol.com.br/mercado/2023/05/placas-solares-em-favela-geram-economia-e-renda-no-rio.shtml"
                    />
                    <Slide
                      imgSrc="https://f.i.uol.com.br/fotografia/2023/05/19/1684505139646782336cba6_1684505139_3x2_xl.jpg"
                      alt="Imagem em inteligência artificial para alterar roupa"
                      title="(NÃO TÃO) INTELIGENTE"
                      summary="Inteligência artificial muda roupa e cenário em foto para o LinkedIn, mas tem bugs; repórter ficou com três mãos na 1ª tentativa, e na outra, paletó marinho ficou cinza - Marcelo Chello/Folhapress, com intervenção no Canva"
                      href="https://www1.folha.uol.com.br/mercado/2023/05/placas-solares-em-favela-geram-economia-e-renda-no-rio.shtml"
                    />
                    <Slide
                      imgSrc="https://f.i.uol.com.br/fotografia/2023/05/10/1683766223645c3bcf78b18_1683766223_3x2_rt.jpg"
                      alt="Energia Solar em Favelas"
                      title="ENERGIA SOLAR EM FAVELAS"
                      summary="Eduardo Avila, economista, dirige cooperativa que promove a instalação de painéis e o desenvolvimento sustentável nas comunidades - Eduardo Anizelli/Folhapress"
                      href="https://www1.folha.uol.com.br/mercado/2023/05/placas-solares-em-favela-geram-economia-e-renda-no-rio.shtml"
                    />
                  </Carousel>
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
