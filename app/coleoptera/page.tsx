import Image from "next/image"
import { Metadata } from "next"

import PageHeader from "@/components/pages/PageHeader"
import MobileSubnav from "@/components/pages/MobileSubnav"
import Subnav from "@/components/pages/Subnav"
import ImageGallery from "@/components/images/ImageGallery"
import { NavName } from "@/utils/models"
import rhinobeetle from "../../public/rhinobeetle.png"

export const metadata: Metadata = {
  title: "Coleoptera - Beetles | Insects of Papua New Guinea",
  description:
    "Coleoptera, the largest insect order, featuring beetles with remarkable diversity in size, shape, color, and behavior. Adapted with elytra for protection, they thrive in diverse habitats across the globe.",
}

export default function Coleoptera() {
  return (
    <>
      <MobileSubnav name={NavName.coleoptera} />
      <div className="page-wrapper">
        <Subnav name={NavName.coleoptera} />
        <article className="article-container">
          <PageHeader text="Coleoptera - Beetles">
            <div className="relative h-8 w-8 max-sm:hidden">
              <Image
                alt="Rhinobeetle"
                src={rhinobeetle}
                fill
                sizes="32px"
                className="object-contain"
                quality={100}
              />
            </div>
          </PageHeader>
          <section>
            <p>
              Coleoptera, the largest order of insects, consists of beetles.
              With over 400,000 known species, beetles exhibit remarkable
              diversity in terms of size, shape, colour, and behaviour. They can
              be found in almost every habitat on Earth, including terrestrial,
              freshwater, and marine environments. Beetles are characterized by
              their hardened forewings called elytra, which protect their
              membranous hindwings.
            </p>
            <p>
              <strong>Identification Tips:</strong> Beetles have a distinct
              appearance with their hardened forewings covering the abdomen.
              Their antennae vary in shape and can be clubbed, serrated, or
              thread-like. Look for the presence of chewing mouthparts and the
              ability to fly. Pay attention to their size, colour patterns, and
              unique adaptations such as horns or modified body structures.
            </p>
          </section>
          <ImageGallery name={NavName.coleoptera} />
        </article>
      </div>
    </>
  )
}
