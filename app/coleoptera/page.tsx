import PageHeader from "@/components/pages/PageHeader"
import Subnav from "@/components/pages/Subnav"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"

export default function Coleoptera() {
  return (
    <>
      <Subnav name={NavName.coleoptera} />
      <article className="article-container">
        <PageHeader
          alt1="Rhinoceros Beetle"
          alt2="Beetle"
          asset1="v1692732146/assets/rhinobeetle_l103ev.png"
          asset2="v1692732153/assets/beetle_ztoz6d.png"
          text="Coleoptera - Beetles"
          width1="966"
          height1="532"
          width2="1175"
          height2="1187"
        />
        <section>
          <p>
            Coleoptera, the largest order of insects, consists of beetles. With
            over 400,000 known species, beetles exhibit remarkable diversity in
            terms of size, shape, colour, and behaviour. They can be found in
            almost every habitat on Earth, including terrestrial, freshwater,
            and marine environments. Beetles are characterized by their hardened
            forewings called elytra, which protect their membranous hindwings.
          </p>
          <p>
            <strong>Identification Tips:</strong> Beetles have a distinct
            appearance with their hardened forewings covering the abdomen. Their
            antennae vary in shape and can be clubbed, serrated, or thread-like.
            Look for the presence of chewing mouthparts and the ability to fly.
            Pay attention to their size, colour patterns, and unique adaptations
            such as horns or modified body structures.
          </p>
        </section>
        <ImageGallery name={NavName.coleoptera} />
      </article>
    </>
  )
}
