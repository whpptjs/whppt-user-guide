<template>
  <div>
    <div v-whppt-text="group" data-property="name" class="font-bold">
      {{ group.name || 'Group name' }}
    </div>
    <div class="mt-2">
      <div v-whppt-list="{ data: group, addNew }" data-property="links" :class="{ 'py-4': inEditor }">
        <div v-for="(link, index) in group.links" :key="index" class="my-1 flex">
          <FooterLink :link="link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import FooterLink from './FooterLink.vue';

export default {
  name: 'FooterLinkGroup',
  components: {
    FooterLink,
  },
  props: {
    group: { type: Object, required: true },
  },
  computed: {
    ...mapState('whppt/site', ['nav']),
    ...mapGetters(['inEditor']),
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    addNew() {
      this.pushSelectedComponentState({
        path: 'links',
        value: { type: 'page' },
      });
    },
  },
};
</script>
