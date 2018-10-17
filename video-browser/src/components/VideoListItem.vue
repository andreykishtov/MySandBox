<template>

  <li @click="onVideoSelect" class="list-group-item media">
    <img class="mr-3" :src="thumbnailUrl" />
    <div class="med-body">
    {{ video.snippet.title }}
    </div>
  </li>

</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect',this.video);
    }
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer
  }
  li:hover {
    background-color: #eee;
  }
</style>
