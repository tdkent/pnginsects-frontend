import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import moth from "../../../public/moth.png"

export const metadata: Metadata = {
  title: "Moths | Insects of Papua New Guinea",
  description:
    "Explore the diversity of Moths in Papua New Guinea with text and an image gallery, focusing on these nocturnal insects and their varied characteristics.",
}

export default function Moths() {
  return (
    <>
      <MobileSubnav name={NavName.moths} />
      <div className="page-wrapper">
        <Subnav name={NavName.moths} />
        <article className="article-container">
          <PageHeader text="Moths" src={moth} altText="Moth" />
          <section>
            <p>
              Moths belong to the order Lepidoptera and are closely related to
              butterflies. They are diverse insects with a wide range of sizes,
              shapes, and colors. Moths are typically nocturnal, although some
              species are active during the day.
            </p>
            <p>
              Identification Tips: They have stout bodies, feathery or
              filamentous antennae, and two pairs of wings covered in scales.
              Moths often display intricate patterns and cryptic colouration,
              which aid in camouflage. When identifying moths, observe their
              body shape, wing structure and antennae.
            </p>
          </section>
          <ImageGallery name={NavName.moths} />
        </article>
      </div>
    </>
  )
}
