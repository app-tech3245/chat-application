<template>
  <main>
    <template v-for="(contact, x) in contacts" :key="x">
      <Contact :contact="contact" />
    </template>
  </main>
</template>

<script setup>
import Contact from "@/components/Contact.vue";

const props = defineProps({
  contacts: {
    type: Array,
  },
});
</script>
