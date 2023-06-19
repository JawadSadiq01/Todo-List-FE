import { Typography, Button } from "antd";

const ErrorPage = () => {
  return (
    <div className="bg-gray-900 pt-5 flex flex-col min-h-screen pb-5 flex flex-col justify-center items-center">
      
      <Typography className="text-4xl font-bold text-white mb-4 text-center">
        404, page not found!
      </Typography>

      <Button
        href="/"
        type="link"
        className="flex items-center p-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700"
      >
        Go back to Home
      </Button>

    </div>
  );
};

export default ErrorPage;