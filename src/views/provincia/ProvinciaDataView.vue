<template>
  <div class="container ">
    <div class="row">
      <div class="mb-3">
        <div class="d-grid col-6-mx-auto offset-md-9">
          <!-- <button class="btn btn-success">                
                <router-link to="/provincia/create" class="nav-link active" >NUEVA PROVINCIA</router-link> 
              </button> -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="mb-3">
        <!-- <div class="d-flex justify-content-around ">         -->
        <div class="mb-3 d-grid gap-2 d-md-block">

          <button class="btn btn-outline-success  float-end ">
            <i class="fa-solid fa-user-plus"></i> <router-link to="/provincia/create" class="nav-link active">NUEVA
              PROVINCIA</router-link>
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
        <div class="table-responsive">
          <!-- <table class="table table-bordered table-hover"> -->
          <DataTable ref="table" id="datatable" :data="provincias" :columns="columns" v-if="provincias"
            class="table table-bordered table-striped display small" :options="{
              select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
              buttons: [{
                extend: 'selected',
                text: 'Edit',
                name: 'edit'
              }], pageLength: 5,
              //responsivePriority: 1,                                                   
              columnDefs: [{
                width: '30%', target: [0],
                width: '70%', target: [1],
              },
                // { responsivePriority: 1, targets: 1 },
                // { responsivePriority: 2, targets: 2 },
                // { responsivePriority: 3, targets: 3 },
                // { responsivePriority: 4, targets: 4 },
              ],
              language: {
                search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
                info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
                infoFiltered: '(Filtrados de _MAX_ registros)',
                paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
              },
            }">
            <thead>
              <tr>
                <th>#</th>
                <th>NOMBRE</th>
                <!-- <th>ACCIONES</th> -->
              </tr>
            </thead>
            <tbody class="table-group-divider" id="contenido">
              <!-- <tr v-for="prov, i in provincias" :key="prov.id">
                       <td>{{ (i+1) }}</td>
                       <td >{{ prov.nombre_provincia }}</td>
                       <td >{{ prov.created }}</td>
                       <td >{{ prov.modified }}</td>
                       <td>
                           <router-link :to="{path:'/provincia/edit/'+prov.id}" class="btn btn-outline-warning">
                               <i class="fa-solid fa-edit"></i>
                           </router-link> &nbsp;
                           <button   class="btn btn-outline-danger" v-on:click="eliminar(prov.id,prov.nombre_provincia)">
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
        </div>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import axios from "axios";
import { confirmar, confirmar1 } from '../../funciones';


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
let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {

  name: 'HomeView',
  components: { DataTable },
  data() {
    return {
      provincias: null, datos: null,
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: 'nombre_provincia' }
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
    this.datos = this.getProvincias();
    console.log(this.datos.result);
    this.principal = '/provincias';


  },
  methods: {
    verificarSeleccion() {
      let datos = this.provincias;
      let identificador = '';
      let nombres = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombre_provincia}`;
        let clave = datos[idx].id;

        identificador = clave;
      });
      return { identificador, nombres };
    },
    async editarSeleccionado() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        this.$router.push('/provincia/edit/' + identificador + '/');
      } else {
        const error = 'Debes Seleccionar Una Provincia!';
        show_alerta(error, 'info')
      }
    },
    eliminarSeleccionado() {
      const { identificador, nombres } = this.verificarSeleccion();

      if (identificador) {
        const ruta = 'parametros/provincias/' + identificador + '/';
        //const principal = '/docentes';
        confirmar1(identificador, nombres, ruta, this.principal);
        //this.$router.push('/estudiante/edit/'+identificador+'/');
      } else {
        const error = 'Debes Seleccionar Una Provincia!';
        show_alerta(error, 'info')
      }
    },
    async getProvincias() {
      await axios.get(BASE_URL + '/parametros/provincias/')
        .then(
          response => (
            this.provincias = response.data
          )
        );
      return this.provincias

    }, eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }
      confirmar(id, nombre);

    }
  }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';
</style>