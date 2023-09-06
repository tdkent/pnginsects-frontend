import { EnvelopeIcon } from "@heroicons/react/24/outline"

import { NavName } from "@/utils/models"
import ImageGallery from "@/components/images/ImageGallery"

export default function Home() {
  return (
    <article className="article-container">
      <section>
        <h2 className="my-8 border-y border-neutral-200 px-6 py-8 text-xl leading-8 text-primary-700">
          Welcome to Insects of Papua New Guinea!
        </h2>
        <p>
          My name is James Wareing and I am currently working in conservation in
          the Torricelli Mountain Range of Papua New Guinea. The goal of this
          site is not to offer a comprehensive record of the insects of Papua
          New Guinea, a fanciful task in any event, but merely to serve as a
          record of what I have seen. I am by no means an entomologist, but
          rather an amateur naturalist with emphasis on the amateur. For the
          identifications, I am largely indebted to the iNaturalist community,
          which comes both with gratitude and with the natural caveat that some
          identifications may not be correct.
        </p>
        <p>
          The website is divided into pages covering the various insect orders.
          Within these pages subheaders delineate the families. I have tried to
          narrow down the ID as low as possible, but where no identifier to an
          image appears, it is currently at family level. Most pages also
          include a &apos;Family Unknown&apos; section, for which no family is
          known. Any assistance with these would be greatly appreciated. The
          habitat is montane cloud rainforest, with the elevation varying
          between 500-1400m. Most observations recorded are towards the lower
          end of this altitudinal scale.
        </p>
        <p>
          Any feedback, especially in relation to identifications, is always
          gratefully received. I would also welcome the use of my photos, should
          the appropriate credit naturally be given.
        </p>
        <div className="mt-10 border-t border-neutral-200 px-6 pb-4 pt-8 text-xl leading-8 text-primary-700">
          Get in Touch
          <div className="flex items-center gap-x-3 pt-4 text-base text-neutral-900">
            <EnvelopeIcon className="h-5 w-5" />
            <div className="flex flex-col items-center font-bold">
              <a href="mailto:jtwareing@gmail.com">jtwareing@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
      <ImageGallery name={NavName.home} />
    </article>
  )
}
