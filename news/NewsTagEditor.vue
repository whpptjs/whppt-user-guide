<template>
  <div>
    <div>
      <label>News Article Tagging</label>
    </div>
    <autocomplete
      ref="NewsTagsAutocomplete"
      results-value="name"
      results-display="name"
      :source="tags"
      placeholder="Select a tag"
      class="text-black my-2"
      @selected="selectTag"
      @nothingSelected="addTag"
    >
      <template v-slot:noResults>
        <div class="flex items-center justify-between">
          <span
            >Press enter to add this new tag:
            <span class="font-medium">"{{ $refs.NewsTagsAutocomplete.display }}"</span></span
          >
          <!-- <icon icon="ArrowRight" class="text-black-400 w-4" /> -->
        </div>
      </template>
    </autocomplete>
    <div v-for="(tag, i) in articleTags" :key="i" class="mt-2">
      <div class="flex justify-between items-center w-full">
        <span>
          <span class="font-bold">{{ tag }} </span>
        </span>
        <button class="whppt-contents__actions-remove" @click="remove(tag)">⊖ Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { find, filter, map, toLower } from 'lodash';
import { mapState, mapActions } from 'vuex';
import Autocomplete from 'vuejs-auto-complete';

export default {
  name: 'NewsArticleTagSelector',
  components: { Autocomplete },
  data: () => ({ tags: [] }),
  computed: {
    ...mapState('whppt/editor', ['selectedComponent', 'baseAPIUrl']),
    ...mapState('whppt/config', ['domain']),
    articleTags() {
      return this.selectedComponent.value[this.selectedComponent.property];
    },
  },
  mounted() {
    this.loadTags();
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState', 'setSelectedComponentState']),
    findTagName(tag) {
      const foundTag = find(this.tags, g => g._id === tag);
      if (foundTag) return foundTag.name;
      return 'Cannot find matching Service Group';
    },
    loadTags() {
      return this.$axios.$get(`/api/news/loadTags?domainId=${this.domain._id}`).then(tags => {
        this.tags = map(tags, tag => {
          return {
            name: tag,
          };
        });
      });
    },
    selectTag(event) {
      const newTag = toLower(event.value);
      if (find(this.articleTags, tag => tag === newTag)) return;
      this.pushSelectedComponentState({
        path: this.selectedComponent.property,
        value: newTag,
      });
      this.$refs.NewsTagsAutocomplete.value = '';
    },
    addTag(event) {
      const tagName = toLower(event);
      const found = find(this.articleTags, t => t === tagName);
      if (found || !tagName) return;
      this.tags.push({ name: tagName });
      this.pushSelectedComponentState({
        path: this.selectedComponent.property,
        value: tagName,
      });
      this.$refs.NewsTagsAutocomplete.clear();
    },
    remove(tag) {
      this.setSelectedComponentState({
        path: this.selectedComponent.property,
        value: filter(this.articleTags, t => t !== tag),
      });
    },
  },
};
</script>

<style scoped>
button {
  background: rgba(0, 0, 0, 0.2);
  font-size: 12px;
  color: white;
  padding: 10px;
  border-width: 0;
  border-radius: 5px;
  cursor: pointer;
}

.tags__border {
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  border-bottom-style: outset;
}
</style>
