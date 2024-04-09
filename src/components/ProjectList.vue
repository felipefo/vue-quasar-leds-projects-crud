<template>
    <div class="q-gutter-md q-pa-md">
      <!-- Botão para adicionar um novo projeto -->
      
  
      <!-- Modal para adicionar um novo projeto -->
      <q-dialog v-model="showAddProjectModal" :maximized="true"  class="dialog-custom">
        <q-card>
          <q-card-section class="q-gutter-md">
  <div class="row">
    <!-- Primeiro item -->
    <div class="col">
      <q-input v-model="newProject.name" label="Nome do Projeto" />
    </div>
        <!-- Segundo item -->
    <div class="col">
      <q-input v-model="newProject.coordinator" label="Coordenador" />
    </div>
  </div>
  <div class="row">
    <!-- Terceiro item -->
    <div class="col">
      <q-date v-model="newProject.startDate" label="Data de Início" emit-value="true" />
    </div>

    <!--  Quarto item -->
    <div class="col">
      <q-date v-model="newProject.endDate" label="Data de Fim" emit-value="true" />
    </div>
  </div>
</q-card-section>

          <q-card-actions align="right">
            <!-- Botão para confirmar adição de novo projeto -->
            <q-btn label="Adicionar" color="primary" @click="addProject" />
            <!-- Botão para fechar modal -->
            <q-btn label="Cancelar" color="negative" @click="showAddProjectModal = false" />
          </q-card-actions>
        </q-card>
      </q-dialog>
  
      <!-- Caixa de texto de busca por projetos -->
   <!-- Div para envolver o input de busca e o botão de busca -->
   <div class="row items-center">
      <!-- Caixa de texto de busca por projetos -->
      <q-input v-model="searchQuery" placeholder="Buscar por projetos..." class="search-input" />

      <!-- Botão para buscar -->
      <q-btn color="primary" @click="searchProjects" class="search-btn">Buscar</q-btn>
      <q-btn color="primary" @click="showAddProjectModal = true" style="margin-right: auto;">Adicionar Novo Projeto</q-btn>

    </div>
      <!-- Tabela de projetos -->
      <q-table :rows="projects" row-key="id">
      
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td>{{ props.row.id }}</q-td>
            <q-td>{{ props.row.name }}</q-td>
            <q-td>{{ props.row.startDate }}</q-td>
            <q-td>{{ props.row.endDate }}</q-td>
            <q-td>{{ props.row.coordinator }}</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </template>
  
  <style>
  .search-input {
    flex: 70; /* Campo de busca com 70% de largura */
    margin: 10px;
  }
  
  .search-btn {
    flex: 10; /* Botão de busca com 30% de largura */
    margin: 10px;
  }

  .dialog-custom {
   max-width: 600px; /* Defina a largura máxima conforme necessário */
   min-width: 400px; /* Defina a largura mínima conforme necessário */
 }

</style>



  <script>
  
  export default {
    name: 'ProjectList',
  
    data() {
      return {
        showAddProjectModal: false,
        newProject: {
          name: '',
          startDate: '',
          endDate: '',
          coordinator: ''
        },
        projects: [
        {
          id: '1',
          name: 'Teste',
          startDate: '10/10/2024',
          endDate: '30/10/2024',
          coordinator: 'Felipe'
        },
        ],
        searchQuery: ''
      }
    },
  
    methods: {
      addProject() {
        // Aqui você pode adicionar a lógica para adicionar um novo projeto à lista de projetos
        this.projects.push({
          id: this.projects.length + 1,
          name: this.newProject.name,
          startDate: this.newProject.startDate,
          endDate: this.newProject.endDate,
          coordinator: this.newProject.coordinator
        })
        this.showAddProjectModal = false
      },
  
      searchProjects() {
        // Aqui você pode adicionar a lógica para buscar projetos com base na query de busca
        console.log('Buscar por:', this.searchQuery)
      }
    }
  }
  </script>
  
  <style>
  /* Aqui você pode adicionar estilos personalizados, se necessário */
  </style>
  