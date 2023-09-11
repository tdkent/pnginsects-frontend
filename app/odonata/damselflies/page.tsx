import Image from "next/image"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import damselfly from "../../../public/damselfly.png"

export default function Damselflies() {
  return (
    <>
      <MobileSubnav name={NavName.damselflies} />
      <div className="page-wrapper">
        <Subnav name={NavName.damselflies} />
        <article className="article-container">
          <PageHeader text="Damselflies">
            <div className="relative h-10 w-10 max-sm:hidden">
              <Image
                alt="Damselfly"
                src={damselfly}
                fill
                sizes="32px"
                className="object-contain"
                quality={100}
              />
            </div>
          </PageHeader>
          <section>
            <p>
              Damselflies belong to the order Odonata, along with dragonflies,
              and are known for their delicate appearance and graceful flight.
              They are often found near freshwater habitats, such as ponds,
              lakes, and streams, where they lay their eggs and spend their
              nymph stage underwater. Around 285 species are present in New
              Guinea, many endemic.
            </p>
            <p>
              Identification Tips: When identifying damselflies, note their
              slender bodies, long and thin wings, and their habit of resting
              with wings held together above their bodies. Look for
              distinguishing features such as colour patterns on their wings and
              body, as well as the shape and colouration of their eyes.
            </p>
          </section>
          <ImageGallery name={NavName.damselflies} />
        </article>
      </div>
    </>
  )
}
