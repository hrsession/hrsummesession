import type { Workshop } from "../types";

interface WorkshopDetailsProps {
  workshop: Workshop;
}

type DotKey = "dot-1" | "dot-2" | "dot-3";

export const WorkshopDetails: React.FC<WorkshopDetailsProps> = ({
  workshop,
}) => {
  return (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        {([1, 2, 3] as const).map((num) => {
          const dotKey = `dot-${num}` as DotKey;
          const content = workshop[dotKey];
          return content && <li key={dotKey}>{content}</li>;
        })}
      </ul>
    </div>
  );
};
