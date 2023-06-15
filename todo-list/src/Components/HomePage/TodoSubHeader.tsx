import { FC } from "react";
import { Divider } from 'antd';

interface IsubHeader {
  heading?: string;
}

const TodoSubHeader: FC<IsubHeader> = (props) => {
  const { heading } = props;
  return (
    <>
      <div
        className="text-white font-bold pt-8"
      >{heading}</div>
      <Divider plain className="mt-4 mb-8 bg-white color-white" />
    </>
  )
}
export default TodoSubHeader;