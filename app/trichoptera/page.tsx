import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Trichoptera() {
  return (
    <div className="flex flex-row-reverse">
      <PageIndex name={NavName.trichoptera} />
      <article className="w-4/5">
        <PageHeader
          alt1="Caddisfly"
          alt2="Caddisfly"
          asset1="v1692732144/assets/caddisfly2_jukejg.png"
          asset2="v1692732144/assets/caddisfly_hfvdu2.png"
          text="Trichoptera - Caddisflies"
          width1="1291"
          height1="546"
          width2="1597"
          height2="510"
        />
        <section>
          <p>
            Trichoptera, commonly known as caddisflies, are closely related to
            Lepidoptera (butterflies and moths) and share some similarities in
            appearance, such as having scaled wings. However, caddisflies can be
            distinguished by their unique tent-like shape and behavioral traits.
          </p>
          <p>
            Identification Tips: Caddisflies can be identified by their small to
            medium-sized bodies, typically ranging from a few millimeters to a
            few centimeters in length. They have two pairs of hairy, membranous
            wings that are held in a tent-like manner over their bodies when at
            rest. The wings are often adorned with intricate patterns, varying
            in coloration from translucent to dark brown or black.
          </p>
        </section>
        <ImageGallery name={NavName.trichoptera} />
      </article>
    </div>
  )
}
