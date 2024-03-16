<template>
  <div class="container">
    <div class="row">
      <div class="mb-3">
        <div class="d-grid col-3-mx-auto offset-md-9">
          <!-- <button class="btn btn-success">                
                  <router-link to="/carrera/create" class="nav-link active">Nueva Carrera</router-link><i class="fa-solid fa-building-columns"></i>
              </button></div>    -->

        </div>
      </div>
    </div>
    <div class="row">
      <div class="mb-3">
        <!-- <div class="d-flex justify-content-around ">         -->
        <div class="mb-3 d-grid gap-2 d-md-block">

          <button class="btn btn-outline-success  float-end ">
            <i class="fa-solid fa-user-plus"></i> <router-link to="/carrera/create" class="nav-link active">NUEVA
              CARRERA</router-link>
          </button>
          <button class="btn btn-outline-warning rounded   me-1" @click="editarSeleccionado()">
            Editar
            <i class="fa-solid fa-user-plus"></i>
          </button>
          <button class="btn btn-danger  rounded   me-1" @click="eliminarSeleccionado()">
            Eliminar
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="btn btn-success" @click="mostrarMallaAcademica()">
            <i class="fa-solid fa-table"></i>Malla Académica
          </button>

        </div>
      </div>
    </div>
    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <div class="table-responsive">
        <!-- <table class="table table-bordered table-hover table-striped col-12"> -->
        <DataTable ref="table" id="datatable" :data="carreras" :columns="columns" v-if="carreras"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }], pageLength: 5,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '10%', target: [3],
              width: '10%', target: [1],
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
          }" :key="columns.length">
          <thead class="table-light">
            <tr>
              <th>
                #
              </th>
              <th>
                CODIGO CARRERA
              </th>
              <th>
                NOMBRE CARRERA
              </th>
              <th>
                DESCRIPCION
              </th>
              <th>
                ESTADO
              </th>
              <!-- <th class="col-2">
                ACCIONES
              </th> -->
            </tr>
          </thead>

          <tbody class="table-group-divider" id="contenido">
            <!-- <tr v-for="carrera in carreras" :key="carrera.codigo_carrera">

                <td>{{ carrera.codigo_carrera }}</td>
                <td>{{ carrera.nombre_carrera }}</td>
                <td>{{ carrera.descripcion }}</td>

                <td>{{ carrera.estado }}</td>
                <td>
                  <router-link :to="{ path: '/carrera/edit/' + carrera.codigo_carrera }" class="btn btn-outline-warning">
                    <i class="fa-solid fa-edit"></i>
                  </router-link> &nbsp;
                  <router-link :to="{ path: '/carrera/mostrarmalla/' + carrera.codigo_carrera }"
                    class="btn btn-outline-warning">
                    <i class="fa-solid fa-table"></i>
                  </router-link> &nbsp;
                  <button class="btn btn-outline-danger"
                    v-on:click="eliminar(carrera.codigo_carrera, carrera.nombre_carrera)">
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
//import DataTable from "datatables.net-bs5";
import { confirmar1 } from '../../funciones';


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
let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  name: 'DocenteView',
  components: { DataTable },
  data() {
    return {
      carreras: null, url: BASE_URL + '/parametros/carreras/', principal: '', ruta: '../loading.gif',
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: 'codigo_carrera' },
        { data: 'nombre_carrera' },
        //{ data: null, render: function (data) { return `${data.apellidoP} ${data.apellidoM} ${data.nombres}` } },
        { data: 'descripcion' },
        { data: 'estado' },

      ]

    };
  },
  setup() {
    const table = ref(null)
    // ...
    return {
      table
    }
  },
  mounted() {
    this.getCarreras();
    this.principal = '/carreras';
  },
  methods: {
    verificarSeleccion() {
      let datos = this.carreras;
      let identificador = '';
      let nombres = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombre_carrera}`;
        let clave = datos[idx].codigo_carrera;

        identificador = clave;
      });
      return { identificador, nombres };
    },
    async editarSeleccionado() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        this.$router.push('/carrera/edit/' + identificador + '/');
      } else {
        const error = 'Debes Seleccionar Una Carrera!';
        show_alerta(error, 'info')
      }
    },
    eliminarSeleccionado() {
      const { identificador, nombres } = this.verificarSeleccion();

      if (identificador) {
        const ruta = 'parametros/carreras/' + identificador + '/';
        //const principal = '/docentes';
        confirmar1(identificador, nombres, ruta, this.principal);
        //this.$router.push('/estudiante/edit/'+identificador+'/');
      } else {
        const error = 'Debes Seleccionar Una Carrera!';
        show_alerta(error, 'info')
      }
    },
    mostrarMallaAcademica() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        //console.log('mostrarmall'+identificador);
        this.$router.push('/carrera/mostrarmalla/' + identificador+'/');
      } else {
        const error = 'Debes Seleccionar Una Carrera!';
        show_alerta(error, 'info')
      }
    },
    getCarreras() {
      axios.get(this.url)
        .then(response => (this.carreras = response.data));
    }, eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }
      //linea adicional recientemente añadida
      //const principal = '/docentes';
      const ruta = 'parametros/carreras/' + id + '/';
      confirmar1(id, nombre, ruta, this.principal);
    },
  },
  components: { DataTable }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';
</style>
