import { CDN_URL } from "../utils/constants";

const ItemCards = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg text-gray-700">
                {item.card.info.name}
              </span>
              <span className="font-bold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="relative w-full h-full">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="Image"
                className="w-full h-auto rounded-lg"
              />
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 py-2 px-10 rounded-lg bg-white shadow-lg text-center text-green-600 font-bold">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCards;
