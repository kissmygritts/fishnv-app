<template>
  <div class="text-gray-700 py-4">
    <h2 class="text-lg">
      Filter Fishable Waters
    </h2>
    <p
      class="text-sm text-saffron underline cursor-pointer"
      @click="clearFilters"
    >
      Clear Filters
    </p>
    <!-- species input -->
    <div class="mt-2 py-2">
      <label for="species">Select Species</label>
      <div class="relative inline-block w-full mt-1">
        <select
          id="species"
          v-model="species.selected"
          name="species"
          class="block appearance-none w-full bg-white px-4 py-3 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:shadow-outline"
          @change="selected"
        >
          <option
            v-for="(fish, index) in species.options"
            :key="index"
            :value="fish"
          >
            {{ toTitleCase(fish) }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
    <!-- water type -->
    <div class="py-2">
      <label for="water-type">Select Water Type</label>
      <div class="relative inline-block w-full mt-1">
        <select
          id="waterType"
          v-model="waterType.selected"
          name="water-type"
          class="block appearance-none w-full bg-white px-4 py-3 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:shadow-outline"
          @change="selected"
        >
          <option value="" />
          <option value="creek or stream">
            Creek or Stream
          </option>
          <option value="lake or reservoir">
            Lake or Reservoir
          </option>
          <option value="river">
            River
          </option>
          <option value="urban fishery">
            Urban Fishery
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>

    <!-- select by region -->
    <div class="py-2">
      <label for="water-type">Select NDOW Region</label>
      <div class="relative inline-block w-full mt-1">
        <select
          id="region"
          v-model="region.selected"
          name="region"
          class="block appearance-none w-full bg-white px-4 py-3 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:shadow-outline"
          @change="selected"
        >
          <option value="" />
          <option value="Eastern">
            Eastern
          </option>
          <option value="Southern">
            Southern
          </option>
          <option value="Western">
            Western
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>

    <!-- select by county -->
    <div class="py-2">
      <label for="water-type">Select County</label>
      <div class="relative inline-block w-full mt-1">
        <select
          id="county"
          v-model="county.selected"
          name="county"
          class="block appearance-none w-full bg-white px-4 py-3 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:shadow-outline"
          @change="selected"
        >
          <option value="" />
          <option value="Carson City">
            Carson City
          </option>
          <option value="Churchill">
            Churchill
          </option>
          <option value="Clark">
            Clark
          </option>
          <option value="Douglas">
            Douglas
          </option>
          <option value="Elko">
            Elko
          </option>
          <option value="Esmeralda">
            Esmeralda
          </option>
          <option value="Eureka">
            Eureka
          </option>
          <option value="Humboldt">
            Humboldt
          </option>
          <option value="Lander">
            Lander
          </option>
          <option value="Lincoln">
            Lincoln
          </option>
          <option value="Lyon">
            Lyon
          </option>
          <option value="Mineral">
            Mineral
          </option>
          <option value="Nye">
            Nye
          </option>
          <option value="Pershing">
            Pershing
          </option>
          <option value="Storey">
            Storey
          </option>
          <option value="Washoe">
            Washoe
          </option>
          <option value="White Pine">
            White Pine
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { removeNullish } from '@/assets/js/util.js'

export default {
  name: 'SearchContainer',

  data () {
    return {
      waterType: {
        selected: null
      },
      region: {
        selected: null
      },
      county: {
        selected: null
      },
      species: {
        selected: null,
        options: [
          '',
          'black crappie',
          'bluegill sunfish',
          'bonneville cutthroat trout',
          'bowcutt trout',
          'brook trout',
          'brown trout',
          'bull trout',
          'bullhead catfish',
          'carp',
          'channel catfish',
          'green sunfish',
          'kokanee salmon',
          'lahontan cutthroat trout',
          'largemouth bass',
          'mackinaw trout',
          'pumpkinseed',
          'rainbow trout',
          'redband trout',
          'redear sunfish',
          'sacramento perch',
          'smallmouth bass',
          'spotted bass',
          'striped bass',
          'tiger muskie',
          'tiger trout',
          'walleye',
          'white bass',
          'white catfish',
          'white crappie',
          'mountain whitefish',
          'wiper',
          'yellow perch',
          'yellowstone cutthroat trout'
        ]
      }
    }
  },

  computed: {
    searchFilters () {
      const filters = {
        species: this.species.selected,
        water_type: this.waterType.selected,
        region: this.region.selected,
        county: this.county.selected
      }

      return removeNullish(filters)
    }
  },

  methods: {
    selected (e) {
      this.$emit('selected', {
        params: this.searchFilters
      })
    },

    clearFilters () {
      this.waterType.selected = null
      this.species.selected = null
      this.region.selected = null
      this.county.selected = null

      // call selected method to run search
      this.selected()
    },

    toTitleCase (str) {
      return str
        .toLowerCase()
        .split(' ')
        .map((s) => {
          return s.charAt(0).toUpperCase() + s.slice(1)
        })
        .join(' ')
    }
  }
}
</script>

<style>
</style>
