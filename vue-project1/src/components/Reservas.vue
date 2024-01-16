<template>
  <div>
    <h5>Reservas de vuelo</h5>
    <b-breadcrum :items="items"></b-breadcrum>
    <br />
    <b-link :to="{ name: 'inicio' }">Regresar</b-link>
    <br />
    <b-link :to="{ name: 'asientos' }">Asientos Reservados</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Regresar", href: "/inicio" },
        { text: "Asientos Reservados", href: "/asientos" },
      ],
    };
  },
};
</script>
