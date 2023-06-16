import TodoCard from "../../Components/HomePage/TodoCard";

function HomePage() {
  return (
    <div className="bg-white-900 pt-5 pb-5 min-h-screen flex flex-col justify-center items-center">
      <TodoCard />
      <a href="/blog" className="mt-10 inline-block py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">Wanna see the Blog!</a>
    </div>
  );
}

export default HomePage;