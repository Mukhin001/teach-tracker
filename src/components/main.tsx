import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import Modal from "./modal";

const Main = () => {
  const technologies = useAppSelector((state) => state.tech.technologies);
  const [techId, setTechId] = useState<number | null>(null);
  const activeTech = technologies.find((t) => t.id === techId);

  return (
    <main className="my-4">
      <ul className="grid grid-cols-2 gap-2">
        {technologies.map((tech) => (
          <li
            key={tech.id}
            className="
              text-center rounded-[10px] py-4 px-4 
              cursor-pointer bg-green-400 text-amber-50
              hover:text-black hover:bg-amber-50 hover:shadow transition-all"
            onClick={() => setTechId(tech.id)}
          >
            {tech.name}
          </li>
        ))}
      </ul>
      {activeTech && (
        <Modal setTechId={setTechId}>
          <>
            <h3 className="font-semibold text-xl text-center py-4">
              {activeTech.name}
            </h3>
            {activeTech.description}
            <div className="h-[2px] bg-gray-200 my-4"></div>
            <button
              className="border-2 border-gray-500 rounded-[10px] py-2 px-2 cursor-pointer"
              type="button"
              onClick={() => ""}
            >
              x
            </button>
          </>
        </Modal>
      )}
    </main>
  );
};

export default Main;
