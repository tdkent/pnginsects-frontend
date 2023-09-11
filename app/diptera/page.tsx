import Image from "next/image"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import fly from "../../public/fly.png"

export default function Diptera() {
  return (
    <>
      <MobileSubnav name={NavName.diptera} />
      <div className="page-wrapper">
        <Subnav name={NavName.diptera} />
        <article className="article-container">
          <PageHeader text="Diptera - Flies">
            <div className="relative h-8 w-8 max-sm:hidden">
              <Image
                alt="Fly"
                src={fly}
                fill
                sizes="32px"
                className="object-contain"
                quality={100}
              />
            </div>
          </PageHeader>
          <section>
            <p>
              Diptera, commonly known as flies, are characterised by their
              single pair of wings and second pair of modified wings called
              halteres, which aid in balance during flight. Flies are incredibly
              diverse, with over 150,000 known species. They occupy various
              ecological niches and play essential roles as pollinators,
              decomposers, and predators.
            </p>
            <p>
              <strong>Identification Tips:</strong> Flies have a compact body
              with large, often prominent compound eyes. They possess short
              antennae and mouthparts adapted for piercing, sucking, or lapping.
            </p>
          </section>
          <ImageGallery name={NavName.diptera} />
        </article>
      </div>
    </>
  )
}
