import Image from "next/image"
import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import butterfly from "../../../public/butterfly.png"

export const metadata: Metadata = {
  title: "Butterflies | Insects of Papua New Guinea",
  description:
    "Discover Papua New Guinea's Butterflies: Explore the colorful world of Lepidoptera with text and an image gallery.",
}

export default function Butterflies() {
  return (
    <>
      <MobileSubnav name={NavName.butterflies} />
      <div className="page-wrapper">
        <Subnav name={NavName.butterflies} />
        <article className="article-container">
          <PageHeader text="Butterflies" src={butterfly} altText="Butterfly" />
          <section>
            <p>
              Butterflies, like moths, belong to the order Lepidoptera. They are
              known for their vibrant colours, delicate wing structures, and
              charismatic flight. Butterflies are typically diurnal, being
              active during the day, and are commonly seen visiting flowers for
              nectar. There are around 800 species in Papua New Guinea.
            </p>
            <p>
              <strong>Identification Tips:</strong> They have slender bodies,
              clubbed antennae, and two pairs of large, often colorful wings.
              When identifying butterflies, observe their body shape, wing
              structure, and antennae. Pay attention to their colour patterns,
              which can vary dramatically between species and even within
              species.
            </p>
          </section>
          <ImageGallery name={NavName.butterflies} />
        </article>
      </div>
    </>
  )
}
