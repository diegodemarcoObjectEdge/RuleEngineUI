import { CsvFileIcon } from "../../icons";

interface CsvFileCardProps {
  name: string;
  size: number;
  progress: number;
}
export const CsvFileCard: React.FC<CsvFileCardProps> = ({
  name,
  size,
  progress = 0,
}) => {
  return (
    <div className="border-secondary flex items-start gap-1 self-stretch rounded-xl border border-solid p-4">
      <div className="flex flex-1 items-start gap-3">
        <CsvFileIcon className="m-3" />
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col items-start self-stretch">
            <p className="font-[500]">{name}</p>
            <p>{size / 1024} KB</p>
          </div>
          <div className="flex items-center gap-3 self-stretch">
            <div className="h-2 flex-1 rounded-md bg-[#EAECF0]">
              <div className={`h-2 w-[${progress}%] rounded-md bg-[#013CB2]`} />
            </div>
            {progress} %
          </div>
        </div>
      </div>
    </div>
  );
};
