import Image from "next/image"
import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import mantis from "../../public/mantis.png"

export const metadata: Metadata = {
  title: "Mantodea - Mantises | Insects of Papua New Guinea",
  description:
    "Discover Papua New Guinea's Praying Mantises: Explore Mantodea, predatory insects with distinctive features, through text and an image gallery.",
}

export default function Mantodea() {
  return (
    <>
      <MobileSubnav name={NavName.mantodea} />
      <div className="page-wrapper">
        <Subnav name={NavName.mantodea} />
        <article className="article-container">
          <PageHeader
            text="Mantodea - Mantises"
            src={mantis}
            altText="Mantis"
          />
          <section>
            <p>
              Mantodea, commonly known as praying mantises, are predatory
              insects known for their distinctive elongated bodies, raptorial
              front legs, and their ability to hold their forelimbs in a
              &quot;praying&quot; position.
            </p>
            <p>
              Identification Tips: Praying mantises have a triangular head that
              can rotate 180 degrees. Their front legs are modified for
              capturing and grasping prey. Look for their slender bodies,
              triangular pronotum, and compound eyes. Note their colouration,
              body shape, and the presence of unique adaptations such as spines
              or camouflage. Observe their hunting behaviour and characteristic
              &quot;prayer-like&quot; pose.
            </p>
          </section>
          <ImageGallery name={NavName.mantodea} />
        </article>
      </div>
    </>
  )
}
