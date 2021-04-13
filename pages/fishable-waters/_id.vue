<!-- eslint-disble -->
<template>
  <div class="text-gray-900 bg-gray-100 min-h-full pb-32 px-2">
    <header class="py-6 md:py-8 container mx-auto bg-gray">
      <h1 class="text-4xl leading-loose">
        {{ fishableWater.water_name }}
        <span class="text-2xl font-thin tracking-wide text-gray-600 pl-2">
          {{ fishableWater.label }}
        </span>
      </h1>
      <div>
        <tails-tag
          v-for="(tag, index) in tags"
          :key="index"
          :text="tag"
          class="mr-2 rounded capitalize"
        />
      </div>

      <!-- nav links -->
      <div class="pt-2">
        <a
          class="text-blue-700 underline cursor-pointer"
          @click="previousPage"
        >
          &larr; Previous Page
        </a>
        <nuxt-link
          to="/map"
          class="pl-2 text-blue-700 underline"
        >
          Go To Map
        </nuxt-link>
      </div>

      <notification-danger class="mt-4" />
    </header>

    <!-- grid container -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

      <!-- map container -->
      <div class="h-96 md:h-full bg-green-200 col-span-1 md:col-span-2 rounded-md shadow-lg">
        <geo-json-map
          class="rounded-lg"
          :geojson="fishableWater.geojson"
        />
      </div>

      <!-- nearby waters container -->
      <div class="col-span-1">
        <h2 class="py-2 pl-1 text-2xl tracking-wide font-light text-gray-700">Nearby Waters</h2>
        <nw-container :nearby-waters="nearbyWaters" />
      </div>

      <!-- trophy fish container -->
      <div class="cols-span-1 md:col-span-3 mt-12">

        <!-- if hasFishEntries !== true -->
        <div v-if="!hasFishEntries">
          <div class="flex flex-wrap items-center justify-center">
            <div class="img-container">
              <img
                id="img"
                class="object-contain h-full w-full"
                src="https://ndow-cdn.s3-us-west-2.amazonaws.com/fishnv/undraw_fishing_hoxa.png"
              >
            </div>
            <div class="w-4/5 px-6 text-center md:text-left md:w-1/2 lg:w-1/3 md:-ml-8 lg:ml-0">
              <h3 class="text-gray-800 text-xl tracking-wide uppercase leading-loose">
                Report you trophies!
              </h3>
              <p class="text-gray-700">
                You can be the first to catch and report a trophy fish or water
                record from {{ fishableWater.water_name }}. Submit you catch to NDOW's
                <a
                  href="http://www.ndow.org/Fish/Angler_Recognition/Trophy_Fish/"
                  class="underline text-saffron-darkest hover:text-saffron"
                >
                  Trophy Fish Program
                </a>
              </p>
              <div class="mt-6">
                <a
                  href="https://nevada.licensing.kalkomey.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-olive hover:bg-olive-darker text-white font-bold py-2 px-4 rounded"
                >
                  Buy a fishing license
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- if hasFishEntries === true -->
        <div v-else>
          <!-- stat container -->
          <div class="text-gray-700">
            <div class="w-100">
              <h2 class="text-2xl tracking-wide font-light">
                Water Records
              </h2>
              <stat-container
                :water-records="waterRecords"
                class="pt-10 pb-5"
              />
            </div>
          </div>

          <!-- trophy fish table -->
          <div class="w-100 mt-12">
            <!-- table description -->
            <div class="w-100 text-gray-700">
              <h2 class="text-2xl tracking-wide font-light">
                All Fish Entries
              </h2>
              <p class="text-lg font-thin text-gray-700 mt-4">
                The table below shows all the fish caught at {{ fishableWater.water_name }}
                and submitted to NDOW as part of the Trophy Fish Program. For more information
                about the Trophy Fish Program
                <a
                  href="http://www.ndow.org/Fish/Angler_Recognition/Trophy_Fish/"
                  target="_blank"
                  class="underline text-saffron-darkest hover:text-saffron"
                >
                  see this link
                </a>.
              </p>
            </div>

            <vue-good-table
              class="mt-6"
              mode="remote"
              :pagination-options="paginationOptions"
              :sort-options="{ enabled: false }"
              :columns="columns"
              :rows="rows"
              :total-rows="fishEntries.totalRecords"
              :row-style-class="rowStyles"
              @on-page-change="onPageChange"
              @on-per-page-change="onPerPageChange"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field === 'species'">
                  <nuxt-link
                    :to="{name: 'species-id', params: { id: props.row.species_id }}"
                    class="underline text-saffron-darker capitalize font-light"
                    prefetch
                  >
                    {{ props.row.species }}
                  </nuxt-link>
                </span>
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
            </vue-good-table>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { VueGoodTable } from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import GeoJsonMap from '@/components/geojson-map.vue'
