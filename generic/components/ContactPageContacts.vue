<template>
  <div class="container">
    <div class="flex">
      <div class="w-1/12" />
      <div v-if="content.items.length || inEditor" class="w-10/12 border-b-4 border-white py-8 lg:py-16">
        <div
          v-whppt-list="{ data: content, addNew }"
          data-property="items"
          class="flex flex-wrap justify-between w-full"
        >
          <div v-if="!content.items.length" class="py-16 text-center">Add Contacts Here</div>
          <div v-for="(item, index) in content.items" :key="index" class="w-full lg:w-4.5/10">
            <div v-whppt-text="item" data-property="name" class="text-lg lg:text-xl mb-4 mt-8 lg:mt-0 font-medium">
              {{ item.name || 'Location Name' }}
            </div>
            <div
              v-whppt-formatted-text="item"
              data-property="description"
              class="text-xs lg:text-base mb-8 text-gray-600 richText"
              v-html="item.description && item.description !== '<p></p>' ? item.description : 'Location description...'"
            ></div>
            <div
              v-whppt-list="{ data: item, addNew: addNewContactOption }"
              data-property="contactOptions"
              class="mb-12"
              :class="{ 'py-4': inEditor }"
            >
              <div v-if="item.contactOptions.length">
                <div
                  v-for="(contact, idx) in item.contactOptions"
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
              <div v-if="!item.contactOptions.length && inEditor">Add Contact Link</div>
            </div>

            <div
              v-whppt-list="{ data: item, addNew: addNewSubItem }"
              data-property="subItems"
              :class="{ 'py-4': inEditor }"
            >
              <div v-if="!item.subItems.length && inEditor" class="py-4">Add Contact Group</div>
              <div
                v-for="(subItem, subIdx) in item.subItems"
                :key="`sub-${subIdx}`"
                v-whppt-list="{ data: subItem, addNew: addNewContactOption }"
                data-property="contactOptions"
                class="mb-8"
                :class="{ 'py-4': inEditor }"
              >
                <div
                  v-whppt-text="subItem"
                  data-property="label"
                  class="text-xs lg:text-sm uppercase text-gray-600 tracking-label mb-8"
                >
                  {{ subItem.label || 'Contact group label' }}
                </div>
                <div class="mb-4">
                  <div v-if="subItem.contactOptions.length">
                    <div
                      v-for="(subContact, subConIdx) in subItem.contactOptions"
                      :key="`contact-sub-${subConIdx}`"
                      v-contact-type="subContact"
                      data-property="type"
                      class="lg:text-lg font-bold mb-4"
                    >
                      <whppt-link :to="contactLink(subContact)">
                        <div class="inline-flex subItems-center">
                          <!-- <icon
                            :icon="subContact.type || 'Pin'"
                            class="w-4 h-4 lg:w-6 lg:h-6"
                            :style="{ color: theme.secondary }"
                          /> -->
                          <div v-whppt-link="subContact.link" class="ml-4">
                            {{ subContact.link.text || 'Contact Information' }}
                          </div>
                        </div>
                      </whppt-link>
                    </div>
                  </div>
                  <div v-if="!subItem.contactOptions.length && inEditor">Add Contact Link</div>
                </div>
              </div>
            </div>
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
  name: 'ContactPageContacts',
  props: { content: { type: Object, default: () => ({}) } },
  computed: {
    ...mapGetters(['inEditor', 'theme']),
  },
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    addNew() {
      this.pushSelectedComponentState({
        path: 'items',
        value: {
          title: '',
          description: '',
          contactOptions: [],
          subItems: [],
        },
      });
    },
    addNewSubItem() {
      this.pushSelectedComponentState({
        path: 'subItems',
        value: {
          label: '',
          contactOptions: [],
        },
      });
    },
    addNewContactOption() {
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
