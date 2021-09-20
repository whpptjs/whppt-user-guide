<template>
  <div>
    <div class="mt-4 flex items-center" @click="check">
      <div class="border border-white p-2 flex">
        <icon v-if="selectedContentValue" icon="Check" class="w-4 h-4" />
        <div v-else class="w-4 h-4" />
      </div>
      <div class="pl-4">{{ selectedComponent.label || 'Checkbox Label' }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CheckBoxEditor',
  components: {},
  computed: {
    ...mapState('whppt/editor', ['selectedComponent', 'baseAPIUrl']),
    selectedContentValue() {
      return this.selectedComponent.value[this.selectedComponent.property];
    },
  },
  methods: {
    ...mapActions('whppt/editor', ['setSelectedComponentState']),
    check() {
      this.setSelectedComponentState({
        path: this.selectedComponent.property,
        value: !this.selectedContentValue,
      });
    },
  },
};
</script>
