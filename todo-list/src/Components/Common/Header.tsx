import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';

const Header = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between">

          <div className="flex items-center">
            <Button
              href="/"
              type='link'
              className="text-white text-lg font-semibold"
            >
              Todo List App
            </Button>

            <Button
              href="/blog"
              type='link'
              className="mx-2 top-0.5 hover:bg-gray-700"
            >
              Blog
            </Button>
          </div>

          <div className="flex items-center">
            <Avatar 
              size={32} 
              className="bg-blue-800" 
              icon={<UserOutlined />} 
            />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;