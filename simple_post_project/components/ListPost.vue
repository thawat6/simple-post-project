<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="post in posts" :key="post.id" cols="12" md="3">
          <v-card
            :to="`/more-detail/?id=${post.id}`"
            outlined
            class="ma-2"
            height="37vh"
          >
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ post.body }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.$baseApi.$get(`/posts`).then((res) => {
      this.posts = res;
    });
  },
};
</script>

<style>
</style>