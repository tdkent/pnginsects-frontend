import Image from "next/image"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import leafinsect from "../../public/leafinsect.png"

export default function Phasmida() {
  return (
    <>
      <MobileSubnav name={NavName.phasmida} />
      <div className="page-wrapper">
        <Subnav name={NavName.phasmida} />
        <article className="article-container">
          <PageHeader text="Phasmida - Stick Insects">
            <div className="relative h-10 w-10 max-sm:hidden">
              <Image
                alt="Leaf Insect"
                src={leafinsect}
                fill
                sizes="32px"
                className="object-contain"
                quality={100}
              />
            </div>
          </PageHeader>
          <section>
            <p>
              Phasmida, commonly known as stick insects or walking sticks, are
              masters of camouflage. They have elongated bodies resembling
              sticks or plant twigs, making them blend in with their
              surroundings.
            </p>
            <p>
              Identification Tips: Look for a stick-like appearance, long
              slender bodies, and typically slow-moving behavior. Pay attention
              to their leg structure, antennae length, and the presence of
              wings. Members of the order are found on all continents except
              Antarctica, but they are most abundant in the tropics and
              subtropics.To observe phasmids, it is best to pay close attention
              to vegetation. They are primarily nocturnal, and some species may
              be more active during certain times of the year.Note their body
              coloration, mimicry of plant structures, and unique adaptations
              such as spines or leaf-shaped appendages.
            </p>
          </section>
          <ImageGallery name={NavName.phasmida} />
        </article>
      </div>
    </>
  )
}
