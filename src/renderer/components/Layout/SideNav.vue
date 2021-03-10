<template>
  <w-flex
    column
    class="el grey-light2--bg pt5 pb4 pl5"
  >
    <div class="p-grid">
      <Menu
        :model="menuItems1"
        class="p-col-fixed"
        style="width: 274px;"
      />
    </div>

    <div class="spacer" />

    <div class="p-grid">
      <Menu
        :model="menuItems2"
        class="p-col-fixed"
        style="width: 274px;"
      />
    </div>
  </w-flex>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { useElectron } from '/@/use/electron';

export default defineComponent({
  name: 'SideNav',
  setup() {
    const { requestQuitApp } = useElectron();

    const menuItems1 = [
      {
        label: 'Ansichten',
        items: [
            {
              label: 'Patient',
              icon: 'pi pi-user',
              to: '/',
            },
            {
              label: 'Anamnese',
              icon: 'pi pi-book',
              to: '/about',
            },
          {
            label: 'Untersuchung',
            icon: 'las la-stethoscope',
            to: '/about',
          },
          {
            label: 'Scores/Klassifikationen',
            icon: 'pi pi-star-o',
            to: '/about',
          },
          {
            label: 'Labor',
            icon: 'las la-flask',
            to: '/about',
          },
          {
            label: 'Sonografie',
            icon: 'las la-wifi',
            to: '/about',
          },
          {
            label: 'Röntgen/MRT',
            icon: 'las la-radiation-alt',
            to: '/about',
          },
          {
            label: 'Epikrise',
            icon: 'lar la-envelope',
            to: '/about',
          },
          ],
      },
    ];

    const menuItems2 = [
      {
        label: 'Programm',
        items: [
          {
            label: 'Konfiguration',
            icon: 'pi pi-cog',
            to: '/',
          },
          {
            label: 'Beenden',
            icon: 'pi pi-power-off',
            command: () => {
              requestQuitApp();
            },
          },
        ],
      },
    ];

    return { menuItems1, menuItems2 };
  },
});
</script>

<style scoped lang="scss">
.el {
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  //background-color: #848484;
}
.nav-space {
  width: 1rem;
}
.menu {
  width: 280px;
}
</style>
