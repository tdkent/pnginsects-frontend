import Subnav from "@/components/pages/Subnav"
import PageHeader from "@/components/pages/PageHeader"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Blattodea() {
  return (
    <>
      <Subnav name={NavName.blattodea} />
      <article className="article-container">
        <PageHeader
          alt1="Cockroach"
          alt2="Termite"
          asset1="v1692732151/assets/cockroach_luskgx.png"
          asset2="v1692732149/assets/termite_w4gea5.png"
          text="Blattodea - Cockroaches and Termites"
          width1="1498"
          height1="920"
          width2="997"
          height2="709"
        />
        <section>
          <p>
            Blattodea is an order of insects characterised by their flattened
            bodies, long antennae, and powerful legs adapted for running. They
            are considered one of the oldest insect orders, with a fossil record
            dating back over 300 million years. Cockroaches are known for their
            ability to thrive in diverse habitats, from tropical rainforests to
            urban environments. They play important roles in ecosystems as
            decomposers and prey for other organisms.
          </p>
          <p>
            <strong>Identification Tips:</strong> Cockroaches have a
            dorsoventrally compressed body, with a shield-like pronotum covering
            their head. They typically have long, filamentous antennae and
            chewing mouthparts. Most cockroaches are brown or black in colour,
            and their size can vary from small to large. Look for the
            characteristic rapid and darting movement when disturbed, as well as
            the presence of wings in some species.
          </p>
          <p>
            Termites have a distinct appearance with a soft-bodied, elongated
            shape. They typically have a pale or whitish colouration. Look for
            the presence of straight antennae, which are not elbowed like those
            of ants. Termites have two pairs of equal-sized wings that are
            typically longer than their body length, although not all termites
            have wings. Observe their behavior and habitat, as they are commonly
            found in moist environments and construct intricate mud tubes or
            tunnels for protection.
          </p>
        </section>
        <ImageGallery name={NavName.blattodea} />
      </article>
    </>
  )
}
