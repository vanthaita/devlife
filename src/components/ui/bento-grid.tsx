import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[auto] grid-cols-1 md:grid-cols-3 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl transition duration-200 bg-white flex flex-col space-y-4",
        className
      )}
    >
      {header}
     
      <div className="flex-1">
        <div className="font-sans text-2xl font-semibold text-neutral-800 mb-1 hover:underline cursor-pointer">
          {title}
        </div>
        <div className="font-sans text-xs text-neutral-500">
          {description}
        </div>
      </div>
    </div>
  );
};