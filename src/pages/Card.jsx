import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardTotal } from "../redux/cardSlice";
import CardComp from "../components/card/CardComp";

const Card = () => {
  const dispatch = useDispatch();

  const { cards, totalAmount, itemCount } = useSelector((state) => state.cards);
  console.log(cards, totalAmount, itemCount, "cards");
  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);
  return (
    <div>
      {cards?.length > 0 ? (
        <div>
          {cards?.map((card, i) => (
            <CardComp key={i} card={card} />
          ))}
          <div className="text-2xl font-bold flex items-center justify-end">
            Toplam Tutar :{" "}
            <span className="font-bold text-3xl ml-5"> {totalAmount} </span> TL
          </div>
        </div>
      ) : (
        <div>
          <h1>Sepetinizde Ürün Bulunmamaktadır.</h1>
        </div>
      )}
    </div>
  );
};

export default Card;
