import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  setTechId: React.Dispatch<React.SetStateAction<number | null>>;
}

const Modal = ({ children, setTechId }: Props) => {
  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const datamodal = e.target as HTMLDivElement;
    if (datamodal.dataset.modal === "datamodal") {
      setTechId(null);
    }
  };

  return (
    <div
      data-modal="datamodal"
      className="fixed right-0 left-0 bottom-0 top-0 bg-black/50 z-10"
      onClick={handleCloseModal}
    >
      <div className="max-w-[550px] max-h-[80vh] overflow-y-auto mx-auto mt-6 bg-white rounded-[10px] py-2 px-4 font-semibold">
        {children}
      </div>
    </div>
  );
};

export default Modal;
