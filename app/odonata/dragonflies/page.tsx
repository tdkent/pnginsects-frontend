import Image from "next/image"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import dragonfly from "../../../public/dragonfly.png"

export default function Dragonflies() {
  return (
    <>
      <MobileSubnav name={NavName.dragonfiles} />
      <div className="page-wrapper">
        <Subnav name={NavName.dragonfiles} />
        <article className="article-container">
          <PageHeader text="Dragonflies">
            <div className="relative h-8 w-8 max-sm:hidden">
              <Image
                alt="Dragonfly"
                src={dragonfly}
                fill
                sizes="32px"
                className="object-contain"
                quality={100}
              />
            </div>
          </PageHeader>
          <section>
            <p>
              Dragonflies belong to the order Odonata. Dragonflies are commonly
              found near freshwater habitats, where they lay their eggs and
              spend their nymph stage underwater. There are around 175 species
              in New Guinea, its satellite islands and the Bismark Archipelago.
              Most species and some genera are not found elsehwere.
            </p>
            <p>
              Identification Tips: To identify dragonflies, observe their robust
              bodies, large eyes, and distinct wing shape. When resting, their
              wings are spread perpendicular to their body in contrast to
              damselflies. Their eyes are also larger than damselflies, with no
              gap between them (except in Ictinogomphus australis)
            </p>
          </section>
          <ImageGallery name={NavName.dragonfiles} />
        </article>
      </div>
    </>
  )
}
