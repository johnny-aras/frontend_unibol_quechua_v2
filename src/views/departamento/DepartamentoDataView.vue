<template>
  <div class="container ">
    <div class="row">
      <div class="mb-3">
        <div class="d-grid col-6-mx-auto offset-md-9">
          <!-- <button class="btn btn-success">
            <router-link to="/departamento/create" class="nav-link active">NUEVO DEPARTAMENTO</router-link> <i
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
            <i class="fa-solid fa-user-plus"></i> <router-link to="/departamento/create" class="nav-link active">NUEVO
              DEPARTAMENTO</router-link>
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
        <!-- <table class="table table-bordered table-hover table-striped"> -->
        <DataTable ref="table" id="datatable" :data="departamentos" :columns="columns" v-if="departamentos"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }], pageLength: 5,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '20%', target: [0],
              width: '60%', target: [1],
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
                NOMBRE
              </th>
              <!-- <th class="col-2">
                ACCIONES
              </th> -->
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <!-- <tr v-for="departamento,i in departamentos" :key="departamento.id">
                        <td>{{ i+1 }}</td>
                        <td>{{ departamento.nombre_departamento }}</td>                        
                        <td>
                            <router-link :to="{path:'/departamento/edit/'+departamento.id}" class="btn btn-outline-warning">
                                <i class="fa-solid fa-edit"></i>
                            </router-link> &nbsp;
                            <button class="btn btn-outline-danger" @:click="eliminar(departamento.id,departamento.nombre_departamento)">
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
    </div>
  </div>
</template>

<script>
//import { ref } from 'vue';
import axios from "axios";
import { confirmar1 } from '../../funciones';
import { ref } from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
//const contador =ref(0);

import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import Select from "datatables.net-select";
import 'datatables.net-responsive-bs5';
//import 'datatables.net-select';

DataTable.use(DataTableLib);
DataTable.use(Select);

let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  name: 'MateriaView',
  components: { DataTable },
  data() {
    return {
      departamentos: null, docente: '', docs: [], principal: '',
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: 'nombre_departamento' }

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
    this.getDepartamentos();
    this.principal = '/departamentos';
  },
  methods: {
    verificarSeleccion() {
      let datos = this.departamentos;
      let identificador = '';
      let nombres = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombre_departamento}`;
        let clave = datos[idx].id;

        identificador = clave;
      });
      return { identificador, nombres };
    },
    async editarSeleccionado() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        this.$router.push('/departamento/edit/' + identificador + '/');
      } else {
        const error = 'Debes Seleccionar Un Departamento!';
        show_alerta(error, 'info')
      }
    },
    eliminarSeleccionado() {
      const { identificador, nombres } = this.verificarSeleccion();

      if (identificador) {
        const ruta = 'parametros/departamentos/' + identificador + '/';
        //const principal = '/docentes';
        confirmar1(identificador, nombres, ruta, this.principal);
        //this.$router.push('/estudiante/edit/'+identificador+'/');
      } else {
        const error = 'Debes Seleccionar Un Departamento!';
        show_alerta(error, 'info')
      }
    },
    getDepartamentos() {
      axios.get(BASE_URL + '/parametros/departamentos/')
        .then(
          response => (
            this.departamentos = response.data
          )
        );
    },
    // getDocentess(id_doc,codigo_asignatura){

    //   //console.log('aver'+id_doc);
    //   if(id_doc===null)
    //   {
    //     return;
    //   }else
    //   if(id_doc!==null||id_doc!=='undefined'||id_doc!=='')
    //   {      
    //     console.log(id_doc + codigo_asignatura);
    //   axios.get(BASE_URL+'/docentes/docentes/'+id_doc+'/').then(
    //     response =>(                 
    //       //revisar lo de fernando de objects
    //       //this.docente = `${response.data['nombres']} ${response.data['apellidop']} ${response.data['apellidom']}`
    //       this.docs[codigo_asignatura] = `${response.data['nombres']} ${response.data['apellidop']} ${response.data['apellidom']}`
    //     )
    //   ).catch(error => { 
    //       console.log(error)
    //       show_alerta(error,'error')
    //     });
    //   //console.log('mas:'+docs);
    //   return this.docs[codigo_asignatura];
    //   }
    // }
    eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }

      const ruta = 'parametros/departamentos/' + id + '/';
      confirmar1(id, nombre, ruta, this.principal);
      this.$router.push({ name: 'departamentos' })
    }
  }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';
</style>