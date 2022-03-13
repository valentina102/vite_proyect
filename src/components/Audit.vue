<template>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-10">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-2 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Auditoria </h2>

             <div class="form-outline form-white mb-4">
               <table class="table">
                  <thead >
                    <tr class=" gradient-custom">
                      <th scope="col">ID</th>
                      <th scope="col">Previous name</th>
                      <th scope="col">New name</th>
                      <th scope="col">Previous program</th>
                      <th scope="col">New program</th>
                      <th scope="col">Modify date</th>
                      <th scope="col">Process</th>
                      <th scope="col">Student id</th>
                      <th scope="col">User id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Mario</td>
                      <td>Octavo</td>
                      <td>Noveno</td>
                      <td>12-10-2022</td>
                      <td>Octavo</td>
                      <td>1</td>
                      <td>12</td>

                    </tr>
                       <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Mario</td>
                      <td>Octavo</td>
                      <td>Noveno</td>
                      <td>12-10-2022</td>
                      <td>Octavo</td>
                      <td>1</td>
                      <td>12</td>
                    </tr>
                       <tr>
                     <td>1</td>
                      <td>Mark</td>
                      <td>Mario</td>
                      <td>Octavo</td>
                      <td>Noveno</td>
                      <td>12-10-2022</td>
                      <td>Octavo</td>
                      <td>1</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
             </div>
             
             <div class="form-outline form-white mb-4">
              <button class="btn btn-outline-light btn-lg px-5" @click ="back()" type="submit">Volver</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'AuditPage',
  props: {
    msg: String
  },
  methods: {
  goCreateStudent(){
    this.$router.push('/createStudent');
  },
  back(){
    this.$router.push('/reports');
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
thead{
  border-color: black;
}
th{
 border: inset 0pt;
color: white;
font-weight: bold;
}
td{
color: white;
}
.link {
  color: #2574FC;
  text-decoration: none; 
  font-weight: bold;
}
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>
