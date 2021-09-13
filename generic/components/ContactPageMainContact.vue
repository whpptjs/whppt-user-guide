<template>
  <div class="container">
    <div class="flex pt-8">
      <div class="w-1/12" />
      <div class="w-10/12 border-b-4 border-white pb-8 lg:pb-16">
        <div class="pb-8">
          <div class="flex flex-col-reverse lg:flex-row w-full">
            <div class="w-full lg:w-5/10">
              <div
                v-whppt-text="content"
                data-property="name"
                class="lg:text-xl mb-4 mt-8 lg:mt-0 font-medium"
                :style="{ color: theme.secondary }"
              >
                {{ content.name || 'Location Name' }}
              </div>
              <div v-whppt-text="content" data-property="description" class="text-xs lg:text-base mb-8 text-gray-600">
                {{ content.description }}
              </div>
              <div
                v-whppt-list="{ data: content, addNew }"
                data-property="contactOptions"
                class="mb-4"
                :class="{ 'py-4': inEditor }"
              >
                <div v-if="content.contactOptions.length">
                  <div
                    v-for="(contact, idx) in content.contactOptions"
                    :key="`contact-${idx}`"
                    v-contact-type="contact"
                    data-property="type"
                    class="lg:text-lg font-bold mb-4"
                  >
                    <whppt-link :to="contactLink(contact)">
                      <div class="inline-flex items-center">
                        <!-- <icon
                          :icon="contact.type || 'Pin'"
                          class="w-4 h-4 lg:w-6 lg:h-6"
                          :style="{ color: theme.secondary }"
                        /> -->
                        <div v-whppt-link="contact.link" class="ml-4">
                          {{ contact.link.text || 'Contact Information' }}
                        </div>
                      </div>
                    </whppt-link>
                  </div>
                </div>
                <div v-if="!content.contactOptions.length && inEditor">Add Contact</div>
              </div>
            </div>
            <div class="hidden lg:block w-1/10" />
          </div>
        </div>
      </div>
      <div class="w-1/12" />
    </div>
  </div>
</template>

<script>
import { clone } from 'lodash';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ContactPageMainContact',
  props: { content: { type: Object, default: () => ({}) } },
  computed: {
    ...mapGetters(['inEditor', 'theme']),
    mapIcon() {
      return {
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: -4,
        path: 'M16,0A11.891,11.891,0,0,0,4,12c0,7.1,10.8,18.2,11.3,18.7a.967.967,0,0,0,1.4,0C17.2,30.2,28,19.2,28,12A11.891,11.891,0,0,0,16,0Zm0,16a4,4,0,1,1,4-4A4.012,4.012,0,0,1,16,16Z',
        fillColor: this.theme.secondary,
      };
    },
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    addNew() {
      this.pushSelectedComponentState({
        path: 'contactOptions',
        value: {
          type: '',
          link: { type: 'page', text: '' },
        },
      });
    },
    contactLink(contact) {
      const link = clone(contact.link);
      if (!link.href) return link;
      switch (true) {
        case contact.type === 'Phone':
          link.href = `tel:${link.href}`;
          break;
        case contact.type === 'Email':
          link.href = `mailto:${link.href}`;
          break;
      }
      return link;
    },
  },
};
</script>
