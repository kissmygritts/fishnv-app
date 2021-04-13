<template>
  <div class="bg-white shadow-lg overflow-hidden rounded-md">
    <ul class="divide-y divide-gray-200">
      <nw-list-item
        v-for="water in nearbyWaters"
        :key="water.id"
        :water-id="water.id"
      >
        <template v-slot:title>
          {{ water.water_name }}
        </template>
        <template v-slot:subtitle>
          {{ water.distance }} miles away
        </template>
      </nw-list-item>
    </ul>
  </div>
</template>

<script>
import NwListItem from './nw-list-item.vue'

export default {
  name: 'NwContianer',

  components: {
    NwListItem
  },

  props: {
    nearbyWaters: {
      type: Array,
      required: true
    }
  }
}
</script>
