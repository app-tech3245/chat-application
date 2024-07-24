<template>
  <main class="pb-24 pt-8">
    <Header>
      <template>
        <span>
          <i class="active:scale-90 duration-300 fa fa-chevron-left text-xl"></i>
        </span>
      </template>
      <template>
        <span class="font-medium text-2xl">Chats</span>
      </template>
      <template>
        <span>
          <i class="active:scale-90 duration-300 fa fa-edit text-xl"></i>
        </span>
      </template>
    </Header>
    <Searchbar v-on:search="searchAction" />

    <section>
      <Contacts :contacts="contacts" />
    </section>
  </main>
</template>

<script>
import { computed, watch, ref } from "vue";
import { useContacts } from "@/stores/contacts";
import Contacts from "@/components/Contacts.vue";
import Header form '@/components/Header.vue'

const contacts = ref(useContacts().contacts);

const searchAction = () => {
  const currentKeyword = computed(() => useContacts().currentKeyword);
  contacts.value = useContacts().contacts.filter((contact) =>
    contact.name.toLowerCase().includes(currentKeyword.value.toLowerCase())
  );
};
</script>
