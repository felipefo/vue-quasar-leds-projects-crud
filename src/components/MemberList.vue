<template>
  <div class="q-gutter-md q-pa-md">
    <!-- Botão para adicionar um novo membro -->

    <!-- Modal para adicionar um novo membro -->
    <q-dialog v-model="showAddMemberModal">
      <q-card>
        <q-card-section>
          <!-- Campos para inserção de novo membro -->
          <q-input v-model="newMember.name" label="Nome do Membro" />
          <q-input v-model="newMember.email" label="Email" />
          <q-select v-model="newMember.project" label="Projeto" :options="projectOptions" />
        </q-card-section>
        <q-card-actions align="right">
          <!-- Botão para confirmar adição de novo membro -->
          <q-btn label="Adicionar" color="primary" @click="addMember" />
          <!-- Botão para fechar modal -->
          <q-btn label="Cancelar" color="negative" @click="showAddMemberModal = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Div para envolver o input de busca e o botão de busca -->
    <div class="row items-center">
      <!-- Caixa de texto de busca por membros -->
      <q-input v-model="searchQuery" placeholder="Buscar por membros..." class="search-input" />

      <!-- Botão para buscar membros -->
      <q-btn color="primary" @click="searchMembers" class="search-btn">Buscar</q-btn>

      <q-btn color="primary" @click="showAddMemberModal = true" style="margin-right: auto;">Adicionar Novo Membro</q-btn>

    </div>

    <!-- Tabela de membros -->
    <q-table :rows="members" row-key="id">

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>{{ props.row.id }}</q-td>
          <q-td>{{ props.row.name }}</q-td>
          <q-td>{{ props.row.email }}</q-td>
          <q-td>{{ props.row.project }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'MemberList',

  data() {
    return {
      showAddMemberModal: false,
      newMember: {
        name: '',
        email: '',
        project: ''
      },
      members: [], // Lista de membros (inicialmente vazia)
      projectOptions: ['Projeto A', 'Projeto B', 'Projeto C'], // Opções de projeto para o select
      searchQuery: ''
    }
  },

  methods: {
    addMember() {
      // Adicionar lógica para adicionar um novo membro à lista de membros
      this.members.push({
        id: this.members.length + 1,
        name: this.newMember.name,
        email: this.newMember.email,
        project: this.newMember.project
      });
      this.showAddMemberModal = false;
    },

    searchMembers() {
      // Adicionar lógica para buscar membros com base na query de busca
      console.log('Buscar por membros:', this.searchQuery);
    }
  }
};
</script>

<style>
.search-input {
  flex: 70; /* Campo de busca com 70% de largura */
  margin-right: 10px;
}

.search-btn {
  flex: 30; /* Botão de busca com 30% de largura */
  margin-left: 10px;
}
</style>

