<template>
  <div v-if="post">
    <v-img
      height="450px"
      src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg"
    ></v-img>
    <div class="ma-2">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    };
  },
  computed: {
    postId() {
      return this.$route.query.id;
    },
  },
  mounted() {
    this.$baseApi.$get(`/posts/${this.postId}`).then((res) => {
      this.post = res;
    });
  },
};
</script>

<style>
</style>