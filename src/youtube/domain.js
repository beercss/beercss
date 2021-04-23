export default {
    data() {
        return {
            itens: [
                { title: "Alok 01/2021", image: "/alok-001.jpg" },
                { title: "Alok 01/2020", image: "/alok-002.jpg" },
                { title: "Best of 2021", image: "/vintage-001.jpg" },
                { title: "Best of 2020", image: "/vintage-002.jpg" },
                { title: "Radio online", image: "/radio-001.jpg" },
                { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
                { title: "Alok 01/2021", image: "/alok-001.jpg" },
                { title: "Alok 01/2020", image: "/alok-002.jpg" },
            ],
            whatsHot: [
                { title: "Best of 2021", image: "/vintage-001.jpg" },
                { title: "Best of 2020", image: "/vintage-002.jpg" },
                { title: "Radio online", image: "/radio-001.jpg" },
                { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
                { title: "Alok 01/2021", image: "/alok-001.jpg" },
                { title: "Alok 01/2020", image: "/alok-002.jpg" },
                { title: "Best of 2021", image: "/vintage-001.jpg" },
                { title: "Best of 2020", image: "/vintage-002.jpg" },
            ],
            yourVideos: [
                { title: "Radio online", image: "/radio-001.jpg" },
                { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
                { title: "Alok 01/2021", image: "/alok-001.jpg" },
                { title: "Alok 01/2020", image: "/alok-002.jpg" },
                { title: "Best of 2021", image: "/vintage-001.jpg" },
                { title: "Best of 2020", image: "/vintage-002.jpg" },
                { title: "Radio online", image: "/radio-001.jpg" },
                { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
            ],
            isLoaded: false
        }
    },
    created() {
        this.isLoaded = false;
    },
    mounted() {
        this.checkIfLoaded();
        ui();
    },
    methods: {
        checkIfLoaded() {
            const check = () => {
                let loaded = true;
                for (let i = 0; i < document.images.length; i++) {
                    if (!document.images[i].complete || !document.images[i].naturalHeight) {
                        loaded = false;
                        return setTimeout(check, 500);
                    }
                }
                this.isLoaded = loaded;
            }

            check();
        }
    }
}