import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const starCreator = (num) => {
    return Array.from({length: 5}, (_, index) => {
        if (num >= index + 1) {
            return <IoMdStar key={index} />
        } else if (num >= index + 0.5) {
            return <IoMdStarHalf key={index} />
        } else {
            return <IoMdStarOutline key={index} />
        }
    });
}

export default starCreator;
