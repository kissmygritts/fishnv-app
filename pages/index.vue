<template>
  <div class="bg-gray-100">
    <header-nav ref="nav" />

    <!-- hero section -->
    <div
      id="hero"
      class="w-screen md:h-screen bg-cover bg-center bg-no-repeat flex md:items-center md:justify-center py-16 sm:py-32"
    >
      <!-- call to action section -->
      <div
        id="cta"
        class="text-white w-full md:w-3/4 lg:w-7/12 px-4 md:text-center"
      >
        <h1 class="text-4xl leading-tight font-bold text-shadow">
          Welcome to Your Online Guide to Nevada's 34 Sport Fish Species and 534 Fishable Waters
        </h1>
        <p class="mt-6 text-xl font-light leading-snug text-shadow">
          From desert creeks to high mountain lakes
          Nevada offers endless fishing possibilites. We've
          built this app to help you discover the perfect
          Nevada fishing adventure.
        </p>

        <!-- links -->
        <div class="flex flex-wrap w-full mt-8 text-center md:justify-center">
          <nuxt-link
            to="/map"
            class="w-full sm:w-64 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-sm text-lg"
            prefetch
          >
            Where Can I Fish?
          </nuxt-link>
          <a
            href="https://nevada.licensing.kalkomey.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-64 mt-2 sm:mt-0 sm:ml-2 text-gray-100 bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-sm text-lg"
          >
            Buy a Fishing License
          </a>
        </div>
      </div>
    </div>

    <!-- FAQ section -->
    <section id="FAQ" class="text-gray-700 body-font">
      <div class="container px-5 lg:px-48 xl:px-64 py-24 mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-medium text-center title-font text-gray-800 mb-4">
            The FishNV Map
          </h2>
          <p class="text-base leading-relaxed mx-auto px-12">
            Fish NV is an application to help you find the ideal location for your next
            fishing excursion. All the information within the application was compiled
            by those who know it best - your fellow Nevada anglers. Read below for
            more information about the data used within the app.
          </p>
        </div>
        <!-- FAQs -->
        <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          <!-- first -->
          <div class="p-2 w-full">
            <div class="bg-gray-200 rounded-sm p-4 h-full items-center">
              <h3 class="font-semibold tracking-wide">
                What is a fishable water?
              </h3>
              <p class="mt-2 pl-4">
                Fishable waters are classified by NDOW Fisheries biologists for each of their
                respective areas of management authority. Not every stream, creek, reservoir,
                or lake is considered a fishable water. Some don't contain sport fish populations.
                Others may not support fish year around. Occasionally there may be discrepancies
                between what NDOW consideres a fishable water and what might look like a fishable
                water on a map. For further clarification, please call your local NDOW office.
              </p>
            </div>
          </div>
          <!-- next -->
          <div class="p-2 w-full">
            <div class="bg-gray-200 rounded-sm p-4 h-full items-center">
              <h3 class="font-semibold tracking-wide">
                What is a trophy fish?
              </h3>
              <p class="mt-2 pl-4">
                Potential trophy fish can be classified into a few separate categories (listed below).
              </p>
              <ul class="mt-2 list-inside list-disc pl-4">
                <li class="mt-1">
                  <span class="font-medium">Trophy Fish:</span> A trophy fish is a fish that meets the
                  minimum trophy weight for the individual fish species. Minimum weight qualifications
                  are established by NDOW. For instance, the statewide minimum trophy weight for a rainbow
                  trout is 5 pounds.
                </li>
                <li class="mt-1">
                  <span class="font-medium">State Record:</span> A fish is considered a state record
                  if it is the largest fish of that species to ever be caught in Nevada. State record
                  fish must be weighed on a certified scale and/or validated by an NDOW biologist.
                </li>
                <li class="mt-1">
                  <span class="font-medium">Water Record:</span> A fish is considered a water record if it
                  is the largest fish of a particular species to ever be caught in a respective water. Water
                  records do not need to meet the minimum trophy weight qualifications. For instance, a 1.0
                  pound Brook Trout caught in Galena Creek is considered a water record even though it does
                  not meet the 2.0 pound minimum trophy weight requirement for Brook Trout.
                </li>
                <li class="mt-1">
                  <span class="font-medium">Unofficial State Record:</span> If a fish is not validated
                  by an NDOW biologist or weighed on a certified scale it cannot be considered for an
                  official record. However, it can still be listed as an unofficial record.
                </li>
              </ul>
            </div>
          </div>
          <!-- next -->
          <div class="p-2 w-full">
            <div class="bg-gray-200 rounded-sm p-4 h-full items-center">
              <h3 class="font-semibold tracking-wide">
                About the Data
              </h3>
              <p class="mt-2 pl-4">
                The data for this application comes from two primary sources maintained by the
                Nevada Department of Wildife: the Trophy Fish Database, and the Fishable
                Waters Database.
              </p>
              <p class="mt-2 pl-4">
                The Fishable Waters Database is developed by NDOW biologists and used to generate the
                Nevada Fishing Guide every year. It houses a catalog of every fishable water in Nevada
                as well as which species can be caught in each respective water. The Nevada Fishing Guide
                is available at local license vendors, NDOW offices, or for download from NDOW's website.
              </p>
              <p class="mt-2 pl-4">
                The Trophy Fish Database contains user submitted fish data of trophy fish caught throughout
                the state. Nevada anglers can submit trophy fish applications to NDOW for inclusion in an
                annual Trophy Fish Book generated by the Nevada Department of Wildlife. This book is not
                limited to just trophy fish. It also contains lists of water records for all fishable waters
                in Nevada and is updated annually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="text-gray-500 bg-gray-800 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center">
        <a href="http://www.ndow.org" class="title-font font-medium text-white" target="_blank" rel="noopener noreferrer">
          Nevada Department of Wildlife
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderNav from '@/components/header-nav.vue'

export default {
  components: {
    HeaderNav
  }
}
</script>

<style>
#hero {
  background-image:
    radial-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.05)
    ),
    url(https://ndow-cdn.s3-us-west-2.amazonaws.com/species/brook-trout/brook-trout-hero.jpg)
    /* url(https://ndow-cdn.s3-us-west-2.amazonaws.com/fishnv/hero-img.jpg) */
}

#cta {
  background: radial-gradient(
    rgba(0, 0, 0, 0.33),
    rgba(0, 0, 0, 0) 40%
  )
}

.text-shadow {
  text-shadow: 0 1px 20px #000000;
}
</style>
