import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import Modal from "./modal";

const Main = () => {
  const technologies = useAppSelector((state) => state.tech.technologies);
  const [techId, setTechId] = useState<number | null>(null);
  const activeTech = technologies.find((t) => t.id === techId);

  return (
    <main>
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
        <Modal>
          <>
            {activeTech.description}
            <button
              className="border-2 border-gray-500 rounded-[10px] py-2 px-4 cursor-pointer"
              type="button"
              onClick={() => setTechId(null)}
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
