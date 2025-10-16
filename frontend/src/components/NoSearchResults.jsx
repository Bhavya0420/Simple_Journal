const NoSearchResults = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <h3 className="text-2xl font-bold">No matching notes found</h3>
      <p className="text-base-content/70">
        Try adjusting your search or filters to find the note you are looking for.
      </p>
    </div>
  );
};

export default NoSearchResults;
