export const mixins = {
    data(){
        return {

        }
    },
    computed:{

    },
    created() {
        
    },
    mounted() {
        console.log(this)
    },
    methods:{
        goHome(){
            this.$router.push("/home")
        }
    }
}