<template>
    <div class="bio">
        <div class="profile">
            <img src="https://github.com/isadorastan/my-linktree/blob/master/assets/profile.png?raw=true">
            <p><b>Isadora Stangarlin</b></p>
            <p>💻 Frontend Developer</p>
        </div>

        <div class="medias">
            <div class="card"><a href="https://github.com/isadorastan"> Github</a></div>
            <div class="card"><a href="https://www.youtube.com/channel/UCRhKK6VrISnIWPJjYxBPKnA">Youtube</a></div>
            <div class="card"><a href="https://t.me/papodedev1">Telegram</a></div>
        </div>

        <div class="card" style="background-color:#7A79FF">
            <router-link to="frontstart">🚨 Lista de espera FrontStart</router-link>
        </div>

        <div class="card" style="background-color:#58ecfc">
            <a href="https://pingback.com/papodedev/">📖 Leia meus artigos no Pingback</a>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .bio {
        color: white;
        max-width: 400px;
        margin: auto;
        padding: 20px;

        .profile {
            margin-top: 50px;
            text-align: center;
            margin-bottom: 30px;

            img {
                width: 104px;
                height: 104px;
                border-radius: 50%;
                object-fit: cover;
                margin-bottom: 10px;
            }
            
            p {
                margin: 0;
            }
        }

        .card {
            padding: 16px 30px;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;

            & + .card {
                margin-top: 15px;
            }

            a {
                text-decoration: none;
                color: white;
            }
        }

        .medias {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;

            .card {
                background: #160F30;
                width: 100%;
                text-align: center;
                padding: 16px;
            }

            .card + .card {
                margin-top: 0;
                margin-left: 5px;
            }
        }
    }
</style>