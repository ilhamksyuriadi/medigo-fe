<template>
    <div class="home-layout">
        <h4>Pilih doktermu sesuai speacialistnya</h4>
        <router-link to="/dokter/umum">
            <div class="nav-card-dokter">
                <div class="content">
                    <img src="../assets/edit.png" alt="">
                    <h2>Dokter Umum</h2>
                </div>
            </div>
        </router-link>
        <router-link to="/dokter/gigi">
            <div class="nav-card-dokter">
                <div class="content">
                    <img src="../assets/tooth.png" alt="">
                    <h2>Dokter Gigi</h2>
                </div>
            </div>
        </router-link>
        <router-link to="/dokter/jantung">
            <div class="nav-card-dokter">
                <div class="content">
                    <img src="../assets/cardiogram.png" alt="">
                    <h2>Dokter Jantung</h2>
                </div>
            </div>
        </router-link>
        <router-link to="/dokter/kulit">
            <div class="nav-card-dokter">
                <div class="content">
                    <img src="../assets/beauty-treatment.png" alt="">
                    <h2>Dokter Kulit</h2>
                </div>
            </div>
        </router-link>
        <router-link to="/dokter/tht">
            <div class="nav-card-dokter">
                <div class="content">
                    <img src="../assets/ear.png" alt="">
                    <h2>Dokter THT</h2>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Dokter'
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }

    .nav-card-dokter{
        width: 290px;
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
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>