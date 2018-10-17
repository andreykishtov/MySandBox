<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoDetail :video="video" />
    <VideoList @videoSelect="onVideoSelect" :videos="videos" />
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = `AIzaSyDGcJjp7ACd6li73ph-0IVRvO1jGe6e8Nk`
;

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      video: {}
    };
  },
  methods: {
    onVideoSelect(video) {
      this.video = video;
    },
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => this.videos = response.data.items);
    }
  }
};
</script>
