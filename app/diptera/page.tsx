import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Diptera() {
  return (
    <div className="flex flex-row-reverse">
      <PageIndex name={NavName.diptera} />
      <article className="w-4/5">
        <PageHeader
          alt1="Fly"
          alt2="Mosquito"
          asset1="v1692732143/assets/fly_rseekd.png"
          asset2="v1692732147/assets/mosquito_nbw4wi.png"
          text="Diptera - Flies"
          width1="643"
          height1="497"
          width2="656"
          height2="529"
        />
        <section>
          <p>
            Diptera, commonly known as flies, are characterised by their single
            pair of wings and second pair of modified wings called halteres,
            which aid in balance during flight. Flies are incredibly diverse,
            with over 150,000 known species. They occupy various ecological
            niches and play essential roles as pollinators, decomposers, and
            predators.
          </p>
          <p>
            Identification Tips: Flies have a compact body with large, often
            prominent compound eyes. They possess short antennae and mouthparts
            adapted for piercing, sucking, or lapping.
          </p>
        </section>
        <ImageGallery name={NavName.diptera} />
      </article>
    </div>
  )
}
