import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Header = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">Todo App!</span>
          </div>
          <div className="flex items-center">
            <button>
              <Avatar size={40} style={{ backgroundColor: 'gray' }} icon={<UserOutlined />} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;