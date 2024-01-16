<template>
  <div>
    <h5>Inicio</h5>
    <b-breadcrum :items="items"></b-breadcrum>
    <br />
    <b-link :to="{ name: 'reservas' }">Reservas de vuelo</b-link>
    <br />
    <b-link :to="{ name: 'disponibles' }">Vuelos disponibles</b-link>
    <br />
    <b-link :to="{ name: 'cancelados' }">Vuelos cancelados</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Reservas de vuelos", href: "/reservar" },
        { text: "Vuelos disponibles", href: "/disponibles" },
        { text: "Vuelos cancelados", href: "/cancelados" },
      ],
    };
  },
};
</script>
