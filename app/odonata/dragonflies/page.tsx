import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import dragonfly from "../../../public/dragonfly.png"

export const metadata: Metadata = {
  title: "Dragonflies | Insects of Papua New Guinea",
  description:
    "Explore Papua New Guinea's unique dragonflies through text and an image gallery.",
}

export default function Dragonflies() {
  return (
    <>
      <MobileSubnav name={NavName.dragonfiles} />
      <div className="page-wrapper">
        <article className="article-container">
          <PageHeader text="Dragonflies" src={dragonfly} altText="Dragonfly" />
          <section className="intro">
            <div className="intro-text">
              <p>
                Dragonflies belong to the order Odonata. Dragonflies are
                commonly found near freshwater habitats, where they lay their
                eggs and spend their nymph stage underwater. There are around
                175 species in New Guinea, its satellite islands and the Bismark
                Archipelago. Most species and some genera are not found
                elsehwere.
              </p>
              <p>
                <strong>Identification Tips:</strong> To identify dragonflies,
                observe their robust bodies, large eyes, and distinct wing
                shape. When resting, their wings are spread perpendicular to
                their body in contrast to damselflies. Their eyes are also
                larger than damselflies, with no gap between them (except in
                Ictinogomphus australis)
              </p>
            </div>
            <Subnav name={NavName.dragonfiles} />
          </section>
          <ImageGallery name={NavName.dragonfiles} />
        </article>
      </div>
    </>
  )
}
