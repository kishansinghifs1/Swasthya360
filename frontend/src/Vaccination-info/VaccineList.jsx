const VaccineList = ({ list }) => {
  return (
    <div className="flex flex-col overflow-y-auto h-[60vh] pr-2 gap-2 mt-4">
      {list.map((vac) => (
        <div
          key={vac.name}
          className="bg-gray-100 p-4 rounded-xl flex justify-between"
        >
          <div>
            <h1 className="text-lg font-semibold">{vac.name}</h1>
            <h2>{vac.desc}</h2>
          </div>
          <div>
            <button
              className={`m-2 px-4 py-2 text-white rounded-lg ${
                vac.type === "Optional" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {vac.type}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VaccineList;
