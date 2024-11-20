import React from "react";
import { removeFromCard } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";
const CardComp = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={card?.image}
        alt={card?.title}
      />
      <div className="w-[75vh]">
        <div className="text-xl font-bold">{card?.title}</div>
        <div>{card?.description}</div>
      </div>

      <div className="text-2xl font-bold">
        {card?.price} TL ({card?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCard(card?.id))}
        className="bg-red-500 text-white text-2xl w-[150px] h-16 rounded-md cursor-pointer flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CardComp;
