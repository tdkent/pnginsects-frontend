import { Metadata } from "next"

import Subnav from "@/components/pages/Subnav"
import MobileSubnav from "@/components/pages/MobileSubnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import bee from "../../public/bee.png"

export const metadata: Metadata = {
  title: "Hymenoptera - Bees, Wasps and Ants | Insects of Papua New Guinea",
  description:
    "Explore Hymenoptera in Papua New Guinea: Learn about this diverse insect order, featuring ants, bees, wasps, and sawflies, through text and an image gallery.",
}

export default function Hymenoptera() {
  return (
    <>
      <MobileSubnav name={NavName.hymenoptera} />
      <div className="page-wrapper">
        <article className="article-container">
          <PageHeader
            text="Hymenoptera - Bees, Wasps and Ants"
            src={bee}
            altText="Bee"
          />
          <section className="intro">
            <div className="intro-text">
              <p>
                Hymenoptera, which includes ants, bees, wasps, and sawflies, is
                a large and diverse order of insects. They exhibit complex
                social behaviors and display a wide range of body forms and
                adaptations. They are also of great ecological importance as
                pollinators and predators.
              </p>
              <p>
                <strong>Identification Tips:</strong> Hymenopterans have two
                pairs of membranous wings and a narrow waist called a petiole.
                Look for the presence of specialised structures such as stingers
                or pollen baskets. Ants have a distinct constricted
                &quot;waist&quot; and often form organised colonies with
                different castes. Bees are known for their hairy bodies,
                pollen-carrying structures, and important role as pollinators.
                Wasps can vary in size and have smooth bodies, and some species
                are known for their ability to sting. Sawflies resemble wasps
                but lack a constricted waist and have additional pairs of simple
                eyes.
              </p>
            </div>
            <Subnav name={NavName.hymenoptera} />
          </section>
          <ImageGallery name={NavName.hymenoptera} />
        </article>
      </div>
    </>
  )
}
