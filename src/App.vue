<script setup lang="ts">
import { timestamp } from '../lib'
</script>

<template>
  <div class="container py-5">
    <div class="bg-body-secondary rounded p-5">
      <div class="d-grid d-sm-flex mb-3 gap-2">
        <img
          src="https://img.shields.io/static/v1?label=Made%20with&message=VueJS&color=limegreen&style=for-the-badge&logo=vue.js"
          alt="vuejs"
        />
      </div>

      <iframe
        src="https://ghbtns.com/github-btn.html?user=kolirt&repo=vue-timestamp&type=star&count=true&size=large"
        frameborder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
        class="mb-3"
      >
      </iframe>

      <div class="d-grid d-sm-flex mb-3 gap-2">
        <a href="https://github.com/kolirt/vue-timestamp" target="_blank">Github</a>
        <a href="https://www.npmjs.com/package/@kolirt/vue-timestamp" target="_blank">Npmjs</a>
        <a href="https://github.com/kolirt/vue-timestamp/blob/master/README.md" target="_blank">Docs</a>
      </div>

      <h1>Vue3 timestamp</h1>
      <p class="lead">Timestamp: {{ timestamp }}</p>
    </div>
  </div>
</template>

<style scoped></style>
