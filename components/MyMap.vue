
<template>
  <select id="type" v-model="drawType">
    <option value="Point">Point</option>
    <option value="LineString">LineString</option>
    <option value="Polygon">Polygon</option>
    <option value="Circle">Circle</option>
  </select>
  <input type="checkbox" id="checkbox" v-model="drawEnable" />
  <label for="checkbox">描画を有効にする</label>

  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <!-- 地図 -->
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @zoomChanged="zoomChanged"
      @centerChanged="centerChanged"
      @resolutionChanged="resolutionChanged"
      @rotationChanged="rotationChanged"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <!-- ベクターレイヤ -->
    <ol-vector-layer>
      <ol-source-vector :projection="projection">
        <ol-interaction-draw
          v-if="drawEnable"
          :type="drawType"
          @drawend="drawend"
          @drawstart="drawstart"
        >
        </ol-interaction-draw>
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
        <ol-style-circle :radius="7">
          <ol-style-fill color="blue"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>
  </ol-map>

  <div>
    <!-- なぜか情報が取れない -->
    <!-- center : {{currentCenter}} zoom : {{currentZoom}} resolution :
    {{currentResolution}} rotation : {{currentRotation}} -->
  </div>
</template>

<style scoped>
@import "vue3-openlayers/dist/vue3-openlayers.css";
</style>

<script >
import { ref } from "vue";
export default {
    setup() {
        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const rotation = ref(0)

        const drawEnable = ref(true)
        const drawType = ref("Point")

        const drawstart = (event) => {
            console.log(event)

        }

        const drawend = (event) => {
            console.log(event)
        }

        return {
            center,
            projection,
            zoom,
            rotation,
            drawEnable,
            drawType,
            drawstart,
            drawend
        }
    },
    data() {
    return {
      currentCenter: this.center,
      currentZoom: this.zoom,
      currentResolution: this.resolution,
      currentRotation: this.rotation,
    };
  },
  methods: {
    zoomChanged(currentZoom) {
      this.currentZoom = currentZoom;
    },
    resolutionChanged(resolution) {
      this.currentResolution = resolution;
    },
    centerChanged(center) {
      this.currentCenter = center;
    },
    rotationChanged(rotation) {
      this.currentRotation = rotation;
    },
  },
};
</script>
