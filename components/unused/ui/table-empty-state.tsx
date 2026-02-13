interface TableEmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  ctas?: React.ReactNode[];
}

export const TableEmptyState: React.FC<TableEmptyStateProps> = ({
  title,
  description,
  icon,
  ctas = [],
}) => {
  return (
    <div className="flex h-[718px] w-full flex-col items-center justify-center gap-6 place-self-center whitespace-break-spaces">
      <div className="flex flex-col items-center gap-4">
        {icon}
        <div className="flex w-full max-w-[352px] flex-col items-center gap-1">
          <div className="text-primary text-center text-base font-semibold">
            {title}
          </div>
          <div className="text-tertiary text-center text-sm font-normal">
            {description}
          </div>
        </div>
      </div>
      {ctas.length > 0 && (
        <div className="inline-flex items-start gap-3">{ctas}</div>
      )}
    </div>
  );
};

