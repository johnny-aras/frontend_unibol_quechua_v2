<template>
  <div class="container ">
    <div class="row">
      <div class="mb-3">
        <div class="d-grid col-6-mx-auto offset-md-9">
          <!-- <button class="btn btn-success">
            <router-link to="/asignatura/create" class="nav-link active">Nueva Asignatura</router-link> <i
              class="fa-solid fa-graduation-cap"></i>
          </button> -->
        </div>
      </div>
    </div>

    <div class="row">
      <div class="mb-3">
        <!-- <div class="d-flex justify-content-around ">         -->
        <div class="mb-3 d-grid gap-2 d-md-block">
          <button class="btn btn-outline-success  float-end ">
            <i class="fa-solid fa-user-plus"></i> <router-link to="/asignatura/create" class="nav-link active">NUEVA
              ASIGNATURA</router-link>
          </button>
          <button class="btn btn-outline-warning rounded   me-1" @click="editarSeleccionado()">
            Editar
            <i class="fa-solid fa-user-plus"></i>
          </button>
          <button class="btn btn-danger  rounded   me-1" @click="eliminarSeleccionado()">
            Eliminar
            <i class="fa-solid fa-trash"></i>
          </button>

          <!-- <router-link :to="{path:'/asignatura/edit/'+materia.codigo_asignatura}" class="btn btn-outline-warning">
              <i class="fa-solid fa-edit"></i>
          </router-link> &nbsp;
          <button class="btn btn-outline-danger" @:click="eliminar(materia.codigo_asignatura,materia.nombre_asignatura)">
              <i class="fa-solid fa-trash"></i>
          </button> -->

        </div>
      </div>
    </div>

    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <!-- <div class="table-responsive"> -->
      <div class="table-responsive">
        <!-- <table class="table table-bordered table-hover table-striped col-12"> -->
        <DataTable ref="table" id="datatable" :data="materias" :columns="columns" v-if="materias"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }], pageLength: 5,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '10%', target: [2],
              width: '10%', target: [3],
            },

            // {
            //   targets:4,render:getDocentess()
            // },
            { responsivePriority: 1, targets: 1 },
            { responsivePriority: 2, targets: 2 },
            { responsivePriority: 3, targets: 3 },
            { responsivePriority: 4, targets: 4 },
            ],
            language: {
              search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" :key="keycon">
          <thead class="table-light">
            <tr>
              <th>
                #
              </th>
              <th>
                CODIGO
              </th>
              <th>
                NOMBRE
              </th>
              <th>
                DESCRIPCION
              </th>
              <th>
                DOCENTE
              </th>
              <th>
                HORAS PRACTICAS
              </th>
              <th>
                HORAS TEORICAS
              </th>
              <th>
                TOTAL HORAS
              </th>
              <th>
                PRE-REQUISITO1
              </th>
              <th>
                PRE-REQUISITO2
              </th>
              <th>
                AÑO ASIGNADO
              </th>
              <!-- <th class="col-2">
                        ACCIONES
                      </th> -->
            </tr>
          </thead>
          <!-- <div v-else>
                      <img :src="ruta" alt="iamgen">
                    </div> -->
          <tbody class="table-group-divider" id="contenido">
            <!-- <tr v-for="materia,i in materias" :key="materia.id">
                        <td>{{ i+1 }}</td>
                        <td>{{ materia.codigo_asignatura }}</td>
                        <td>{{ materia.nombre_asignatura }}</td>
                        <td>{{ materia.descripcion }}</td>

                        <td>{{ getDocentess(materia.id_docente,materia.codigo_asignatura) }}</td>

                        <td>{{ materia.horas_practicas }}</td>
                        <td>{{ materia.horas_teoricas }}</td>
                        <td >{{ materia.total_horas  }}</td>
                        <td>{{ materia.pre_requisito1  }}</td>
                        <td >{{ materia.pre_requisito2  }}</td>
                        <td >{{ materia.anio_asignado  }}</td>
                        <td>
                            <router-link :to="{path:'/asignatura/edit/'+materia.codigo_asignatura}" class="btn btn-outline-warning">
                                <i class="fa-solid fa-edit"></i>
                            </router-link> &nbsp;
                            <button class="btn btn-outline-danger" @:click="eliminar(materia.codigo_asignatura,materia.nombre_asignatura)">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>                     -->
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
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

import axios from "axios";
import { confirmar1, show_alerta } from '../../funciones';
import { ref } from 'vue';


import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import Select from "datatables.net-select";
import 'datatables.net-responsive-bs5';
//import 'datatables.net-select';

DataTable.use(DataTableLib);
DataTable.use(Select);


// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
//const contador =ref(0);
//let BASE_URL=process.env.VUE_APP_BASE_URL;
let BASE_URL = import.meta.env.VITE_BASE_URL;
let asi = 'hola';
export default {
  name: 'MateriaView',
  components: { DataTable },
  data() {
    return {
      materias: null, docente: '', docs: [], principal: '', ruta: '../loading.gif',
      materiasUpdate: [],

      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: 'codigo_asignatura' },
        { data: 'nombre_asignatura' },
        //{ data: null, render: function (data) { return `${data.apellidoP} ${data.apellidoM} ${data.nombres}` } },
        // { data: null, render: function (data) { 
        //   return this.getDocentess(data.id_docente,data.codigo_asignatura) } 
        // },        

        { data: 'descripcion' },
        { data: 'id_docente' },
        { data: 'horas_practicas' },
        { data: 'horas_teoricas' },
        { data: 'total_horas' },
        { data: 'pre_requisito1' },
        { data: 'pre_requisito2' },
        { data: 'anio_asignado' },
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
    this.getMaterias();
    this.principal = '/asignaturas';
  },
  methods: {
    verificarSeleccion() {
      let datos = this.materias;
      let identificador = '';
      let nombres = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombre_asignatura}`;
        let clave = datos[idx].codigo_asignatura;

        identificador = clave;
      });
      return { identificador, nombres };
    },
    async editarSeleccionado() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        this.$router.push('/asignatura/edit/' + identificador + '/');
      } else {
        const error = 'Debes Seleccionar Una Asignatura!';
        show_alerta(error, 'info')
      }
    },
    eliminarSeleccionado() {
      const { identificador, nombres } = this.verificarSeleccion();

      if (identificador) {
        const ruta = 'parametros/asignaturas/' + identificador + '/';
        //const principal = '/docentes';
        confirmar1(identificador, nombres, ruta, this.principal);
        //this.$router.push('/estudiante/edit/'+identificador+'/');
      } else {
        const error = 'Debes Seleccionar Una Asignatura!';
        show_alerta(error, 'info')
      }
    },
    async getMaterias() {
      await axios.get(BASE_URL + '/parametros/asignaturas/')
        .then(
          response => {
            //this.materias = this.getMateriasUpdated(response.data)
            this.materias = response.data
          }
        );
    },
    // async getMateriasUpdated(materias) {
    //   const material = materias;
    //   console.log(material);
    //   let doc_1 = '';
    //   let cod_1 = '';
    //   let respuesta = '';
    //   for (let index = 0; index < material.length; index++) {
    //     doc_1 = material[index].id_docente;
    //     cod_1 = material[index].codigo_asignatura;

    //     if (doc_1) {
    //       respuesta = this.getDocentess(doc_1, cod_1);
    //       material.id_docente = respuesta;
    //       console.log('entro');
    //     }
    //     console.log(respuesta);

    //   }
    //   return material
    // },
    getDocentess(id_doc, codigo_asignatura) {

      //console.log('aver'+id_doc);
      if (id_doc === null) {
        return;
      } else
        if (id_doc !== null || id_doc !== 'undefined' || id_doc !== '') {
          console.log(id_doc + codigo_asignatura);
          axios.get(BASE_URL + '/docentes/docentes/' + id_doc + '/').then(
            response => (
              //revisar lo de fernando de objects
              //this.docente = `${response.data['nombres']} ${response.data['apellidop']} ${response.data['apellidom']}`
              this.docs[codigo_asignatura] = `${response.data['nombres']} ${response.data['apellidop']} ${response.data['apellidom']}`
            )
          ).catch(error => {
            console.log(error)
            show_alerta(error, 'error')
          });
          //console.log('mas:'+docs);
          return this.docs[codigo_asignatura];
        }
    }
    , eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }

      const ruta = 'parametros/asignaturas/' + id + '/';
      confirmar1(id, nombre, ruta, this.principal);
      //this.$router.push('/materias')
    }
  }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';
</style>