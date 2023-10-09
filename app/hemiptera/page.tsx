import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import bug from "../../public/bug.png"

export const metadata: Metadata = {
  title:
    "Hemiptera - True Bugs, Hoppers, Aphids, and Allies | Insects of Papua New Guinea",
  description:
    "Explore the Hemiptera species of Papua New Guinea, diverse insects with piercing-sucking mouthparts, through text and an image gallery.",
}

export default function Hemiptera() {
  return (
    <>
      <MobileSubnav name={NavName.hemiptera} />
      <div className="page-wrapper">
        <Subnav name={NavName.hemiptera} />
        <article className="article-container">
          <PageHeader
            text="Hemiptera - True Bugs, Hoppers, Aphids, and Allies"
            src={bug}
            altText="Bug"
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
              <strong>Identification Tips:</strong> Bugs have characteristic
              mouthparts forming a long, slender proboscis. Their forewings are
              typically half leathery and half membranous, forming an
              &quot;X&quot; shape when at rest. Pay attention to their body
              shape, wing structure, and presence of specialised structures like
              scent glands or enlarged legs. Note their diverse colouration and
              the presence of unique adaptations such as camouflage or defensive
              structures.
            </p>
          </section>
          <ImageGallery name={NavName.hemiptera} />
        </article>
      </div>
    </>
  )
}
