<template>

<ul class="list-group">
  <VideoListItem
  @videoSelect="onVideoSelect"
  v-for="video in videos"
  :key="video.etag"
  :video="video"
   />
</ul>

</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect',video);
    }
  },
  props: {
    videos: Array
  }
}
</script>

<style>
</style>
