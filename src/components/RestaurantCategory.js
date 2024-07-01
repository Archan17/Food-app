import ItemCards from "./ItemCards";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  currentIndex,
}) => {
  const handleClick = () => {
    setShowIndex(currentIndex === data.index ? null : data.index);
  };
  return (
    <div>
      <div className="w-6/12 my-4 mx-auto bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemCards items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
