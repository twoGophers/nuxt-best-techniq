<template>
    <div class="slider container">
        <div class="slider__head">
            <h3 class="slider__title">Новые поступления</h3>
            <div class="slider__navigation">
                <div class='slick-prev'></div>
                <div class="slick-next"></div>
            </div>
        </div>
        <slick
            class="slider__slick"
            ref="slick"
            :options="slickOptions" 
            v-if="PRODUCTS.length"
            >
            <Card 
                v-for="item in PRODUCTS" 
                :key="item.id"
                :product_data="item"
                />
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';
import Card from "../card/Card.vue";
import 'slick-carousel/slick/slick.css';

import {mapGetters, mapActions} from "vuex";
export default {
    components: { Slick, Card },

    data() {
        return {
            slickOptions: {
                slidesToShow: 6,
                infinite: false,
                arrow: true,
                nextArrow: '.slick-next',
                prevArrow: '.slick-prev',
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 860,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 560,
                        settings: {
                            slidesToShow: 1.3,
                        }
                    },
                ]
                // Any other options that can be got from plugin documentation
            },
        };
    },

    computed: {
    ...mapGetters([
            'PRODUCTS'
        ]),
    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
    },

    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then(response => {
        console.log(response);
      })
  },
}
</script>

<style>
    .container {
        max-width: 1719px;
        margin: 0 auto;
        padding: 0px 100px;
    }

    .slick-arrow {
        cursor: pointer;
        height: 15px;
        width: 18px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .slick-prev {
        background: url('../../assets/images/leftArrowBl.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .slick-prev[aria-disabled=true] {
        background:url('../../assets/images/leftArrow.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .slick-next {
        background: url('../../assets/images/rigthArrowBl.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .slick-next[aria-disabled=true]  {
        background:url('../../assets/images/rigthArrow.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .slider__navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 66px;
    }
    
    .slider__head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 0px;
    }

    .slider__title {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 40px;
        color: #000000;
    }

    .slick-slide {
        margin-right: 20px;
    }

    .slider__slick {
        display: grid;
    }

@media screen and (max-width: 860px) {
    .container {
        padding: 0px 50px;
    }
}

@media screen and (max-width: 560px) {
    .container {
        padding: 0px 18px;
    }
}

@media screen and (max-width: 390px) {
    .slick-arrow  {
        display: none;
    }
    .slider__title {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
        color: #000000;
    }
}
</style>