import Image from "next/image"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import butterfly from "../../../public/butterfly.png"

export default function Butterflies() {
  return (
    <>
      <MobileSubnav name={NavName.butterflies} />
      <div className="page-wrapper">
        <Subnav name={NavName.butterflies} />
        <article className="article-container">
          <PageHeader text="Butterflies">
            <div className="relative h-8 w-8 max-sm:hidden">
              <Image
                alt="Butterfly"
                src={butterfly}
                fill
                sizes="32px"
                className="object-contain"
                quality={100}
              />
            </div>
          </PageHeader>
          <section>
            <p>
              Butterflies, like moths, belong to the order Lepidoptera. They are
              known for their vibrant colours, delicate wing structures, and
              charismatic flight. Butterflies are typically diurnal, being
              active during the day, and are commonly seen visiting flowers for
              nectar. There are around 800 species in Papua New Guinea.
            </p>
            <p>
              Identification Tips: They have slender bodies, clubbed antennae,
              and two pairs of large, often colorful wings. When identifying
              butterflies, observe their body shape, wing structure, and
              antennae. Pay attention to their colour patterns, which can vary
              dramatically between species and even within species.
            </p>
          </section>
          <ImageGallery name={NavName.butterflies} />
        </article>
      </div>
    </>
  )
}
