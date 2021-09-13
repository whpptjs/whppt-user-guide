<template>
  <div class="relative mt-16 xl:mt-20 bg-green-100">
    <contact-header :header="page.header" :slug="page.slug" />
    <main-contact :content="page.mainContact" />
    <contacts :content="page.contacts" />
    <w-content :content-items="page.contents" style="min-height: 200px" class="page-contents" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ContactHeader from '../headers/Contact';
import MainContact from '../components/ContactPageMainContact';
import Contacts from '../components/ContactPageContacts';

export default {
  name: 'ContactTemplate',
  components: { ContactHeader, MainContact, Contacts },
  props: { page: { type: Object, default: () => ({}) } },
  computed: {
    ...mapState('navigation', ['header']),
  },
};
</script>
