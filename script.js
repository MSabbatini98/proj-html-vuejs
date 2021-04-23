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
        images : [
            "img/client-logos-1.png",
            "img/client-logos-2.png",
            "img/client-logos-3.png",
            "img/client-logos-4.png",
            "img/client-logos-1_modified.png",
            "img/client-logos-2_modified.png",
            "img/client-logos-3_modified.png",
            "img/client-logos-4_modified.png",
        ],
        index : 0,
        img_index_min : 0,
        img_index_max : 4,
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
        setInterval(() => {
            if(this.img_index_max == this.images.length) {
                this.img_index_max = 0;
            } else {
                this.img_index_max++;
            }
            if(this.img_index_min  == this.images.length) {
                this.img_index_min = 0;
            }else { 
                this.img_index_min++;
            }

        }, 2000);
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

  