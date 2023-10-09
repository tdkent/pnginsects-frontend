import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import grasshopper from "../../public/grasshopper.png"

export const metadata: Metadata = {
  title:
    "Orthoptera - Grasshoppers, Crickets, and Katydids | Insects of Papua New Guinea",
  description:
    "Discover Papua New Guinea's Orthoptera: Explore grasshoppers, crickets, and katydids through text and an image gallery.",
}

export default function Orthoptera() {
  return (
    <>
      <MobileSubnav name={NavName.orthoptera} />
      <div className="page-wrapper">
        <Subnav name={NavName.orthoptera} />
        <article className="article-container">
          <PageHeader
            text="Orthoptera - Grasshoppers, Crickets, and Katydids"
            src={grasshopper}
            altText="Grasshopper"
          />
          <section>
            <p>
              Orthoptera encompasses insects such as grasshoppers, crickets, and
              katydids. They are characterized by their strong hind legs adapted
              for jumping, well-developed wings (in some species), and
              sound-producing structures used for communication.
            </p>
            <p>
              <strong>Identification Tips:</strong> Grasshoppers have robust
              bodies and long hind legs built for jumping. Their antennae are
              short. Crickets have flattened bodies and long antennae, and their
              songs are produced by rubbing their wings together. They are often
              darkly coloured. Katydids are often leaf-like with long antennae
              and can produce loud, rhythmic songs. Pay attention to their body
              shape, leg structure, and presence of wings.
            </p>
          </section>
          <ImageGallery name={NavName.orthoptera} />
        </article>
      </div>
    </>
  )
}
