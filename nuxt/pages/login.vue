<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gray-200">
    <div class="py-8 px-12 bg-white rounded-md w-1/2">
      <div class="form-section__field">
        <label class="form-label">Username *</label>
        <input v-model="form.username" />
        <span v-if="$v.form.username.$error && !$v.form.username.required" class="error">
          Please provide a username
        </span>
      </div>
      <div class="form-section__field">
        <label class="form-label">Password *</label>
        <input v-model="form.password" type="password" />
        <span v-if="$v.form.password.$error && !$v.form.password.required" class="error">
          Please provide a password
        </span>
      </div>
      <PrimaryButton class="mt-12 w-full" @click="loginUser">Submit</PrimaryButton>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';

import PrimaryButton from '~/assets/components/PrimaryButton';

export default {
  name: 'LoginPage',
  components: { PrimaryButton },
  data: () => ({
    form: {
      username: '',
      password: '',
    },
  }),
  head() {
    return {
      title: 'Login | Whppt Guide',
    };
  },
  methods: {
    ...mapActions('client', ['loadMe']),
    loginUser() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.loading = true;
      this.error = undefined;
      return this.$axios
        .$post(`/api/client/login`, this.form)
        .then(({ token }) => {
          Cookies.set('docsAuthToken', token, { expires: 3 });
          this.loading = false;
          this.loadMe();
          this.$router.push('/');
        })
        .catch(() => {
          this.loading = false;
          this.error = 'The password or username you entered is incorrect.';
        });
    },
  },
  validations: {
    form: {
      username: { required },
      password: { required },
    },
  },
};
</script>

<style scoped>
.form-section__field {
  @apply flex flex-col my-4 w-full;
}

.form-section__field label {
  @apply mb-1 text-gray-600 text-sm block;
}

.form-section__field input {
  @apply w-full p-1 font-medium border-2;
}

.form-section__field .error {
  @apply text-red-500 text-sm;
}
</style>
