<template>
  <div class="text-gray-700 py-4">
    <h2 class="text-lg">
      Filter Fishable Waters
    </h2>
    <p
      class="text-sm text-orange-700 underline cursor-pointer"
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
        >
          <option value="" />
          <option value="creek">
            creek
          </option>
          <option value="stream">
            stream
          </option>
          <option value="river">
            river
          </option>
          <option value="pond">
            pond
          </option>
          <option value="lake">
            lake
          </option>
          <option value="reservoir">
            reservoir
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
          'cutthroat',
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
        water_type: this.waterType.selected
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
select,
select option {
  text-transform: capitalize
}
</style>
