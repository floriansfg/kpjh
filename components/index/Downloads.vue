<template>
    <div class="container">
        <div class="text-center pb-2">
            <h3>Aktuelle Downloads</h3>
        </div>
        <div class="downloads" v-for="download in downloads">
            <div class="download-grid" @click="downloadPdf(download)">
                <p :href="download.pdf.url">{{ download.title }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="lightgrey" class="downloadButton" @click="downloadImage(clickedImage)" fill="currentColor" viewBox="-1 -1 19 19">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import pkg from 'file-saver'; 
const { saveAs } = pkg;

    export default {
        props: [
		    'downloads'
	    ],
        methods: {
            downloadPdf(pdfToDownload) {
                saveAs(pdfToDownload.pdf.url, pdfToDownload.title);
		    }
        }
    }
</script>
<style lang="scss" scoped>

.container {
    padding: 4rem 0;
}
p {
	text-decoration: none;
    color: black;
    grid-area: title;
    margin: 0;
}


svg{
    grid-area: svg;
    width: 20px;
    justify-self: right;
}

.download-grid {
    background-color: white;
    border-radius: 10px;
    padding: 4px 1.5rem;
    display: grid;
	font-size: 1rem;
	margin: 1rem auto;
    width: 80%;
    max-width: 350px;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    'title svg';
}
.download-grid:hover {
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}


</style>