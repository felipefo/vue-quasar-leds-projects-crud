<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Cadastro de Projetos LEDS
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label header class="center-text">Menu</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('projects')">
          <q-item-section avatar>
            <q-icon name="folder" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Projetos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('members')">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Membros do Projeto</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- Aqui você pode adicionar os componentes correspondentes às rotas 'projects' e 'project-members' -->

      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LayoutDefault',

  setup () {
    const router = useRouter()
    const leftDrawerOpen = ref(false)

    const navigateTo = (route) => {
      console.log("teste" + route);
      router.push(route)
    }

    return {
      leftDrawerOpen,
      navigateTo
    }
  }
}
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>
