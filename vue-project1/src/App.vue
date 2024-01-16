<template>
  <div>
    <b-row>
      <b-col>
        <b-navbar toggleable="md" type="dark" variant="info">
          <b-navbar-brand href="#" class="px-3">Tarea 2</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#">About</b-nav-item>
              <b-nav-item href="#">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="3">
        <b-sidebar
          z-index="-1"
          id="sidebar"
          shadow
          visible
          no-header-close
          no-close-on-route-change
        >
          <b-nav vertical class="pt-5">
            <b-nav-item>
              <b-link :to="{ name: 'inicio' }">Opcion 1</b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link :to="{ name: 'main' }">Opcion 2</b-link>
            </b-nav-item>
          </b-nav>
        </b-sidebar>
      </b-col>

      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script></script>
