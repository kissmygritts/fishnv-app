<template>
  <l-map ref="map" :center="center" :zoom="zoom" @ready="ready">
    <l-control
      class="inline-flex items-center leaflet-bar leaflet-control"
      position="topleft"
    >
      <button @click="zoomToLocation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#56765a"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="8" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="2" y1="12" x2="4" y2="12" />
        </svg>
      </button>
    </l-control>
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
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      tiles: [
        {
          name: 'Topo',
          visible: true,
          url:
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
        },
        {
          name: 'Satelitte',
          visible: false,
          url:
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        }
      ],
      center: [38.64954285997146, -116.77592011899117],
      zoom: 6,
      geolocation: undefined
    }
  },

  computed: {
    hasGeoJson() {
      return Object.keys(this.geojson).length > 0
    },

    onEachFeature() {
      return (feature, layer) => {
        // add hover tooltip
        layer.bindTooltip(feature.properties.water_name, {
          permanent: false,
          sticky: true
        })

        // add on click navigation
        layer.on({
          click: () => {
            this.$router.push({
              path: `/fishable-waters/${feature.properties.id}`,
            })
          }
        })
      }
    },

    options() {
      return {
        onEachFeature: this.onEachFeature
      }
    },

    styleFunction() {
      return () => ({
        weight: 5,
      })
    },

    // geolocation details
    hasGeolocation() {
      const { geolocation } = this
      return (
        typeof geolocation === 'object' && Object.keys(geolocation).length > 0
      )
    },

    myCoordinates() {
      if (!this.hasGeolocation) return undefined
      const { latitude, longitude } = this.geolocation
      return [latitude, longitude]
    },
  },

  async mounted() {
    const { coords } = await geolocate()
    this.geolocation = { ...coords }

    this.zoomToLocation()
  },

  methods: {
    ready() {
      this.$emit('ready')
    },

    zoomToLocation() {
      this.$refs.map.mapObject.flyTo(this.myCoordinates, 12)
    },
  }
}
</script>

<style scoped>
#map {
  height: 100vh;
}

/* duplicate leaflet styles to apply to <button> and <a> tags */
.leaflet-bar button,
.leaflet-bar button:hover {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  width: 26px;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
}
.leaflet-bar button,
.leaflet-control-layers-toggle {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: block;
}
.leaflet-bar button:hover {
  background-color: #f4f4f4;
}
.leaflet-bar button:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.leaflet-bar button:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: none;
}
.leaflet-bar button.leaflet-disabled {
  cursor: default;
  background-color: #f4f4f4;
  color: #bbb;
}

.leaflet-touch .leaflet-bar button {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.leaflet-touch .leaflet-bar button:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.leaflet-touch .leaflet-bar button:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
</style>
