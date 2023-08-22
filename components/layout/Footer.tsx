import Image from "next/image";
import { cloudinaryUrlPrefix } from "../../lib/constants";

const Footer = () => {
  return (
    <footer className='min-h-[80px] border-t'>
      <div className='flex justify-center items-center'>
        <p>
          Any feedback, especially in relation to identifications, is always gratefully received. I
          would also welcome the use of my photos, should the appropriate credit naturally be given.
          You can find me at jtwareing@gmail.com and
        </p>
        <div className='relative w-32 aspect-[1632/368]'>
          <Image
            src={`${cloudinaryUrlPrefix}/v1692732142/assets/iNat_jwwhh4.png`}
            alt='iNaturalist logo'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
