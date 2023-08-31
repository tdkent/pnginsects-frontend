import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Orthoptera() {
  return (
    <>
      <PageIndex name={NavName.orthoptera} />
      <article className="article-container">
        <PageHeader
          alt1="Grasshopper"
          alt2="Katydid"
          asset1="v1692732142/assets/grasshopper_qbj8xr.png"
          asset2="v1692732145/assets/katydid_ttdlfw.png"
          text="Orthoptera - Grasshoppers, Crickets, and Katydids"
          width1="948"
          height1="518"
          width2="1081"
          height2="581"
        />
        <section>
          <p>
            Orthoptera encompasses insects such as grasshoppers, crickets, and
            katydids. They are characterized by their strong hind legs adapted
            for jumping, well-developed wings (in some species), and
            sound-producing structures used for communication.
          </p>
          <p>
            Identification Tips: Grasshoppers have robust bodies and long hind
            legs built for jumping. Their antennae are short. Crickets have
            flattened bodies and long antennae, and their songs are produced by
            rubbing their wings together. They are often darkly coloured.
            Katydids are often leaf-like with long antennae and can produce
            loud, rhythmic songs. Pay attention to their body shape, leg
            structure, and presence of wings.
          </p>
        </section>
        <ImageGallery name={NavName.orthoptera} />
      </article>
    </>
  )
}
