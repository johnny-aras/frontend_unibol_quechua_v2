<template>
  <div class="container ">
    <!-- <div class="row">
      <div class="mb-3">
        <div class="d-grid col-6-mx-auto offset-md-9">
          <button class="btn btn-success">
            <router-link to="/docente/create" class="nav-link active" href="#">Nuevo Docente</router-link> &nbsp;<i
              class="fa-solid fa-graduation-cap"></i>
          </button>
        </div>

      </div>
    </div> -->
    <div class="row">
      <div class="mb-3">
        <!-- <div class="d-flex justify-content-around ">         -->
        <div class="mb-3 d-grid gap-2 d-md-block">

          <button class="btn btn-outline-success  float-end ">
            <i class="fa-solid fa-user-plus"></i> <router-link to="/docente/create" class="nav-link active">NUEVO
              DOCENTE</router-link>
          </button>
          <button class="btn btn-outline-warning rounded   me-1" @click="editarSeleccionado()">
            Editar
            <i class="fa-solid fa-user-plus"></i>
          </button>
          <button class="btn btn-danger  rounded   me-1" @click="eliminarSeleccionado()">
            Eliminar
            <i class="fa-solid fa-trash"></i>
          </button>

        </div>
      </div>
    </div>
    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <div class="table-responsive">
        <!-- <table class="table table-bordered table-hover table-striped col-12"> -->
        <DataTable ref="table" id="datatable" :data="docentes" :columns="columns" v-if="docentes"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }], pageLength: 5,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '40%', target: [6],
              width: '10%', target: [7],
            },
            { responsivePriority: 1, targets: 1 },
            { responsivePriority: 2, targets: 2 },
            { responsivePriority: 3, targets: 3 },
            { responsivePriority: 4, targets: 4 },
            ],
            language: {
              search: 'Buscar', zeroRecords: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',              
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" :key="columns.length">
          <thead class="table-light">
            <tr>
              <th class="col">
                #
              </th>
              <th>
                NOMBRES
              </th>
              <th>
                APELLIDO-P.
              </th>
              <th>
                APELLIDO-M.
              </th>
              <th>
                C.I.
              </th>
              <th>
                CELULAR
              </th>
              <th>
                DIRECCION
              </th>
              <th>
                PROFESION
              </th>
              <th>
                ESTADO
              </th>
              <!-- <th>
                        ACCIONES
                      </th> -->
            </tr>
          </thead>
          <!-- <div v-else>
            <img :src="ruta" alt="iamgen">
          </div> -->
          <tbody class="table-group-divider" id="contenido">
            <!-- <tr v-for="docente in docentes" :key="docente.id">

              <td>{{ docente.nombres }}</td>
              <td>{{ docente.apellidop }}</td>
              <td>{{ docente.apellidom }}</td>

              <td>{{ docente.ci }}</td>

              <td>{{ docente.celular }}</td>
              <td>{{ docente.direccion }}</td>
              <td>{{ docente.profesion }}</td>
              <td>{{ docente.estado }}</td>
              <td>
                <router-link :to="{ path: '/docente/edit/' + docente.id }" class="btn btn-outline-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link> &nbsp;
                <button class="btn btn-outline-danger" v-on:click="eliminar(docente.id, docente.nombres)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr> -->
          </tbody>
        </DataTable>
        <div v-else>
          <div class="row justify-content-md-center">
            <div class="col-3 alert-info text-center mt-5">
              Cargando...
              <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
              </h3>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import axios from "axios";
import { confirmar1, show_alerta } from '../../funciones';


import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import Select from "datatables.net-select";
import 'datatables.net-responsive-bs5';
//import 'datatables.net-select';

DataTable.use(DataTableLib);
DataTable.use(Select);


//import {ref} from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
//const contador =ref(0);
//let BASE_URL = process.env.VUE_APP_BASE_URL;
let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  components: { DataTable },
  name: 'DocenteView',
  data() {
    return {
      docentes: null,
      ruta: '../loading.gif',
      principal: '/docentes',
      columns: [
        // {
        //   data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        // },
        { data: 'id' },
        { data: 'nombres' },
        //{ data: null, render: function (data) { return `${data.apellidoP} ${data.apellidoM} ${data.nombres}` } },
        { data: 'apellidop' },
        { data: 'apellidom' },
        { data: 'ci' },
        { data: 'celular' },
        { data: 'direccion' },
        { data: 'profesion' },
        { data: 'estado' },
      ]

    }
  },
  setup() {
    const table = ref(null)
    // ...
    return {
      table
    }
  },
  mounted() {
    this.getDocentes();
  },
  methods: {
    async getDocentes() {
      await axios.get(BASE_URL + '/docentes/docentes/')
        .then(
          response => (
            this.docentes = response.data
          )
        );

    },
    verificarSeleccion() {
      let datos = this.docentes;
      let identificador = '';
      let nombres = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombres} ${datos[idx].apellidop} ${datos[idx].apellidom}`;
        let clave = datos[idx].id;

        identificador = clave;
      });
      return { identificador, nombres };
    },
    async editarSeleccionado() {

      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        this.$router.push('/docente/edit/' + identificador + '/');
      } else {
        const error = 'Debes Seleccionar Un Docente!';
        show_alerta(error, 'info')
      }
    },
    eliminarSeleccionado() {
      const { identificador, nombres } = this.verificarSeleccion();
      if (identificador) {
        const ruta = 'docentes/docentes/' + identificador + '/';
        //const principal = '/docentes';
        confirmar1(identificador, nombres, ruta, this.principal);
        //this.$router.push('/estudiante/edit/'+identificador+'/');
      } else {
        const error = 'Debes Seleccionar Un Estudiante!';
        show_alerta(error, 'info')
      }
    },
    eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }

      //linea adicional recientemente añadida
      const principal = '/docentes';
      const ruta = 'docentes/docentes/' + id + '/';
      confirmar1(id, nombre, ruta, principal);
    },
  }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';
</style>
