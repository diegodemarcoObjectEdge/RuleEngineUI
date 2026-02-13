interface BooleanLabelProps {
  value: boolean;
  trueLabel?: string;
  falseLabel?: string;
  falseClassName?: string;
}

export const BooleanLabel: React.FC<BooleanLabelProps> = ({
  value,
  trueLabel = "Yes",
  falseLabel = "No",
  falseClassName = "text-gray-300",
}) => {
  return (
    <span className={value ? "" : falseClassName}>
      {value ? trueLabel : falseLabel}
    </span>
  );
};
