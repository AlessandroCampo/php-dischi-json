const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            songList: []
        }
    },
    created() {
        this.getList()
    },
    methods: {

        getList(par) {
            axios.get(this.apiUrl).then((res) => {
                console.log(res.data)
                this.songList = res.data
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}).mount('#app')