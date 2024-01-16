<template>
  <div>
    <h5>Vuelos dispnibles</h5>
    <b-breadcrum :items="items"></b-breadcrum>
    <br />
    <b-link :to="{ name: 'inicio' }">Regresar</b-link>
    <br />
    <b-link :to="{ name: 'lineas' }">Lineas de vuelo</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Regresar", href: "/inicio" },
        { text: "Lineas de vuelo", href: "/lineas" },
      ],
    };
  },
};
</script>
