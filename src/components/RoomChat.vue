<template>
  <main class="w-full py-5 pb-20"></main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useChats } from "@/stores/chats";

const state = useChats();
const route = useRoute();

const paramsId = computed(() => route.params.id);
const chats = computed(() => state.chats.filter((chat) => chat.id == paramsId.value));
</script>
