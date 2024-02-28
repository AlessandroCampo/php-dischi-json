const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            songList: [],
            single: undefined
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
        },
        getSingle(par) {
            const data = {
                single: par
            }
            axios.post(this.apiUrl, data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then((res) => {
                this.single = res.data

            })
        }
    }
}).mount('#app')