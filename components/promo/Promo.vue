<template>
    <div>
        <p class="promo">{{promo[0].text}}</p>
    </div>
</template>

<script>
export default {
    props : {
        promo: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>
.promo {
    color: #fff;
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
}
</style>