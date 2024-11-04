
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// CardStack Component
export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const intervalRef = useRef(null); // Use useRef for interval

  useEffect(() => {
    startFlipping();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startFlipping = () => {
    intervalRef.current = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
        className="absolute dark:bg-black bg-[#13301B] h-60 w-60 md:h-44 md:w-[520px] rounded-3xl p-4  border-white border  flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
            boxShadow: "-10px 0px 2px rgba(128, 128, 128, 0.1)", // Left-only shadow
          }}
       
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
              <div>
            <p className="font-medium text-lg text-lightGreen">
              {card.name}
            </p>
            <p className="text-[#B4FB85] text-xl font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
          <div className="font-normal text-white dark:text-neutral-200">
            {card.content}
          </div>
        
        </motion.div>
      ))}
    </div>
  );
};
