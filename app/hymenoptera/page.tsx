import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Hymenoptera() {
  return (
    <div className="flex flex-row-reverse">
      <PageIndex name={NavName.hymenoptera} />
      <article className="w-4/5">
        <PageHeader
          alt1="Bee"
          alt2="Ant"
          asset1="v1692732144/assets/bee_xcofj5.png"
          asset2="v1692732144/assets/ant_iivn1u.png"
          text="Hymenoptera - Bees, Wasps and Ants"
          width1="715"
          height1="870"
          width2="1233"
          height2="509"
        />
        <section>
          <p>
            Hymenoptera, which includes ants, bees, wasps, and sawflies, is a
            large and diverse order of insects. They exhibit complex social
            behaviors and display a wide range of body forms and adaptations.
            They are also of great ecological importance as pollinators and
            predators.
          </p>
          <p>
            Identification Tips: Hymenopterans have two pairs of membranous
            wings and a narrow waist called a petiole. Look for the presence of
            specialised structures such as stingers or pollen baskets. Ants have
            a distinct constricted &quot;waist&quot; and often form organised
            colonies with different castes. Bees are known for their hairy
            bodies, pollen-carrying structures, and important role as
            pollinators. Wasps can vary in size and have smooth bodies, and some
            species are known for their ability to sting. Sawflies resemble
            wasps but lack a constricted waist and have additional pairs of
            simple eyes.
          </p>
        </section>
        <ImageGallery name={NavName.hymenoptera} />
      </article>
    </div>
  )
}
