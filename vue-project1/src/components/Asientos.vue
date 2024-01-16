<template>
  <div>
    <h5>Asientos Reservados</h5>
    <b-breadcrum :items="items"></b-breadcrum>
    <br />
    <b-link :to="{ name: 'reservas' }">Regresar</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ text: "Regresar", href: "/reservar" }],
    };
  },
};
</script>
