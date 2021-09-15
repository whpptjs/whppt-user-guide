<template>
  <div>
    <div v-whppt-list="{ data: content, addNew }" data-property="items" class="my-4" :class="{ 'py-4': inEditor }">
      <div v-if="content.items.length" class="flex flex-wrap w-full justify-center">
        <div v-for="(item, index) in content.items" :key="index" class="w-1/3 mb-8">
          <Block :item="item" class="mx-8" />
        </div>
      </div>
      <div v-else class="flex justify-center w-full">Add Items Here</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Block from './Block';

export default {
  name: 'BlockContentComponent',
  components: { Block },
  props: {
    content: { type: Object, default: () => ({}) },
  },
  computed: {
    ...mapGetters(['inEditor']),
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    setOpenItem(itemIdx) {
      this.openItemIdx = this.openItemIdx === itemIdx ? undefined : itemIdx;
    },
    addNew() {
      this.pushSelectedComponentState({
        path: 'items',
        value: {
          title: '',
          text: '',
          image: { imageId: '' },
        },
      });
    },
  },
};
</script>
