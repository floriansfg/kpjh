
<template>
    <div>
        <div class="text-center">
            <h3>Unser Vorstand</h3>
        </div>
        <div class="board">
            <img
                class="logo"
                src="~/assets/board.jpeg"
            />
            <div class="board-members">
                <div>1. Vorsitzender: Paul Vornhusen</div>
                <div>2. Vorsitzender: Max Gerber</div>
                <div>Kassiererin: Pia Bexkens</div>
                <div>Materialwartin: Rebekka Schiffers</div>
                <div>Beisitzerin: Lea Gielen</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.board {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'image board-members';
    margin: 5rem 0;
}
.logo {
    max-width: 350px;
    grid-area: image;
    border-radius: 5%;
    @media (min-width: 901px) {
        transform: rotate(-5deg) translateX(-25px);
    }
}
.board-members {
    grid-area: board-members;
    margin: 2rem;
    display: flex;
    gap: 15px;
    flex-direction: column;
}
@media (max-width: 900px) {
    .board {
        display: block;
        margin-top: 3rem;
        .board-members {
            margin-top: 5rem;
        }
    }
} 
</style>