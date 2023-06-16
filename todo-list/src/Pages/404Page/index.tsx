const ErrorPage = () => {
  return (
    <div className="bg-gray-900 pt-5 flex flex-col min-h-screen pb-5 flex flex-col justify-center items-center">
      <div style={{ flexDirection: 'column' }}>
        <h1 className='text-5xl font-bold text-white mb-4 text-center'>404</h1>
        <h1 className='text-5xl font-bold text-white mb-4 text-center'>Page Not Found!</h1>
      </div>
      <a href="/" className="mt-10 inline-block py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">Go back to Home</a>
    </div>
  );
};
export default ErrorPage;