<template>
    <div class="card">
        <div class="card__body">
            <a :href="product_data.url">
                <div class="card__img">
                    <p :style="[product_data.stickers[0].type === 'promo' ? {background: '#7F65B7'} : {background: '#6776B7'}]" class="card__promo">
                        <Promo :promo="product_data.stickers" />
                    </p>
                    <div class="card__img">
                        <img :src="product_data.image" alt="">
                    </div>
                </div>
            </a>
            <p class="card__articul">{{product_data.article}}</p>
            <p class="card__content">{{product_data.category}}</p>
            <p class="card__name">{{product_data.title}}</p>
            <div class="card__rating">
                <client-only placeholder="loading...">
                    <vue-star-rating 
                        :rating = product_data.rating
                        :star-size = 17
                        :rounded-corners = true
                        :show-rating = false
                        :padding = 5
                        class="card__rating-block"
                    />
                </client-only>
            </div>
            <div class="card__content-mobile">
                <p :style="[product_data.prices.rrc.old_price ? {opacity : 1} : {opacity: 0}]" class="card__old-price">{{product_data.prices.rrc.old_price}} руб.</p>
                <p class="card__new-price">{{(product_data.prices.rrc.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}} руб.</p>
                <div class="card__price-mobile">
                    <span>{{(product_data.prices.opt.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}} руб.</span>
                    <p>{{product_data.prices.opt.title}}: <span>{{(product_data.prices.opt.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}} руб.</span></p>
                    <p>Скидка: <span>{{product_data.reviews}}%</span></p>
                </div>
                <div class="card__button button">
                    <button class="botton__basket">
                        <img src="../../assets/images/Cart.svg" alt="../../assets/images/Cart.svg">
                    </button>
                    <div class="botton__nav">
                        <div class="botton__favourites" @click="heartFavorite">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66275 13.2136L9.82377 19.7066C11.0068 20.9533 12.9932 20.9533 14.1762 19.7066L20.3372 13.2136C22.5542 10.8771 22.5543 7.08892 20.3373 4.75245C18.1203 2.41598 14.5258 2.41598 12.3088 4.75245V4.75245C12.1409 4.92935 11.8591 4.92935 11.6912 4.75245V4.75245C9.47421 2.41598 5.87975 2.41598 3.66275 4.75245C1.44575 7.08892 1.44575 10.8771 3.66275 13.2136Z" :stroke="favorite ? 'red' : '#D2D2D2'" stroke-width="1.5"/>
                            </svg>
                        </div>
                        <div class="botton__chart">
                            <img src="../../assets/images/BarChart.svg" alt="../../assets/images/BarChart.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Promo from '../promo/Promo.vue';;

export default {
    components: { Promo },
    props :{
        product_data: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            favorite: false,
        }
    },

    methods: {
        heartFavorite() {
            this.favorite = !this.favorite;
        }
    }
}
</script>

<style >
    .card {
        border-radius: 5px;
        border: 1px solid #EEEEEE;
        height: max-content;
        display: flex;
    }
    .card__body {
        margin: 30px;
    }
    .card__img {
        position: relative;
        display: flex;
    }

    .card__promo {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        border-radius: 22px;
        padding: 0px 18px;
    }
    .card__img {
        display: flex;
        width: 100%;
        height: 193px;
        justify-content: center;
        align-items: center;
    }

    .card__img img{
        display: flex;
        width: 50%;
    }

    .card__articul {
        margin-top: 23px;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: #969696;
    }

    .card__content {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        height: 48px;
    }

    .card__name {
        display: none;
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #000000;
    }

    .card__old-price {
        margin-top: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        text-decoration-line: line-through;
        color: #959595;
    }

    .card__new-price {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #000000;
    }

    .button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 23px;
    }

    .botton__nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 30%;
    }

    .botton__basket {
        border: none;
        background: #2E3B6E;
        border-radius: 10px;
        padding: 14px 30px;
    }
    
    .botton__favourites, .botton__chart {
        cursor: pointer;
    }

    .card__rating {
        margin-top: 10px;
        margin-left: -5px;
    }

    .card__price-mobile {
        display: none;
    }

@media screen and (max-width: 390px) {
    .card__body {
        margin: 20px;
        position: relative;
    }
    .slick-arrow  {
        display: none;
    }
    .card__articul {
        text-align: center;
    }
    .card__content {
        display: none;
    }
    .card__img {
        height: 110px;
    }
    .card__rating {
        display: none;
    }
    .card__old-price, .card__new-price {
        display: none;
    }
    .card__price-mobile {
        display: flex;
        flex-direction: column;
    }
    .card__price-mobile p {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 28px;
        color: #ADADAD;
        margin: 0;
    }
    .card__price-mobile span {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 28px;
        color: #000000;
    }
    .card__content-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .botton__nav {
        position: absolute;
        top: 0;
        right: 0;
        flex-direction: column;
        width: fit-content;
        height: 20%;
        align-content: space-between;
    }
    .botton__basket {
        padding: 13px;
    }
    .button {
        margin-top: 0px;
    }
    .card__img {
        width: 90%;
    }
    .card__name {
        margin-top: 9px;
        margin-bottom: 10px;
        display: flex;
        text-align: center;
        justify-content: center;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.3em;
    }
}
</style>