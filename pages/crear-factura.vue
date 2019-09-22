<template lang="html">
  <div class="create-invoice">
    Crear factura
    <div class="create-invoice__container">
      <form class="" action="index.html" method="post">
        <div class="input-field">
          <label for="">ID cliente</label>
          <input v-model="receptorIdentificacion" maxlength="10" type="number" name="receptorIdentificacion" value="">
        </div>
        <div class="input-field">
          <label for="">Monto</label>
          <input type="number" name="" value="">
        </div>
      </form>
    </div>
  </div>
</template>

<script src="../assets/scripts/pages/crear-factura.ts"></script>
<style lang="css" scoped>
  .create-invoice__container {
    margin: 20px;
    max-width: 420px;
  }
</style>
