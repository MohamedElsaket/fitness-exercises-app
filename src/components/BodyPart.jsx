import { Stack } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1350, behavior: "smooth" });
      }}
      className="bodyPart-card m-5 cursor-pointer bg-[#222] w-28 md:w-40 py-5 text-[#dadada] rounded-3xl border-2 border-red-500"
    >
      <img
        src={Icon}
        alt="Gym"
        className={`w-10 mb-3 pb-2 ${
          bodyPart === item && `border-b-2 border-red-500`
        }`}
      />
      <p>{item}</p>
    </Stack>
  );
};

export default BodyPart;
