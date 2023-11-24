<template>
    <div class="view">
        <div class="header">
            <svg
                viewBox="0 0 1440 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M381.765 99.5C236.064 99.5 70.549 125.567 0 138.6V0H1440V114.522C1373.95 109.515 1255.77 138.6 1021.21 138.6C728.005 138.6 563.892 99.5 381.765 99.5Z"
                    fill="var(--primaryBg)"
                />
            </svg>
            {{ titel }}
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titel: {
            type: String,
            required: true,
        },
    }
}
</script>
<style scoped>
.header {
    background-color: #304c5c;
    background-color: var(--primaryBg);
    text-align: center;
    margin: 0;
    color: white;
    font-size: 25pt;
    font-weight: 400;
    padding: 70px 0;
    position: relative;
    height: 100px;
    transition: all 0.5s ease;
    padding-top: 150px;
}

.header svg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 40px;
    top: 99%;
    z-index: -1;
    filter: drop-shadow(0px 0px 16px rgb(0 0 0 / 0.5));
}

.content {
    max-width: var(--contentWidth);
    margin: auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media (max-width: 901px) {
    .header {
        font-size: 20pt;
        padding-top: 120px;
    }
}
</style>
