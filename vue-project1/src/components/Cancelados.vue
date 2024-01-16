<template>
  <div>
    <h5>Vuelos cancelados</h5>
    <b-breadcrum :items="items"></b-breadcrum>
    <br />
    <b-link :to="{ name: 'inicio' }">Regresar</b-link>
    <br />
    <b-link :to="{ name: 'proximos' }">Proximos vuelos</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Regresar", href: "/inicio" },
        { text: "Proximos vuelos", href: "/proximos" },
      ],
    };
  },
};
</script>
