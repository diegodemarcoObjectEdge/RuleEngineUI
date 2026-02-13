export const MapSkeleton: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-[#EAECF0] bg-white shadow-xs">
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-xl font-semibold text-[#101828]">
          CaelusIQ System Coverage
        </h2>
        <hr className="mt-4 mb-4 border-t border-[#EAECF0]" />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

