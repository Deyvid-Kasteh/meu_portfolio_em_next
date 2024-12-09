import React from 'react';

type ContainerProps = {
    children?: React.ReactNode;
};

const Container:React.FC<ContainerProps> = () => {

    return (
      <div className="flex justify-center items-center h-4/6 w-10/12 bg-gray-200">
        kasteh
      </div>
    );
}
export default Container;