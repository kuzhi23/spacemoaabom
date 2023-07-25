import Image from 'next/image';
import { ItemCardWraper } from './style';

type Item = {
  img: string;
  title: string;
  description: string;
  index: number;
};
export const ItemCard = ({ img, title, description, index }: Item) => (
  <ItemCardWraper index={index}>
    <Image src={img} alt="air" className="itemImag" />
    <div className="itemwraper">
      <div className="itemTitleText">{title}</div>
      <div className="itemDescription">{description}</div>
    </div>
  </ItemCardWraper>
);
