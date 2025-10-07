import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTech, type Tech } from "../features/techSlice";

interface AddFormFields extends HTMLFormControlsCollection {
  namefield: HTMLInputElement;
  descriptionfield: HTMLInputElement;
}

interface AddFormElements extends HTMLFormElement {
  readonly elements: AddFormFields;
}

const Fields = () => {
  const technologies = useAppSelector((state) => state.tech.technologies);
  const addTechnologie = useAppDispatch();
  const [inputStyle, setInputStyle] = useState<{
    namefield: boolean;
    descriptionfield: boolean;
  }>({ namefield: true, descriptionfield: true });

  const handleSubmitForm = (e: React.FormEvent<AddFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const name = elements.namefield.value;
    const description = elements.descriptionfield.value;

    if (name.length === 0) {
      const des = description.length > 0;
      setInputStyle({ namefield: false, descriptionfield: des });
      return;
    }
    if (description.length === 0) {
      const nam = name.length > 0;
      setInputStyle({ namefield: nam, descriptionfield: false });
      return;
    }

    setInputStyle({ namefield: true, descriptionfield: true });
    const id: number = technologies.length + 1;
    const techObj: Tech = { id, name, description };
    addTechnologie(addTech(techObj));

    e.currentTarget.reset();
  };

  return (
    <section>
      <h2 className="font-semibold text-xl">Добавить технологию</h2>
      <div>
        <form onSubmit={handleSubmitForm} className="grid justify-start gap-2">
          <label htmlFor="namefield" className="font-semibold text-l">
            Название
          </label>
          <input
            type="text"
            id="namefield"
            name="namefield"
            placeholder="Введите название"
            className={`border rounded-[7px] py-2 px-4 bg-gray-100 ${
              inputStyle.namefield ? "border-gray-300" : "border-red-400"
            }`}
          />
          <label htmlFor="descriptionfield" className="font-semibold text-l">
            Описание
          </label>
          <input
            type="text"
            id="descriptionfield"
            name="descriptionfield"
            placeholder="Введите описание"
            className={`border rounded-[7px] py-2 px-4 bg-gray-100 ${
              inputStyle.descriptionfield ? "border-gray-300" : "border-red-400"
            }`}
          />
          <button
            type="submit"
            className="bg-gray-100 border border-gray-300 rounded-[7px] py-2 px-4 cursor-pointer mt-2"
          >
            Создать
          </button>
        </form>
      </div>
    </section>
  );
};

export default Fields;
