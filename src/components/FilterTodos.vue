<template>
    <div>
        Filter Todos:
        <select>
            <option value="5"></option>
            <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>

        </select>

    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "FilterTodos",
        methods: mapActions([" "])
    }
</script>

<style lang="scss" scoped>

</style>