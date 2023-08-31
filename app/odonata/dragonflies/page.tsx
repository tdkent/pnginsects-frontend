import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Dragonflies() {
  return (
    <>
      <PageIndex name={NavName.dragonfiles} />
      <article className="article-container">
        <PageHeader
          alt1="Dragonfly"
          alt2="Dragonfly"
          asset1="v1692732157/assets/dragonfly2_ilryiz.png"
          asset2="v1692732157/assets/dragonfly2_ilryiz.png"
          text="Dragonflies"
          width1="2662"
          height1="1892"
          width2="2662"
          height2="1892"
        />
        <section>
          <p>
            Dragonflies belong to the order Odonata. Dragonflies are commonly
            found near freshwater habitats, where they lay their eggs and spend
            their nymph stage underwater. There are around 175 species in New
            Guinea, its satellite islands and the Bismark Archipelago. Most
            species and some genera are not found elsehwere.
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
    </>
  )
}
