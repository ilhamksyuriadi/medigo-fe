<template>
    <div class="home-layout">
        <h4>Atur jadwal dengan dokter mu segampang update status!</h4>
        <router-link to="/dokter">
            <div class="nav-card-dokter">
                <div class="content">
                    <img src="../assets/magnifying-glass.png" alt="">
                    <h2>Cari Dokter</h2>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .nav-card-dokter{
        width: 250px;
        height: 80px;
        background: rgb(255, 255, 255);
        color: rgb(94, 94, 94);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        box-shadow: 0px 0px 2px 1px #51a8fa;
        transition: 0.3s;
    }

    .nav-card-dokter:hover{
        background: rgb(150, 213, 255);
        box-shadow: 0px 0px 2px 4px #51a8fa;
        color: white;
    }

    .nav-card-dokter .content img{
        width: 40px;
        height: 40px;
    }

    .nav-card-dokter .content{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
    }

    .home-layout{
        width: 100%;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>