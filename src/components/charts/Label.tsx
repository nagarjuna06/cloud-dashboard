type Props = {
  label?: string;
  color?: string;
};

const Label = ({ color, label }: Props) => {
  return (
    <div className="flex gap-4 items-center text-sm">
      <div className="w-3 h-3 rounded-sm" style={{ background: color }}></div>
      <p>{label}</p>
    </div>
  );
};

export default Label;
