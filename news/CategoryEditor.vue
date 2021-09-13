<template>
  <div>
    <div>
      <label>News Article Category</label>
    </div>
    <whppt-select
      id="news-category-select"
      :value="displayValue"
      :items="categories"
      label="News Category"
      item-text="name"
      item-value="value"
      @input="selected"
    >
    </whppt-select>
  </div>
</template>

<script>
import { find, get } from 'lodash';
import { mapState, mapActions } from 'vuex';
import WhpptSelect from '@whppt/nuxt/lib/components/ui/components/Select.vue';
import categoriesMixin from './categoriesMixin';

export default {
  name: 'NewsArticleCategoryEditor',
  components: { WhpptSelect },
  mixins: [categoriesMixin],
  computed: {
    ...mapState('whppt/editor', ['selectedComponent']),
    selectedContentValue() {
      const property = get(this, 'selectedComponent.property', 'category');
      return this.selectedComponent.value[property] && this.selectedComponent.value[property].value;
    },
    displayValue() {
      return find(this.categories, cat => cat.value === this.selectedContentValue);
    },
  },
  methods: {
    ...mapActions('whppt/editor', ['setSelectedComponentState']),
    selected(value) {
      const category = find(this.categories, cat => cat.value === value);
      this.setSelectedComponentState({
        path: this.selectedComponent.property,
        value: category,
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
