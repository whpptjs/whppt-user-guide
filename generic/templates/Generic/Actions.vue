<template>
  <div class="mt-4 flex justify-between">
    <div class="w-1/2">
      <div class="mr-4">
        <whppt-link
          v-if="pageActions.previous.href || inEditor"
          v-whppt-link="pageActions.previous"
          :to="pageActions.previous"
        >
          <div class="px-4 py-3 border animate border-gray-300 hover:border-primary">
            <div>Previous</div>
            <div class="w-full flex items-center font-bold text-primary">
              <icon icon="ChevronLeft" class="w-4 h-4" />
              <div>{{ pageActions.previous.text || 'Previous Page' }}</div>
            </div>
          </div>
        </whppt-link>
      </div>
    </div>

    <div class="w-1/2">
      <div class="ml-4">
        <whppt-link v-if="pageActions.next.href || inEditor" v-whppt-link="pageActions.next" :to="pageActions.next">
          <div class="px-4 py-3 border animate border-gray-300 hover:border-primary">
            <div class="flex justify-end">Next</div>
            <div class="w-full flex items-center justify-end font-bold text-primary">
              <div>{{ pageActions.next.text || 'Next Page' }}</div>
              <icon icon="ChevronRight" class="w-4 h-4" />
            </div>
          </div>
        </whppt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GenericPageActions',
  props: { pageActions: { type: Object, required: true } },
  computed: {
    ...mapGetters(['inEditor']),
  },
};
</script>
