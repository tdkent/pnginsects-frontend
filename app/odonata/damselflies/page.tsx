import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Damselflies() {
  return (
    <>
      <MobileSubnav name={NavName.damselflies} />
      <div className="page-wrapper">
        <Subnav name={NavName.damselflies} />
        <article className="article-container">
          <PageHeader
            alt1="Damselfly"
            alt2="Damselfly"
            asset1="v1692732146/assets/damselfly_q7jns6.png"
            asset2="v1692732146/assets/damselfly_q7jns6.png"
            text="Damselflies"
            width1="1589"
            height1="658"
            width2="1589"
            height2="658"
          />
          <section>
            <p>
              Damselflies belong to the order Odonata, along with dragonflies,
              and are known for their delicate appearance and graceful flight.
              They are often found near freshwater habitats, such as ponds,
              lakes, and streams, where they lay their eggs and spend their
              nymph stage underwater. Around 285 species are present in New
              Guinea, many endemic.
            </p>
            <p>
              Identification Tips: When identifying damselflies, note their
              slender bodies, long and thin wings, and their habit of resting
              with wings held together above their bodies. Look for
              distinguishing features such as colour patterns on their wings and
              body, as well as the shape and colouration of their eyes.
            </p>
          </section>
          <ImageGallery name={NavName.damselflies} />
        </article>
      </div>
    </>
  )
}
