<template>
  <footer class="bg-gray-600 w-full py-8 text-white">
    <div v-whppt-list="{ data: footer, addNew }" data-property="groups" class="container" :class="{ 'py-4': inEditor }">
      <div v-if="footer.groups.length">
        <div class="flex flex-wrap">
          <div v-for="(group, index) in footer.groups" :key="index" class="mb-4 lg:w-1/4">
            <div class="mx-4">
              <FooterLinkGroup :group="group" />
            </div>
          </div>
        </div>
      </div>
      <div v-else>Add groups Here</div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import FooterLinkGroup from './FooterLinkGroup.vue';

export default {
  name: 'Footer',
  components: { FooterLinkGroup },
  computed: {
    ...mapState('whppt/site', ['footer']),
    ...mapGetters(['inEditor']),
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    addNew() {
      this.pushSelectedComponentState({
        path: 'groups',
        value: { name: '', links: [] },
      });
    },
  },
};
</script>
