import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Moths() {
  return (
    <>
      <MobileSubnav name={NavName.moths} />
      <div className="page-wrapper">
        <Subnav name={NavName.moths} />
        <article className="article-container">
          <PageHeader
            alt1="Moth"
            alt2="Moth"
            asset1="v1692732144/assets/moth_ndwnvn.png"
            asset2="v1692732144/assets/moth_ndwnvn.png"
            text="Moths"
            width1="599"
            height1="920"
            width2="599"
            height2="920"
          />
          <section>
            <p>
              Moths belong to the order Lepidoptera and are closely related to
              butterflies. They are diverse insects with a wide range of sizes,
              shapes, and colors. Moths are typically nocturnal, although some
              species are active during the day.
            </p>
            <p>
              Identification Tips: They have stout bodies, feathery or
              filamentous antennae, and two pairs of wings covered in scales.
              Moths often display intricate patterns and cryptic colouration,
              which aid in camouflage. When identifying moths, observe their
              body shape, wing structure and antennae.
            </p>
          </section>
          <ImageGallery name={NavName.moths} />
        </article>
      </div>
    </>
  )
}
