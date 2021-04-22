var vue_box = new Vue(
    {

    el : "#vue_box",
    data :{
        contacts : {
            address : "121 King Street",
            city : "London",
            nation : "United Kingdom",
            phone : "1.800.458.556",
        },
        link_list : [
            "home",
            "about",
            "departments",
            "articles"
        ],
        departments : [
            "Cardiology",
            "Pediatrics",
            "Diabetes Care",
            "Pre-natel Care",
            "Ultrasound Echocardiogram"
        ],
    },
    methods:{

    },
    mounted () {
        console.log("23");
    },
    }


)
// alert("hello");