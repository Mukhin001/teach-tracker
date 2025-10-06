import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div className="fixed right-0 left-0 bottom-0 top-0 bg-black/50 z-10">
      <div className="w-[300px] mx-auto mt-6 bg-white rounded-[10px] py-2 px-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
