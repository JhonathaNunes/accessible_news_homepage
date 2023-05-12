import {
  ColumnistCard,
  ColCardProps
} from "./ColumnistCard";

import "../assets/styles/columnists-section.scss"

interface ColumnistsSectionProps {
  columnistCards: ColCardProps[];
}

const ColumnistsSection = ({columnistCards}: ColumnistsSectionProps) => {
  return (
    <section className="columns-section">
        { columnistCards.map((item, index) => (
          <ColumnistCard
            key={index}
            src={item.src}
            columnistName={item.columnistName}
            columnTitle={item.columnTitle}
            columnUrl={item.columnUrl}
          />
        ))}
    </section>
  );
}

export default ColumnistsSection;