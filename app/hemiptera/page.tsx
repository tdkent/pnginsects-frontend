import Subnav from "@/components/pages/Subnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Hemiptera() {
  return (
    <>
      <Subnav name={NavName.hemiptera} />
      <article className="article-container">
        <PageHeader
          alt1="Bug"
          alt2="Shield Bug"
          asset1="v1692732151/assets/bug_pi6vib.png"
          asset2="v1692732151/assets/shieldbug_kay1wy.png"
          text="Hemiptera - True Bugs, Hoppers, Aphids, and Allies"
          width1="1545"
          height1="1236"
          width2="813"
          height2="817"
        />
        <section>
          <p>
            Hemiptera includes a diverse group of insects with a wide range of
            adaptations and feeding habits. They have piercing and sucking
            mouthparts, enabling them to feed on plant sap, prey, or blood.
            Hemipterans can be found in terrestrial and aquatic habitats
            worldwide and play vital roles in ecosystems as herbivores,
            predators, and disease vectors.
          </p>
          <p>
            Identification Tips: Bugs have characteristic mouthparts forming a
            long, slender proboscis. Their forewings are typically half leathery
            and half membranous, forming an &quot;X&quot; shape when at rest.
            Pay attention to their body shape, wing structure, and presence of
            specialised structures like scent glands or enlarged legs. Note
            their diverse colouration and the presence of unique adaptations
            such as camouflage or defensive structures.
          </p>
        </section>
        <ImageGallery name={NavName.hemiptera} />
      </article>
    </>
  )
}
