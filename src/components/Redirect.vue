<template>
  <div>
    <h1>URL Redirect</h1>
    <input type="text" v-model="inputUrl" placeholder="輸入網址">
    <button @click="generateRedirectUrl">產生轉址網址</button>
    <p v-if="redirectUrl">{{ redirectUrl }}</p>
  </div>
</template>

<script>
export default {
  name: 'Redirect',
  data() {
    return {
      inputUrl: '',
      redirectUrl: '',
    };
  },
  methods: {
    generateRedirectUrl() {
      const baseUrl = 'https://yujun0.github.io/url-redirect/';
      const redirectParam = encodeURIComponent(this.inputUrl);
      this.redirectUrl = `${baseUrl}?func=url_redirect&url=${redirectParam}`;
    },
  },
};
</script>
