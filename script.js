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
        view: {
            topOfPage: true
        },
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    mounted () {
        console.log("23");

    },
    methods: {
        handleScroll(){
          if(window.pageYOffset>0){
            if(this.view.topOfPage) this.view.topOfPage = false
          } else {
            if(!this.view.topOfPage) this.view.topOfPage = true
          }
        }
      }
    }


)
// alert("hello");

  