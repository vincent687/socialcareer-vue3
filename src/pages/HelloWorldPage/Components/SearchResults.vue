<template>
  <div class="root">
    <p> Showing {{ filteredTitles.length }} results for "{{ query }}" </p>
    <ul>
      <li v-for="title in filteredTitles" :key="title.Page">
        {{ title.Name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import titles from '../post-data.json'
  import { computed } from 'vue'

  export default {
    props: {
      query: String
    },
    setup(props, context) {
      const filteredTitles = computed(() => {
        return titles.filter((s) => s.Name.toLowerCase().includes(props.query.toLowerCase()))
      })

      return {
        filteredTitles
      }
    }
  }
</script>
