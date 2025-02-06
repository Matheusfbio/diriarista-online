<script lang="ts">
import fetchDiarist from '@/diarist/services/fetchDiarist'
import axios from 'axios'
import perfilNull from '@/assets/img/perfil-null.png'
import { defineComponent, onMounted, ref } from 'vue'
import type { Diarist } from '@/core/entities/diarist'

export default defineComponent({
  setup() {
    const diarists = ref<Diarist[]>([])

    const loadDiarists = async () => {
      try {
        const diaristResponse = await fetchDiarist()
        const diaristsData = diaristResponse

        const imageResponse = await axios.get(
          'http://localhost:1337/api/upload/files?populate=*',
        )
        const images = imageResponse.data

        diarists.value = diaristsData.map(diarist => {
          const matchedImage = images.find(
            image => image.id === diarist.perfil?.id,
          )

          const perfilUrl = matchedImage
            ? `http://localhost:1337${matchedImage.url}`
            : perfilNull
          console.log(`Diarista: ${diarist.nome}, URL da imagem: ${perfilUrl}`)

          return {
            id: diarist.id,
            nome: diarist.nome,
            contato: diarist.contato,
            email: diarist.email,
            endereco: diarist.endereco,
            cidade: diarist.cidade,
            perfil: perfilUrl,
          }
        })
      } catch (error) {
        console.error('Erro ao carregar os diaristas ou imagens:', error)
      }
    }

    onMounted(loadDiarists)

    return {
      diarists,
    }
  },
})
</script>

<template>
  <main>
    <strong class="flex justify-center text-3xl items-center py-3">
      Diaristas disponíveis
    </strong>
    <ul class="flex flex-wrap justify-center items-center">
      <li
        v-for="diarist in diarists"
        :key="diarist.id"
        class="flex flex-col border-2 rounded-xl border-black p-6 m-3 justify-center items-center"
      >
        <img :src="diarist.perfil" width="150" alt="Imagem do perfil" />
        <strong class="name">{{ diarist.nome }}</strong>
        <p class="label-diarist-email">{{ diarist.email }}</p>
        <p class="label-diarist-contact">{{ diarist.contato }}</p>
        <p class="label-diarist-address">{{ diarist.endereco }}</p>
        <p class="label-diarist-city">{{ diarist.cidade }}</p>
      </li>
    </ul>
  </main>
</template>
