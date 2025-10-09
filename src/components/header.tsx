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

  const getColorLine = (percent: number): string => {
    if (percent <= 20) {
      return "bg-red-500";
    } else if (percent <= 45) {
      return "bg-orange-400";
    } else if (percent <= 75) {
      return "bg-yellow-400";
    } else {
      return "bg-green-500";
    }
  };

  const colorLine = getColorLine(percentDone);

  return (
    <header>
      <h1 className="font-semibold text-xl mt-6 mb-3">Ваш прогресс</h1>
      <div className="w-[100%] h-8 bg-gray-100 border border-gray-300 rounded-[7px] relative">
        <div
          className={`absolute ${colorLine} h-8 border border-gray-300 rounded-[7px]`}
          style={{ width: `${percentDone}%` }}
        >
          {percentDone + "%"}
        </div>
      </div>
    </header>
  );
};

export default Header;
