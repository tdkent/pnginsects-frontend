import Subnav from "@/components/pages/Subnav"
import { Metadata } from "next"

import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import caddisfly from "../../public/caddisfly.png"

export const metadata: Metadata = {
  title: "Trichoptera - Caddisflies | Insects of Papua New Guinea",
  description:
    "Explore Papua New Guinea's Caddisflies: Discover Trichoptera through text and an image gallery, focusing on their distinctive tent-like shape.",
}

export default function Trichoptera() {
  return (
    <>
      <MobileSubnav name={NavName.trichoptera} />
      <div className="page-wrapper">
        <Subnav name={NavName.trichoptera} />
        <article className="article-container">
          <PageHeader
            text="Trichoptera - Caddisflies"
            src={caddisfly}
            altText="Caddisfly"
          />
          <section>
            <p>
              Trichoptera, commonly known as caddisflies, are closely related to
              Lepidoptera (butterflies and moths) and share some similarities in
              appearance, such as having scaled wings. However, caddisflies can
              be distinguished by their unique tent-like shape and behavioral
              traits.
            </p>
            <p>
              <strong>Identification Tips:</strong> Caddisflies can be
              identified by their small to medium-sized bodies, typically
              ranging from a few millimeters to a few centimeters in length.
              They have two pairs of hairy, membranous wings that are held in a
              tent-like manner over their bodies when at rest. The wings are
              often adorned with intricate patterns, varying in coloration from
              translucent to dark brown or black.
            </p>
          </section>
          <ImageGallery name={NavName.trichoptera} />
        </article>
      </div>
    </>
  )
}
