import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="flex overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-[#222]">
      {data.map((item) => (
        <div
          key={item || item.id}
          itemID={item || item.id}
          title={item || item.id}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
