import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Mantodea() {
  return (
    <>
      <PageIndex name={NavName.mantodea} />
      <article className="article-container">
        <PageHeader
          alt1="Mantis"
          alt2="Mantis"
          asset1="v1692732148/assets/mantis2_fs8i2r.png"
          asset2="v1692732149/assets/mantis_dmnc75.png"
          text="Mantodea - Mantises"
          width1="884"
          height1="971"
          width2="1066"
          height2="1056"
        />
        <section>
          <p>
            Mantodea, commonly known as praying mantises, are predatory insects
            known for their distinctive elongated bodies, raptorial front legs,
            and their ability to hold their forelimbs in a &quot;praying&quot;
            position.
          </p>
          <p>
            Identification Tips: Praying mantises have a triangular head that
            can rotate 180 degrees. Their front legs are modified for capturing
            and grasping prey. Look for their slender bodies, triangular
            pronotum, and compound eyes. Note their colouration, body shape, and
            the presence of unique adaptations such as spines or camouflage.
            Observe their hunting behaviour and characteristic
            &quot;prayer-like&quot; pose.
          </p>
        </section>
        <ImageGallery name={NavName.mantodea} />
      </article>
    </>
  )
}
