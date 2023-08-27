import PageHeader from "@/components/pages/PageHeader"
import PageIndex from "@/components/pages/PageIndex"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Phasmida() {
  return (
    <div className="flex flex-row-reverse">
      <PageIndex name={NavName.phasmida} />
      <article className="w-4/5">
        <PageHeader
          alt1="Stick Insect"
          alt2="Leaf Insect"
          asset1="v1692732144/assets/stickinsect_mibjpc.png"
          asset2="v1692732148/assets/leafinsect_aoo2kt.png"
          text="Phasmida - Stick Insects"
          width1="2044"
          height1="793"
          width2="2284"
          height2="1066"
        />
        <section>
          <p>
            Phasmida, commonly known as stick insects or walking sticks, are
            masters of camouflage. They have elongated bodies resembling sticks
            or plant twigs, making them blend in with their surroundings.
          </p>
          <p>
            Identification Tips: Look for a stick-like appearance, long slender
            bodies, and typically slow-moving behavior. Pay attention to their
            leg structure, antennae length, and the presence of wings. Members
            of the order are found on all continents except Antarctica, but they
            are most abundant in the tropics and subtropics.To observe phasmids,
            it is best to pay close attention to vegetation. They are primarily
            nocturnal, and some species may be more active during certain times
            of the year.Note their body coloration, mimicry of plant structures,
            and unique adaptations such as spines or leaf-shaped appendages.
          </p>
        </section>
        <ImageGallery name={NavName.phasmida} />
      </article>
    </div>
  )
}
