<template>
    <div>
        <button @click="handleClick">121</button>
        {{number}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            number:1
        }
    },
    methods:{
        handleClick(){
            this.$emit('update', 2)
        }
    }
}
</script>

<style>

</style>
