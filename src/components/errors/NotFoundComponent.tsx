const NotFoundComponent: React.FC = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow-md border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            404 — Not Found
          </h1>
  
          <p className="text-gray-500 mb-6 max-w-xs">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>
  
          <a
            href="/"
            className="px-5 py-2 rounded-xl hover:scale-96 bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  };
  
  export default NotFoundComponent;
  