import StatContainer from '@/components/elements/stat-container.vue'
import TailsTag from '@/components/elements/tails-tag.vue'
import NotificationDanger from '@/components/notification-danger.vue'
import NwContainer from '@/components/nearby-waters/nw-container.vue'

export default {
  components: {
    GeoJsonMap,
    StatContainer,
    TailsTag,
    VueGoodTable,
    NotificationDanger,
    NwContainer
  },

  async asyncData ({ params, $axios }) {
    const url = `/api/fishable-waters/${params.id}`

    const fishableWater = await $axios.$get(url)
    const fishEntries = await $axios.$get(`${url}/fish-entries?order=species&order=desc.fish_weight`)
    const waterRecords = await $axios.$get(`${url}/water-records`)
    const nearbyWaters = await $axios.$get(`${url}/nearby-waters`)

    return {
      fishableWater,
      fishEntries,
      waterRecords,
      nearbyWaters,
      url
    }
  },

  data () {
    return {
      columns: [
        {
          label: 'Angler Name',
          field: 'angler_name'
        }, {
          label: 'Species',
          field: 'species'
        }, {
          label: 'Pounds',
          field: 'pounds',
          type: 'number'
        }, {
          label: 'Ounces',
          field: 'ounces',
          type: 'number'
        }, {
          label: 'Angler State',
          field: 'angler_state'
        }, {
          label: 'Year',
          field: 'date_caught'
        }, {
          label: 'Trophy Status',
          field: 'trophy_status',
          hidden: true
        }, {
          label: 'species_id',
          field: 'species_id',
          hidden: true
        }
      ],
      paginationOptions: {
        enabled: true,
        perPage: 25,
        perPageDropdown: [15, 25, 50, 75],
        dropdownAllowAll: false
      },
      query: {
        columnFilters: {},
        sort: {
          field: '',
          type: ''
        },
        page: 1,
        perPage: 25
      }
    }
  },

  computed: {
    rows () {
      return this.fishEntries.data
        .map(m => {
          const dateCaught = new Date(m.date_caught)

          return {
            angler_name: m.angler_name,
            species: m.species,
            pounds: m.pounds,
            ounces: m.ounces,
            angler_state: m.angler_state,
            trophy_status: m.trophy_classification,
            species_id: m.species_id,
            date_caught: dateCaught.getFullYear()
          }
        }
      )
    },

    querystring () {
      let querystring = new URLSearchParams()

      // default ordering, don't change this for now
      querystring.append('order', 'species')
      querystring.append('order', 'desc.fish_weight')

      querystring.append('page', this.query.page || 1)
      querystring.append('per_page', this.query.perPage || 25)

      return querystring.toString()
    },

    hasFishEntries () {
      return this.fishEntries.data.length > 0
    },

    tags () {
      return [
        `${this.fishableWater.region} region`,
        `${this.fishableWater.county} county`,
        ...this.fishableWater.species
      ]
    }
  },

  methods: {
    updateQuery (props) {
      this.query = Object.assign({}, this.query, props)
    },

    onPageChange (params) {
      this.updateQuery({ page: params.currentPage })
      this.loadTable()
    },

    onPerPageChange (params) {
      this.updateQuery({ perPage: params.currentPerPage })
      this.loadTable()
    },

    async loadTable () {
      const url = `${this.url}/fish-entries?${this.querystring}`
      console.log(url)
      const data = await this.$axios.$get(url)
      this.fishEntries = data
    },

    rowStyles (row) {
      const styles = {
        'state record': 'bg-yellow-200',
        'water record': 'bg-blue-100',
        'trophy fish': 'bg-purple-100'
      }
      return styles[row.trophy_status]
    },

    previousPage () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#map {
  height: 66vh;
}

.img-container {
  width: 325px;
  height: 325px;
}

#img {
  mix-blend-mode: multiply;
}
</style>
