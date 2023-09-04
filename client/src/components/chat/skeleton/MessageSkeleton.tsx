function MessageSkeleton() {
  return (
    <div className="animate-pulse items-center space-x-4 flex justify-center w-5/6  relative  ">
      <div className="rounded-md bg-slate-700 h-10 w-10 absolute top-0 left-0"></div>
      <div className="flex-1 space-y-4 py-1 pl-12">
        <div className="flex w-2/6 gap-x-6">
          <div className="h-3 bg-slate-700 rounded flex-1 space-y-4 py-1 w-8"></div>
          <div className="h-3 bg-slate-700 rounded flex-1 space-y-4 py-1 w-8"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
}

export default MessageSkeleton;
