const app = Vue.createApp({
    data() {
        return {
            // product: 'Socks',
            // image: '/assets/images/socks_blue.jpg',
            // inStock: true,
            // details: ['50% cotton', '30% wool', '20% polyester']
            // bulbOn: "/assets/images/VID-20220415-WA0006.mp4",
            // bulbOff: "/assets/images/last.jpeg",
            // socks: "/assets/images/socks_blue.jpg",
            // tv: "/assets/images/tv-frame-gray.png",
            // buttonLight: true,

            tvOn: false,
            station: "/assets/images/gif-1.gif",
            station1:  "/assets/images/gif-1.gif",
            station2:  "/assets/images/gif-2.gif",
            station3:   "/assets/images/gif-4.gif",
            station4:   "/assets/images/gif-5.gif"  ,
            channel: 0,
            myStations: [
                {id:1, station: "/assets/images/gif-1.gif"},
                {id:2, station:  "/assets/images/gif-2.gif"},
                {id:3, station:  "/assets/images/gif-4.gif"},
                {id:4, station:  "/assets/images/gif-5.gif"},
            ]
        }
    },
    methods:{
        power(){
            if(this.tvOn){
                this.tvOn = false
            }else{
                this.tvOn = true
            }
        },
        nextChannel(){
            if(this.station = this.station1){
                this.station = this.station2
            }else if(this.station = this.station2){
                this.station = this.station3
            }else if(this.station = this.station3){
                this.station = this.station4
            }
        },
        prevChannel(){
            if(this.station = this.station2){
                this.station = this.station1
            }else if(this.station = this.station2){
                this.station = this.station3
            }else if(this.station = this.station3){
                this.station = this.station4
            }
        },

        player(){
            this.station = this.station[this.myStations].station
            this.myStations +=1
        }
    }
})
