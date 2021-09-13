<template>
  <div
    v-if="navigationOptions.links.length || (navigationOptions.useCta && navigationOptions.cta.href) || inEditor"
    v-on-clickaway="closePanel"
  >
    <div
      v-if="inEditor"
      v-checkbox="navigationOptions"
      data-property="useCta"
      label="Use CTA"
      class="my-4 text-white text-lg"
    >
      Toggle links/CTA
    </div>
    <div v-if="navigationOptions.useCta">
      <div v-whppt-link="navigationOptions.cta">
        <whppt-link :to="navigationOptions.cta" class="flex items-center bg-white" :style="{ color: theme.secondary }">
          <div class="px-6 py-6 font-bold text-lg flex-grow">
            <div class="text-left">
              {{ navigationOptions.cta.text || 'CTA text' }}
            </div>
          </div>
          <div class="w-20 h-20 flex items-center justify-center text-white" :style="{ background: theme.secondary }">
            <!-- <icon icon="Phone" class="h-6 w-6" /> -->
          </div>
        </whppt-link>
      </div>
    </div>
    <div v-else>
      <div v-whppt-list="{ data: navigationOptions, addNew }" data-property="links" class="flex items-center">
        <button class="flex items-center bg-white flex-grow" :style="{ color: theme.secondary }" @click="open = !open">
          <div class="px-6 py-6 font-bold text-lg flex-grow">
            <div v-whppt-text="navigationOptions" data-property="label" class="text-left">
              {{ navigationOptions.label || 'I’m looking for information on...' }}
            </div>
          </div>
          <div class="w-20 h-20 flex items-center justify-center text-white" :style="{ background: theme.secondary }">
            <!-- <icon :icon="open ? 'ChevronUp' : 'ChevronDown'" class="h-6 w-6" /> -->
          </div>
        </button>
      </div>
      <div v-if="open" class="relative">
        <div class="absolute inset-0 z-10">
          <div class="bg-white overflow-y-auto" style="max-height: 305px">
            <div v-for="(link, index) in navigationOptions.links" :key="index">
              <whppt-link v-whppt-link="link" :to="link">
                <div
                  class="pl-6 flex justify-between border-t-2 items-center group"
                  :style="{
                    background: hover === index ? theme.background : '',
                    'border-color': index !== 0 ? theme.background : 'transparent',
                  }"
                  @mouseover="hover = index"
                  @mouseleave="hover = false"
                >
                  <div class="w-full py-4 font-bold text-lg">
                    {{ link.text || 'Link Text' }}
                  </div>
                  <button class="w-20 h-20 flex items-center justify-center">
                    <!-- <icon
                      icon="ArrowRight"
                      class="h-6 w-6 text-white"
                      :style="{ color: hover === index ? theme.secondary : '' }"
                    /> -->
                  </button>
                </div>
              </whppt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'HomeNavigator',
  mixins: [clickaway],
  props: { navigationOptions: { type: Object, default: () => {} } },
  data: () => ({
    open: false,
    hover: false,
  }),
  computed: {
    ...mapGetters(['inEditor', 'theme']),
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    addNew() {
      this.pushSelectedComponentState({
        path: 'links',
        value: {
          type: 'page',
        },
      });
    },
    closePanel() {
      if (this.open && !this.inEditor) this.open = false;
    },
  },
};
</script>
