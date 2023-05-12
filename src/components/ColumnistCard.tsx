import "../assets/styles/columnist-card.scss"

export interface ColCardProps {
  src: string;
  columnistName: string;
  columnTitle: string;
  columnUrl: string;
}

export const ColumnistCard = ({src, columnistName, columnTitle, columnUrl}: ColCardProps) => {
  return <div className="card-container">
    <div className="identification-card">
      <a href={columnUrl}><img src={src} alt={`Colunista ${columnistName}`} /></a>
      <a href={columnUrl}><h5>{columnistName}</h5></a>
    </div>
    <p className="column-name">
      <a href={columnUrl}>{columnTitle}</a>
    </p>
  </div>
}
