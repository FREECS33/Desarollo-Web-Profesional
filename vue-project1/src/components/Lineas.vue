<template>
  <div>
    <h5>Lineas de vuelo</h5>
    <b-breadcrum :items="items"></b-breadcrum>
    <br />
    <b-link :to="{ name: 'disponibles' }">Regresar</b-link>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ text: "Regresar", href: "/disponibles" }],
    };
  },
};
</script>
