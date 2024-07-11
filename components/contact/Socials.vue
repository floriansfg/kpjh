<template>
    <div>
        <div class="text-center mt-5">
            <h3>Hier findest du uns</h3>
        </div>
        <div class="socials">
            <div class="contacts">
                
                <div class="line">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                    </svg>
                    <p>Schreib uns gerne eine Mail</p>
                </div>
                <a href="mailto:info@kpjh.de">info@kpjh.de</a>
                
                <div class="line">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                    </svg>
                    <p>Besuchen kannst du uns hier:</p>
                </div>
                <p style="margin-left:30px;">Herrenweg 6, 47839 Krefeld-Hüls</p>
                
                <div class="line">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                    <p>Spannende Bilder gibt es hier:</p>
                </div>
                <a href="https://www.instagram.com/kpjhuels">www.instagram.com/kpjhuels</a>
                
                <div class="line">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                    </svg>
                    <p>Die neuesten News posten wir hier:</p>
                </div>
                <a href="https://www.facebook.com/kpjh.huels/">www.facebook.com/kpjhuels</a>
            </div>

            <div>
                <img src="/images/runningkids.jpg"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.socials {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 'contacts img';
    margin: 5rem 0 7rem 0;

    img {
        max-width: 600px;
        padding: 3rem;
        margin: auto;
        grid-area: img;
        border-radius: 70px;
        @media (min-width: 901px) {
        transform: rotate(+5deg) translateX(+25px);
        }
    }

    .contacts {
    grid-area: contacts;
    display: flex;
    flex-direction: column;
    
        .line {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            margin-top: 3rem;
        }

        svg {
            width: 20px;
            flex-shrink: 0;
        }
        a {
            color: black;
            margin-left: 30px;
        }
        p {
            margin: 0;
        }
    }
}

@media (max-width: 900px) {
    .socials{
        display: block;
        margin: 0 0 5rem 0;
        .contacts{
            padding: 2rem;
        }
        img {
            width: 100%;
            padding: 1rem;
            border-radius: 30px;
            margin: 3rem 0;
        }
    }
} 
</style>
