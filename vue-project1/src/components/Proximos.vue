<template>
  <div>
    <h5>Proximos vuelos</h5>
    <b-breadcrum :items="items"></b-breadcrum>
    <br />
    <b-link :to="{ name: 'cancelados' }">Regresar</b-link>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ text: "Regresar", href: "/cancelados" }],
    };
  },
};
</script>
