import Image from "next/image";

import { cloudinaryUrlPrefix } from "@/lib/constants";

interface Props {
  alt1: string;
  alt2: string;
  asset1: string;
  asset2: string;
  text: string;
  width1: number;
  width2: number;
  height1: number;
  height2: number;
}

export default function PageHeader({
  alt1,
  alt2,
  asset1,
  asset2,
  text,
  width1,
  width2,
  height1,
  height2,
}: Props) {
  return (
    <div className='flex'>
      <div className={`relative w-12 aspect-[${width1}/${height1}]`}>
        <Image src={`${cloudinaryUrlPrefix}/${asset1}`} alt={alt1} fill className='object-cover' />
      </div>
      <h2>{text}</h2>
      <div className={`relative w-12 aspect-[${width2}/${height2}]`}>
        <Image src={`${cloudinaryUrlPrefix}/${asset2}`} alt={alt2} fill className='object-cover' />
      </div>
    </div>
  );
}
