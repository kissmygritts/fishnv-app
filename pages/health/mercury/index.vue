<template>
  <div class="bg-gray-100 min-h-full">
    <div id="content" class="content">
      <h1>Mercury in the Environment</h1>

      <h2>Fish Consumption Recommendations</h2>
      <p>
        The Nevada Department of Wildlife, the Nevada Division of Environmental protection, and the Division of Public and Behavioral Health (formerly Nevada State Health Division) have been working together to identify potential health risks to the public through monitoring methylmercury in fish from around the state.
      </p>
      <p>
        Nevada lakes, reservoirs, ponds, rivers, and streams contain mercury, which is converted into methylmercury by bacteria in the sediments.  Methylmercury eventually moves up through the food chain to the top predatory fishes where it can concentrate in their muscle tissue.  Generally, larger, older fish concentrate more mercury than smaller ones.
      </p>
      <p>
        The Nevada Department of Wildlife collects sport fish species from fishing waters at sizes typically caught and eaten by anglers. The Nevada Division of Environmental Protection works with the U. S. Environmental Protection Agency to provide mercury analysis of these fish.  From the information collected, the <strong>Division of Public and Behavioral Health recommends not consuming certain fish species from seven northern Nevada waters due to elevated mercury levels</strong>.  These include:
      </p>

      <ul class="bg-red-100 p-4 rounded-md text-red-800 -mx-4 mb-4">
        <li>
          No consumption of any fish from <strong>Carson River to Lahontan Dam, including all water in Lahontan Valley</strong>.
        </li>
        <li>No consumption of white bass from <strong>Little and Big Washoe Lake</strong>.</li>
        <li>No consumption of wipers and walleye from <strong>Rye Patch Reservoir</strong>.</li>
        <li>No consumption of walleye from <strong>Chimney Dam Reservoir</strong>.</li>
        <li>No consumption of largemouth bass and northern pike from <strong>Comins Lake</strong>.</li>
      </ul>

      <p>
        The bottom line is that Nevadans should feel free to enjoy fishing in the state's waters and to enjoy fish they catch as an important and healthy part of their diet.  When fishing in waters where no fish consumption recommendations are in effect, pregnant women, nursing mothers and children should limit their consumption of fish, eat smaller fish (rather than larger ones), or practice catch-and-release.  Please see links below for more information regarding fish in your diet and health impacts from eating fish containing mercury.
      </p>

      <h2>Meal Size</h2>
      <p>
        An adult meal size is considered to be 8-ounces of fish meat, about the size of two decks of cards.  Children should eat smaller, age-appropriate amounts.  Click on the links below* <strong>for advice for pregnant and breastfeeding women</strong> and children and fish consumption in general.
      </p>
      <p>
        Consider how much fish from all sources (caught and purchased) that you are likely to eat in a month and follow the recommendations accordingly.  Space your meals of fish evenly during the month when eating fish that have consumption recommendations.  For example, the consumption recommendation for brown trout from the Carson River near the Bryant Creek confluence is 8-meals per month.  This should be spaced out to 2-meals per week, rather than eating the entire 8-meals in a few days time.  Removing the skin does not decrease the amount of mercury in the edible portions.
      </p>
    </div>

    <div class="flex flex-col mx-4 xl:mx-36">
      <div class="overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    County
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Water Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Species
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Meals Per Month
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="row in mercury" :key="row.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ row.region }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ row.county }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ row.water_name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                    {{ row.species }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ row.meals_per_month }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthPageMercury',

  async asyncData ({ $axios }) {
    const mercury = await $axios.$get('api/health/mercury')

    return {
      mercury
    }
  }
}
</script>
