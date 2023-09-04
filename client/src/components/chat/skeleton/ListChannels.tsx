function ListChannelsSkeleton() {
  return (
    <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto ">
      <div className="animate-pulse items-center space-x-4 flex justify-center">
        <div className="rounded-md bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-3 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default ListChannelsSkeleton;
