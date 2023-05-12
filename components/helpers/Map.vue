<template>
	<l-map v-if="showMap" :useGlobalLeaflet="false" :zoom="zoom" :center="location" :options="{ dragging: false,zoomControl: false,scrollWheelZoom: false,doubleClickZoom: false,boxZoom: false,attributionControl: false}">
		<l-tile-layer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"/>
		<l-marker v-if="location" :lat-lng="location">
			<l-icon iconUrl="/img/location.svg" :iconSize="[35,35]" />
		</l-marker>
	</l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
    },
	props: ['location'],
    data() {
        return {
            zoom: 14,
			showMap: false
        };
    },
	async mounted() {
		await nextTick()
		let that = this
		setTimeout(function() { 
			that.showMap = true;
		}, 1000);
	}
};

// urls:
// https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
// https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png
// https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png
</script>
