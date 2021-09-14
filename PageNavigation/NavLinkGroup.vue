<template>
  <div>
    <button
      class="
        w-full
        flex
        justify-between
        items-center
        py-1
        px-2
        text-gray-500
        hover:bg-gray-100
        transition
        duration-200
        ease-in-out
        rounded-sm
      "
      @click="$emit('openItem', itemIdx)"
    >
      <div>
        {{ item.link.text || 'Link text' }}
      </div>
      <icon icon="ChevronDown" class="w-3 h-3 arrow" :class="subItemsOpen ? 'arrow-up' : 'arrow-down'" />
    </button>
    <div v-if="subItemsOpen" class="ml-2">
      <div v-whppt-list="{ data: item, addNew }" data-property="subItems" :class="{ 'py-4': inEditor }">
        <div v-for="(subItem, index) in item.subItems" :key="index" class="my-1">
          <NavLink :item="subItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import NavLink from './NavLink.vue';

export default {
  name: 'NavigationLinkGroup',
  components: {
    NavLink,
  },
  props: {
    item: { type: Object, required: true },
    subItemsOpen: { type: Boolean, default: false },
    itemIdx: { type: Number, required: true },
  },
  computed: {
    ...mapState('whppt/site', ['nav']),
    ...mapGetters(['inEditor']),
  },
  mounted() {
    if (this.item.subItems.find(subItem => subItem.link.href === this.$route.path))
      this.$emit('openItem', this.itemIdx);
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    setOpenItem(itemIdx) {
      this.openItemIdx = this.openItemIdx === itemIdx ? undefined : itemIdx;
    },
    addNew() {
      this.pushSelectedComponentState({
        path: 'subItems',
        value: {
          link: { type: 'page' },
        },
      });
    },
  },
};
</script>

<style scoped>
.arrow {
  transition: transform 0.25s;
  will-change: trasform;
}

.arrow-up {
  transform: rotate(0);
}
.arrow-down {
  transform: rotate(180deg);
}
</style>
