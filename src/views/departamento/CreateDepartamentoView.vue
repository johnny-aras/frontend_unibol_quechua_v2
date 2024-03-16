<template>
  <div class="row mt-3 justify-center">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-secondary text-white text-center">
          CREAR DEPARTAMENTO
        </div>
        <div class="card-body">
          <form @submit="guardar">

            <div class="input-group mb-3">
              <input type="text" v-model="nombre_departamento" id="nombres" class="form-control" maxlength="50"
                placeholder="Nombre Departamento" required>
            </div>


            <div class="d-grid col-6-mx-auto">
              <button class="btn btn-success">
                <i class="fa-solid fa-floppy-disk"></i> Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { show_alerta, sendRequest } from "../../funciones";
import axios from 'axios';
let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  name: 'CreateMateriaView',
  data() {
    return {
      id: 0, nombre_departamento: '',
      departamentos: null, principal: '',
      url: BASE_URL + '/parametros/departamentos/'
      //nombre:'',url:'http://127.0.0.1:8000/estudiantes/estudiantes/'
    }
  },
  mounted() {
    this.getDocentes();
    this.getAniosAsignados();
    this.principal = '/materias';
  }
  , methods:
  {
    getDocentes() {
      axios.get(BASE_URL + '/docentes/docentes/')
        .then(
          response => (
            this.docentes = response.data
          )
        );
    },
    getAniosAsignados() {
      axios.get(BASE_URL + '/parametros/aniosCarreras/')
        .then(
          response => (
            this.anios_asignados = response.data
          )
        );
    },
    async guardar() {

      event.preventDefault();
      if (this.nombre_departamento.trim() === '') {
        show_alerta('El nombre del departamento no puede ser vacio', 'warning', 'nombres');
      }
      // else if(this.nombres.trim()==='')
      // {
      //   show_alerta('Los nombres no puede ser vacio','warning','nombres');
      // }else if(this.apellidop.trim()==='')
      // {
      //   show_alerta('EL apellidop no puede ser vacio','warning','apellidop');
      // }else if(this.apellidom.trim()==='')
      // {
      //   show_alerta('EL apellidom no puede ser vacio','warning','apellidom');
      // }
      // else if(this.direccion.trim()==='')
      // {
      //   show_alerta('La direccion  no puede ser vacio','warning','direccion');
      // }          
      // else if(this.fecha_nacimiento.trim()==='')
      // {
      //   show_alerta('La fecha de nacimiento no puede ser vacio','warning','fecha_nacimiento');
      // }
      // else if(this.depa_nacimiento.trim()==='')
      // {
      //   show_alerta('El departamento de nacimiento no puede ser vacio','warning','depa_nacimiento');
      // }
      // else if(this.fotografia.trim()==='')
      // {
      //   show_alerta('La fotografia no puede ser vacio','warning','fotografia');
      // }

      // else if(this.idioma_nativo.trim()==='')
      // {
      //   show_alerta('El idioma_nativo no puede ser vacio','warning','idioma_nativo');
      // }
      // else if(this.idioma_regular.trim()==='')
      // {
      //   show_alerta('El idioma regular no puede ser vacio','warning','idioma_regular');
      // }
      // else if(this.email.trim()==='')
      // {
      //   show_alerta('El email no puede ser vacio','warning','email');
      // }
      // else if(this.nacionalidad.trim()==='')
      // {
      //   show_alerta('La nacionalidad  no puede ser vacio','warning','nacionalidad');
      // }

      // else if(this.descripcion.trim()==='')
      // {
      //   show_alerta('La descripcion estado  no puede ser vacio','warning','descripcion_estado');
      // }
      else {
        const parametros = {
          nombre_departamento: this.nombre_departamento
        };
        await sendRequest('POST', parametros, this.url, 'Departamento Guardado Exitosamente!', this.principal);
        this.$router.push('/departamentos')
      }
    }
  }
}
</script>
