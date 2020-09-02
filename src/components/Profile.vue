<template>
    <div>
        <h1>Profil {{dokter.name}}</h1>
        <div class="profile-card">
            <div class="personal">
                <img src="https://picsum.photos/200" alt="">
                <div>
                    <div>
                        <h3>{{dokter.name}}</h3>
                        <h3>Dokter {{dokter.specialist}}</h3>
                    </div>
                </div>
            </div>
            <div class="job-info">
                <h3>Rumah Sakit: {{dokter.rumah_sakit}}</h3>
                <h3>Nomor Dokter: {{dokter.id}}</h3>
                <h3 v-if="dokter.specialist == 'umum'" >Specialist: -</h3>
                <h3 v-if="dokter.specialist != 'umum'" >Specialist: {{dokter.specialist}}</h3>
                <h3>Penyakit Terkait: {{dokter.penyakit}}</h3>
                <h3>Keahlian: {{dokter.keahlian}}</h3>
                <button v-on:click="handleClick()">Buat Janji Sekarang!</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Profile',
    data(){
        return {
            dokter: {}
        }
    },
    methods:{
        handleClick(){
            alert('Upss, fitur ini belum tersedia. Silakan hubungi tim kami! ^^')
        }
    },
    created(){
        // console.log('from profile page', this.$route.params.specialist, this.$route.params.id)
        axios.get(`http://localhost:3000/dokter/${this.$route.params.specialist}/${this.$route.params.id}`)
            .then(res => {
                this.dokter = res.data.dokter
                let list_penyakit = ''
                let list_keahlian = ''
                for (let i = 0; i < this.dokter.penyakit.length; i++) {
                    list_penyakit += this.dokter.penyakit[i]
                    if (i != this.dokter.penyakit.length-1) {
                        list_penyakit += ', '
                    }
                }
                for (let i = 0; i < this.dokter.keahlian.length; i++) {
                    list_keahlian += this.dokter.keahlian[i]
                    if (i != this.dokter.keahlian.length-1) {
                        list_keahlian += ', '
                    }
                }
                this.dokter.penyakit = list_penyakit
                this.dokter.keahlian = list_keahlian
                console.log('hasil get', this.dokter)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>

<style scoped>
    .profile-card{
        width: 100%;
        display: flex;
        margin-bottom: 80px;
    }

    .profile-card .personal{
        width: 30%;
    }

    .profile-card .personal img{
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    .profile-card .job-info{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        border-radius: 10px;
    }

    .profile-card .job-info h3{
        border-bottom: 1px solid rgb(209, 209, 209);
        width: 100%;
    }

    .profile-card .job-info button{
        border: none;
        width: 150px;
        height: 60px;
        font-size: 18px;
        border-radius: 10px;
        font-weight: bold;
        background: rgb(59, 199, 209);
        color: white;
        transition: 0.5s;
    }

    .profile-card .job-info button:hover{
        background: rgb(64, 223, 235);
        cursor: pointer;
    }

    @media (max-width: 768px){
        .profile-card{
            flex-direction: column;
        }

        .profile-card .personal{
            width: 100%;
        }

        .profile-card .job-info{
            width: 100%;
            align-items: center;
        }

        .profile-card .job-info h3{
            width: 90%;
        }
    }
</style>