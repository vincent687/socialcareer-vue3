<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement">count is:</button>
  <p>
    {{ count }}
  </p>
  <input type="text" placeholder="Filter Search" v-model="query" />
  <button @click="reset"> Reset </button>
  <search-results :query="query" />
</template>

<script lang="ts">
  import { ref, defineComponent, computed } from 'vue'
  import SearchResults from './Components/SearchResults.vue'
  import { useStore } from 'vuex'
  import { key } from '../../store'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    components: {
      SearchResults
    },
    setup() {
      const store = useStore(key)

      const count = computed(() => store.state.count)
      const query = ref('')
      const reset = (evt) => {
        query.value = '' // clears the query
      }
      return {
        count,
        inCrement: () => store.commit('increment'),
        reset,
        query
      }
    }
  })
</script>
