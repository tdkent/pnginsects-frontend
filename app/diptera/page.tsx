import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import fly from "../../public/fly.png"

export const metadata: Metadata = {
  title: "Diptera - Flies | Insects of Papua New Guinea",
  description:
    "Explore the diversity of fly species in Papua New Guinea, as well as their ecological roles as pollinators, decomposers, and predators.",
}

export default function Diptera() {
  return (
    <>
      <MobileSubnav name={NavName.diptera} />
      <div className="page-wrapper">
        <article className="article-container">
          <PageHeader text="Diptera - Flies" src={fly} altText="Fly" />
          <section className="intro">
            <div className="intro-text">
              <p>
                Diptera, commonly known as flies, are characterised by their
                single pair of wings and second pair of modified wings called
                halteres, which aid in balance during flight. Flies are
                incredibly diverse, with over 150,000 known species. They occupy
                various ecological niches and play essential roles as
                pollinators, decomposers, and predators.
              </p>
              <p>
                <strong>Identification Tips:</strong> Flies have a compact body
                with large, often prominent compound eyes. They possess short
                antennae and mouthparts adapted for piercing, sucking, or
                lapping.
              </p>
            </div>
            <Subnav name={NavName.diptera} />
          </section>
          <ImageGallery name={NavName.diptera} />
        </article>
      </div>
    </>
  )
}
