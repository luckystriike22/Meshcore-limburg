<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welkom bij ACK868 Limburg. Dé site met informatie over MeshCore, radio en off-gridcommunicatie in Limburg. Wij zijn een groep hobbyisten die genieten van knutselen met antennes, software en radiogolven.',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: '👋',
  title: navbarData.homeTitle,
  description: 'Welkom bij ACK868 Limburg. Dé site met informatie over MeshCore, radio en off-gridcommunicatie in Limburg. Wij zijn een groep hobbyisten die genieten van knutselen met antennes, software en radiogolven.',
  link: '/riyad.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
