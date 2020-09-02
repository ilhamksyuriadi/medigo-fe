<template>
    <div>
        <h1>Dokter {{this.$route.params.specialist}}</h1>
        <div v-if="this.dokters.length" class="dokter-layout">
            <div v-for="dokter in dokters" :key="dokter.id" class="dokter-card">
                <div class="info">
                    <div>
                        <img src="../assets/doctor.png" alt="">
                        <p>{{dokter.name}}</p>
                    </div>
                    <div>
                        <img src="../assets/hospital.png" alt="">
                        <p>{{dokter.rumah_sakit}}</p>
                    </div>
                    <div>
                        <img src="../assets/clock.png" alt="">
                        <p>{{dokter.work_hour}}</p>
                    </div>
                </div>
                <div class="detail">
                    <router-link :to="{path: `/dokter/${specialist}/${dokter.id}`}">
                        <div class="detail-button">
                            <h2>Lihat Detail</h2>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <h3>No Data.</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Specialist',
    data(){
        return {
            dokters: [],
            specialist: ''
        }
    },
    created(){
        axios.get(`http://localhost:3000/dokter/${this.$route.params.specialist}`)
            .then(res => {
                this.specialist = this.$route.params.specialist;
                this.dokters = res.data.dokter_specialist;
                console.log(this.dokters);
            })
            .catch(err => {
                console.log(err);
            })
    }
}
</script>

<style scoped>
    .dokter-layout{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dokter-layout .dokter-card{
        background: rgb(255, 255, 255);
        width: 50%;
        height: 150px;
        margin-bottom: 20px;
        border-radius: 6px;
        box-shadow: 1px 1px 1px 1px rgb(173, 173, 173);
        display: flex;
    }

    .dokter-layout .dokter-card .info{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .dokter-layout .dokter-card .info div{
        display: flex;
        background: rgba(224, 249, 255, 0.473);
        width: 90%;
        border-bottom: 1px solid rgb(190, 190, 190);
        align-items: center;
    }

    .dokter-layout .dokter-card .info div p {
        margin: 0 0 0 10px;
    }

    .dokter-layout .dokter-card .detail{
        width: 50%;
        background: rgb(203, 228, 238);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
    }

    .dokter-layout .dokter-card .detail .detail-button{
        width: 150px;
        background: white;
        color: rgb(19, 78, 165);
        border-radius: 15px;
        box-shadow: 1px 1px 1px 1px rgb(0, 103, 129);
        transition: 0.5s;
    }

    .dokter-layout .dokter-card .detail .detail-button:hover{
        box-shadow: 1px 1px 5px 8px rgb(131, 211, 231);
        color: rgb(255, 255, 255);
        background: rgb(19, 78, 165);;
    }

    @media (max-width: 768px) {
        .dokter-layout .dokter-card{
            width: 90%;
        }

        .dokter-layout .dokter-card .info div p{
            font-size: 12px;
        }
    }
</style>