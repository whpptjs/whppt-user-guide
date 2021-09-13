<template>
  <div>
    <label for="checkBox">Select Published Date</label>
    <div class="text-black">
      <div class="flex items-center bg-white shadow flex-grow mb-4">
        <datepicker
          id="pubDatePicker"
          :value="selectedComponentValue"
          use-utc
          format="d MMM yyyy"
          class="py-2 pl-3 flex-grow"
          @input="selectDate"
        />
        <button class="px-4 py-2" @click="clear">
          <!-- <icon icon="Close" class="h-3 w-3"></icon> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PublishDateEditor',
  components: { Datepicker: () => import('vuejs-datepicker') },
  computed: {
    ...mapState('whppt/editor', ['selectedComponent']),
    selectedComponentValue() {
      return this.selectedComponent.value[this.selectedComponent.property];
    },
  },
  methods: {
    ...mapActions('whppt/editor', ['setSelectedComponentState']),
    selectDate(value) {
      this.setSelectedComponentState({
        path: this.selectedComponent.property,
        value,
      });
    },
    clear() {
      this.selectedComponentValue = '';
    },
  },
};
</script>

<style>
#pubDatePicker {
  @apply w-full;
}
</style>
