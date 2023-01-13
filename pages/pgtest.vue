<template>
    <div>
        <h1>Postgres test Page</h1>
        <ul>
            <!-- 登録済データを確認 -->
            <li v-for="lin in lins" :key="lin.id">{{ lin.geom }}</li>
        </ul>
        <form @submit.prevent="addData">
            <input v-model="lin" />
            <button type="submit">登録</button>
        </form>
    </div>
    <BtnLogin />  <BtnLogout />
</template>

<script setup>
const lin = ref('');
const { data: lins } = useFetch('/api/postgres');

const addData = () => {
    const { data } = useFetch('/api/postgres', {
        method: 'post',
        body: { lin: lin.value },
    });
    lin.value = '';

    // 画面の再描画
    location.reload()

    // メモ：pushはURLが変わるときだけ
    //   this.$router.push('/pgtest');
};

</script>