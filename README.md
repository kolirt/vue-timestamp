<h1 align="center">Vue 3 timestamp</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Made%20with&message=VueJS&color=limegreen&style=for-the-badge&logo=vue.js" />
</p>


**Table of Contents**

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Setup](#setup)
- [Usage](#usage)
- [Demo](#demo)
- [Faq](#faq)
- [License](#license)
- [Other projects](#other-projects)

# Getting started

## Installation
```bash
npm install --save @kolirt/vue-timestamp

yarn add @kolirt/vue-timestamp
```

## Setup
```javascript
import { createApp } from 'vue'
import { createTimestamp } from '@kolirt/vue-timestamp'

const app = createApp({ ... })

app.use(createTimestamp())

app.mount('#app')
```


# Usage
```vue
<script setup lang="ts">
import { timestamp } from '@kolirt/vue-timestamp'
</script>

<template>
  <pre>timestamp: {{ timestamp }}</pre>
</template>
```


# Demo

[Demo here](https://kolirt.github.io/vue-timestamp/).


# FAQ

Check closed [issues](https://github.com/kolirt/vue-timestamp/issues) with `FAQ` label to get answers for most asked
questions


# License

[MIT](https://github.com/kolirt/vue-timestamp/blob/master/LICENSE)


# Other projects

Check out my other projects on my [GitHub profile](https://github.com/kolirt)