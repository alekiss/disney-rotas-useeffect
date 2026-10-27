import type { CharatersProps } from "../types/character";

const Card = ({ _id, name, imageUrl }: CharatersProps) => {
  return (
    <div key={_id}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
