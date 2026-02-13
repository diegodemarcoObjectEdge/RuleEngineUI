import {
  TableBody,
  TableCell,
  TableRow,
} from "../design-system/table";
import { Skeleton } from "./skeleton";

export const TableSkeleton: React.FC = () => {
  return (
    <TableBody>
      {[...Array(8)].map((_, rowIndex) => (
        <TableRow key={rowIndex} className="border-b border-gray-200">
          <TableCell className="px-6 py-4 align-middle whitespace-nowrap">
            <div className="flex min-w-52 items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="h-4 w-32 rounded" />
            </div>
          </TableCell>
          <TableCell className="px-6 py-4 align-middle whitespace-nowrap">
            <Skeleton className="h-4 w-22 rounded" />
          </TableCell>
          <TableCell className="px-6 py-4 align-middle whitespace-nowrap">
            <Skeleton className="h-4 w-10 rounded" />
          </TableCell>
          <TableCell className="px-6 py-4 align-middle whitespace-nowrap">
            <Skeleton className="h-4 w-16 rounded" />
          </TableCell>
          <TableCell className="px-6 py-4 align-middle whitespace-nowrap">
            <Skeleton className="h-4 w-6 rounded" />
          </TableCell>
          <TableCell className="px-4 py-4 align-middle whitespace-nowrap">
            <Skeleton className="h-10 w-10 rounded-md" />
          </TableCell>
          <TableCell className="px-4 py-4 align-middle whitespace-nowrap">
            <Skeleton className="h-10 w-10 rounded-md" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
