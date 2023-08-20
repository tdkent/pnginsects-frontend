import Image from "next/image";

import { CloudinaryResource } from "@/models";

const getImages = async () => {
  const response = await fetch("http://localhost:4000/home");
  return response.json();
};

const Gallery = async () => {
  const { resources }: { resources: CloudinaryResource[] } = await getImages();
  return (
    <div>
      {resources.map((image) => {
        return (
          <div key={image.asset_id} className='relative w-[300px] aspect-[3/2]'>
            <Image
              alt={image.public_id}
              src={image.secure_url}
              fill
              className='object-cover'
              quality={50}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
