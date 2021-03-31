<template>
  <l-map
    ref="map"
    :center="center"
    :zoom="zoom"
    @ready="ready"
  >
    <l-control-layers position="topright" />
    <l-tile-layer
      v-for="tile in tiles"
      :key="tile.name"
      :name="tile.name"
      :visible="tile.visible"
      :url="tile.url"
      layer-type="base"
    />
    <l-control-scale position="bottomleft" :imperial="true" :metric="false" />
    <l-geo-json
      v-if="hasGeoJson"
      ref="geojson"
      :geojson="geojson"
      :options="options"
      :options-style="styleFunction"
    />
  </l-map>
</template>

<script>
import { geolocate } from '@/lib/geolocation.js'

/* eslint-disable */
export default {
  name: 'FishableWatersMap',

  props: {
    geojson: {
      type: Object,
      required: false,
      default () { return {} }
    }
  },

  data () {
    return {
      tiles: [
        {
          name: 'Topo',
          visible: true,
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
        }, {
          name: 'Satelitte',
          visible: false,
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        }
      ],
      center: [38.64954285997146, -116.77592011899117],
      zoom: 6,
      geolocation: undefined
    }
  },

  computed: {
    hasGeoJson () {
      return Object.keys(this.geojson).length > 0
    },

    onEachFeature () {
      return (feature, layer) => {
        // add hover tooltip
        layer.bindTooltip(
          feature.properties.water_name,
          {
            permanent: false,
            sticky: true
          }
        )

        // add on click navigation
        layer.on({
          click: () => {
            this.$router.push({
              path: `/fishable-waters/${feature.properties.id}`
            })
          }
        })
      }
    },

    options () {
      return {
        onEachFeature: this.onEachFeature
      }
    },

    styleFunction () {
      return () => ({
        weight: 5
      })
    },

    // geolocation details
    hasGeolocation () {
      const { geolocation } = this
      return typeof geolocation === 'object' && Object.keys(geolocation).length > 0
    },

    myCoordinates () {
      if (!this.hasGeolocation) return undefined
      const { latitude, longitude } = this.geolocation
      return [latitude, longitude]
    }
  },

  async mounted () {
    const { coords } = await geolocate()
    this.geolocation = { ...coords }

    this.zoomToLocation()
  },

  methods: {
    ready () {
      this.$emit('ready')
    },

    zoomToLocation () {
      this.$refs.map.mapObject.flyTo(this.myCoordinates, 12)
    }
  }
}
</script>

<style>
#map {
  height: 100vh;
}
</style>
