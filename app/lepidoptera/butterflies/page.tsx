import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Butterflies() {
  return (
    <div className="flex flex-row-reverse">
      <PageIndex name={NavName.butterflies} />
      <article className="w-4/5">
        <PageHeader
          alt1="Butterfly"
          alt2="Butterfly"
          asset1="v1692732142/assets/butterfly_r4lqix.png"
          asset2="v1692732142/assets/butterfly_r4lqix.png"
          text="Butterflies"
          width1="871"
          height1="616"
          width2="871"
          height2="616"
        />
        <section>
          <p>
            Butterflies, like moths, belong to the order Lepidoptera. They are
            known for their vibrant colours, delicate wing structures, and
            charismatic flight. Butterflies are typically diurnal, being active
            during the day, and are commonly seen visiting flowers for nectar.
            There are around 800 species in Papua New Guinea.
          </p>
          <p>
            Identification Tips: They have slender bodies, clubbed antennae, and
            two pairs of large, often colorful wings. When identifying
            butterflies, observe their body shape, wing structure, and antennae.
            Pay attention to their colour patterns, which can vary dramatically
            between species and even within species.
          </p>
        </section>
        <ImageGallery name={NavName.butterflies} />
      </article>
    </div>
  )
}
