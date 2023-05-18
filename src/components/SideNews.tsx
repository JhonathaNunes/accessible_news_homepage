import NewsArticle from "./NewsArticle";

const SideNews = () => {
  return (
    <div className='side-news'>
      <NewsArticle
        headlineKicker='PRESO HÁ 15 DIAS'
        kickerLink=''
        headlineSize='h2'
        href='https://www1.folha.uol.com.br/poder/2023/05/mauro-cid-chega-a-pf-para-depor-sobre-fraude-no-cartao-de-vacinacao-de-bolsonaro.shtml'
        headline='Mauro Cid fica em silêncio em depoimento na PF sobre fraude em cartão de Bolsonaro'
        relateds={[
          {
            title: "Peço a Deus que Cid não tenha errado, diz Bolsonaro sobre silêncio de aliado",
            link: "https://www1.folha.uol.com.br/poder/2023/05/peco-a-deus-que-cid-nao-tenha-errado-diz-bolsonaro-sobre-silencio-de-aliado.shtml"}
        ]}
      />
      <NewsArticle
        headlineKicker='PAINEL'
        kickerLink='https://www1.folha.uol.com.br/colunas/painel/'
        headlineSize='h3'
        href='https://www1.folha.uol.com.br/colunas/painel/2023/05/ministro-de-defende-que-nao-se-impeca-estudo-sobre-petroleo-na-foz-do-amazonas.shtml'
        headline='Ministro defende que não se impeça estudo sobre petróleo na foz do Amazonas'
        subheadline='Ibama negou ontem pedido da Petrobras para fazer exploração na região'
        relateds={[
          {
            title: 'Petrobras diz que vai recorrer',
            link: 'https://www1.folha.uol.com.br/ambiente/2023/05/petrobras-diz-que-vai-recorrer-apos-negativa-do-ibama-para-projeto-de-petroleo-na-foz-do-amazonas.shtml'
          }
        ]}
      />
      <NewsArticle
        headlineKicker='PEC DA ANISTIA'
        kickerLink='https://www1.folha.uol.com.br/poder/folhajus/'
        headlineSize='h3'
        href='https://www1.folha.uol.com.br/poder/2023/05/pgr-sob-lula-apoia-investigacao-contra-bolsonaro-que-antes-considerava-ilegal-e-nula.shtml'
        headline='PGR sob Lula apoia investigação contra Bolsonaro que antes considerava ilegal e nula'
        subheadline='Procuradoria chefiada por Augusto Aras se manifestou por arquivamento de apuração várias vezes ao longo de 2022'
      />
    </div>
  )
}

export default SideNews;