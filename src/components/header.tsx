import { useAppSelector } from "../app/hooks";

const Header = () => {
  const technologies = useAppSelector((state) => state.tech.technologies);

  const getCompletionPercent = (): number => {
    if (technologies.length === 0) return 0;

    const doneCount = technologies.filter((tech) => tech.done).length;
    const percent = (doneCount / technologies.length) * 100;
    console.log(doneCount, percent);

    return Math.round(percent);
  };

  const percentDone = getCompletionPercent();
  console.log(percentDone);

  return (
    <header>
      <h1 className="font-semibold text-xl mt-6 mb-3">Ваш прогресс</h1>
      <div className="w-[100%] h-8 bg-gray-100 border border-gray-300 rounded-[7px]">
        {percentDone + "%"}
      </div>
    </header>
  );
};

export default Header;
