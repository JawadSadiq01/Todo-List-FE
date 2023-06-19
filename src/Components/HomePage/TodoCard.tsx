import { useState, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { Modal, Typography, Input } from 'antd';
import TodoSubHeader from "./TodoSubHeader";
import { TodoList } from "../../store/TodoList";
import { SendOutlined, DeleteOutlined, EditOutlined, CheckCircleFilled } from '@ant-design/icons';
import '../../App.css'
interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoCard = () => {
  const [todos, setTodos] = useRecoilState(TodoList);
  const [inputText, setInputText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<ITodo | undefined>();
  const completedTodos = todos.filter(todo => todo.completed).length;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: ITodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };


  const handleToggleComplete = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleEditInputChange = (e: any) => {
    setCurrentTodo({
      id: currentTodo?.id || 1,
      text: e.target.value,
      completed: currentTodo?.completed || false,
    });
  };

  const handleOk = () => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === currentTodo?.id) {
        return { ...todo, text: currentTodo.text };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentTodo(undefined);
  };

  return (
    <>
      <Modal
        title="Edit your Todo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="color-white custom-modal"
      >
        <Input
          value={currentTodo?.text}
          placeholder="Update task"
          onChange={handleEditInputChange}
          className="mt-5 mb-5 w-full bg-gray-700 text-white placeholder-gray-400 border-gray-400 border-2 p-2 rounded-l-md rounded-r-md focus:outline-none"
        />
      </Modal>

      <div className="max-w-lg w-full mx-4 p-4 bg-gray-800 rounded-lg shadow-lg">
        
        <Typography className="text-2xl font-bold text-white mb-4 text-center">
          TODO LIST
        </Typography>

        <TodoSubHeader heading="ADD ITEM" />

        <div className="flex mb-4">
          <Input
            value={inputText}
            placeholder="Add a new task"
            onChange={handleInputChange}
            className="flex-grow w-full text-lg bg-gray-700 text-white placeholder-gray-400 border-gray-400 border-2 p-2 rounded-l-md focus:outline-none"
          />
          
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-5 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            <SendOutlined />
          </button>

        </div>

        <TodoSubHeader heading="TODO" />

        <ul className="space-y-2">
          {todos.map(todo => (
            !todo.completed &&
            <>
              <li
                key={todo.id}
                className={`flex items-center bg-gray-700 p-3 rounded-md ${todo.completed ? 'text-gray-500 line-through' : 'text-white'}`}
              >
                <Typography.Text className="text-lg flex-grow text-white">
                  {todo.text}
                </Typography.Text>

                <button
                  onClick={() => handleToggleComplete(todo.id)}
                  className="text-green-500 text-2xl hover:text-green-600 ml-2 focus:outline-none"
                >
                  <CheckCircleFilled />
                </button>

                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-500 text-2xl hover:text-red-600 ml-2 focus:outline-none"
                >
                  <DeleteOutlined />
                </button>

                <button
                  onClick={() => { showModal(); setCurrentTodo(todo) }}
                  className="text-blue-500 text-2xl hover:text-blue-600 ml-2 focus:outline-none"
                >
                  <EditOutlined />
                </button>
              </li>
            </>
          ))}

          <TodoSubHeader heading="COMPLETED" />

          {todos.map(todo => (
            todo.completed &&
            <li
              key={todo.id}
              className={`flex items-center bg-gray-700 p-3 rounded-md `}
            >
              <Typography.Text className="text-lg flex-grow text-gray-500 line-through">
                {todo.text}
              </Typography.Text>

              <button
                onClick={() => handleToggleComplete(todo.id)}
                className="text-2xl text-green-500 hover:text-green-600 ml-2 focus:outline-none"
              >
                <CheckCircleFilled />
              </button>

              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500 text-2xl hover:text-red-600 ml-2 focus:outline-none"
              >
                <DeleteOutlined />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-white">
          <Typography.Text className="text-lg flex-grow text-white">
            Completed Todos: {completedTodos}
          </Typography.Text>
        </div>
      </div>
    </>
  );
};

export default TodoCard;