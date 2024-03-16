<template>
  <div class="container text-center">
  <div class="row">
    <div class="mb-3">
      <div class="d-grid col-6-mx-auto offset-md-9">
              <button class="btn btn-success">                
                <router-link to="/departamento/create" class="nav-link active" >NUEVO DEPARTAMENTO</router-link> <i class="fa-solid fa-graduation-cap"></i>
              </button>
      </div>
     </div>
  </div>
   <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
        <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
          <div class="table-responsive">
              <table class="table table-bordered table-hover table-striped">
                  <thead class="table-light">
                    <tr>                     
                      <th>
                        #
                      </th>                     
                      <th>
                        NOMBRE
                      </th>                      
                      <th class="col-2">
                        ACCIONES
                      </th>
                    </tr></thead>
                  <tbody class="table-group-divider" id="contenido">
                    <tr v-for="departamento,i in departamentos" :key="departamento.id">
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
                    </tr>                    
                  </tbody>
              </table>       
      </div>
    </div>
  </div>

</template>

<script>

import axios from "axios";
import {confirmar1} from '../../funciones';
//import {ref} from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
 //const contador =ref(0);
 let BASE_URL=process.env.VUE_APP_BASE_URL;
export default {
  name: 'MateriaView',
  data(){
    return {departamentos:null,docente:'',docs:[],principal:''}
  },
  mounted(){
    this.getDepartamentos();
    this.principal='/departamentos';
  },
  methods:{
    getDepartamentos(){
            axios.get(BASE_URL+'/parametros/departamentos/')
            .then(            
                response =>(
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
    eliminar(id,nombre){
    //   for (let index = 0; index < 10; index++) {
    //     sendRequest('POST',{
    //     "id":999,
    //     "nombre_provincia": "TEST-PROVINCIAS",
    //     "id_departamento": null
    // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
    //   }
      
      const ruta = 'parametros/departamentos/'+id+'/';
      confirmar1(id,nombre,ruta,this.principal);      
      this.$router.push({name:'departamentos'})
    }
  }
}
</script>
