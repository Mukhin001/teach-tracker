import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Modal from "./modal";
import { replaceTech } from "../features/techSlice";

const Main = () => {
  const technologies = useAppSelector((state) => state.tech.technologies);
  const [techId, setTechId] = useState<number | null>(null);
  const activeTech = technologies.find((t) => t.id === techId);
  const dispatch = useAppDispatch();

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTech = technologies.map((tech) =>
      tech.id === activeTech?.id
        ? { ...tech, done: e.currentTarget.checked }
        : tech
    );

    dispatch(replaceTech(newTech));
  };

  return (
    <main className="my-4">
      <ul className="grid grid-cols-2 gap-2">
        {technologies.map((tech) => (
          <li
            key={tech.id}
            className="
              text-center rounded-[10px] py-4 px-4 
              cursor-pointer bg-green-400 text-amber-50
              hover:text-black hover:bg-amber-50 hover:shadow transition-all
               overflow-hidden text-ellipsis whitespace-nowrap"
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
            <p>{activeTech.description}</p>
            <div className="h-[2px] bg-gray-200 my-4"></div>
            <div>
              <input
                type="checkbox"
                id="donetech"
                name="donetech"
                defaultChecked={activeTech.done}
                onChange={handleChecked}
              />
              <label htmlFor="donetech" className="pl-2">
                Сделанно!
              </label>
            </div>
          </>
        </Modal>
      )}
    </main>
  );
};

export default Main;
