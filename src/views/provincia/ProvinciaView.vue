<template>
<div class="container text-center">
  <div class="row">
    <div class="mb-3">
      <div class="d-grid col-6-mx-auto offset-md-9">
              <button class="btn btn-success">                
                <router-link to="/provincia/create" class="nav-link active" >NUEVA PROVINCIA</router-link> 
              </button>
      </div>
     </div>
  </div>
  <div class="row">
     <div class="col-lg-8 offset-lg-2">
         <div class="table-responsive">
             <table class="table table-bordered table-hover">
                 <thead><tr><th>#</th><th>NOMBRE</th><th>ACCIONES</th></tr></thead>
                 <tbody class="table-group-divider" id="contenido">
                   <tr v-for="prov, i in provincias" :key="prov.id">
                       <td>{{ (i+1) }}</td>
                       <td >{{ prov.nombre_provincia }}</td>
                       <!-- <td >{{ prov.created }}</td>
                       <td >{{ prov.modified }}</td> -->
                       <td>
                           <router-link :to="{path:'/provincia/edit/'+prov.id}" class="btn btn-outline-warning">
                               <i class="fa-solid fa-edit"></i>
                           </router-link> &nbsp;
                           <button   class="btn btn-outline-danger" v-on:click="eliminar(prov.id,prov.nombre_provincia)">
                               <i class="fa-solid fa-trash"></i>
                           </button>
                       </td>
                   </tr>
                 </tbody>
             </table>
         </div>
     </div>
   </div>
</div>
</template>

<script>
// @ is an alias to /src
//import {ref} from 'vue';
import axios from "axios";
import {confirmar} from '../../funciones';
//import {ref} from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
let BASE_URL=process.env.VUE_APP_BASE_URL;
export default {
 
 name: 'HomeView',
 data(){
   return {provincias:null,datos:null}
 },
 mounted(){
   this.datos = this.getProvincias();
   console.log(this.datos.result);


 },
 methods:{
   async getProvincias(){
         await  axios.get(BASE_URL+'/parametros/provincias/')
           .then(            
               response =>(
                   this.provincias = response.data                
               )
           );
           return this.provincias
           
   },eliminar(id,nombre){
   //   for (let index = 0; index < 10; index++) {
   //     sendRequest('POST',{
   //     "id":999,
   //     "nombre_provincia": "TEST-PROVINCIAS",
   //     "id_departamento": null
   // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
   //   }
     confirmar(id,nombre);
     
   }
 }
}
</script>
