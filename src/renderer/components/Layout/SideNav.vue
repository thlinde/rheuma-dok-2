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
import Menu from 'primevue/menu';

export default defineComponent({
  name: 'SideNav',
  components: {
    Menu,
  },
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
            to: '/anamnesis',
          },
          {
            label: 'Untersuchung',
            icon: 'las la-stethoscope',
            to: '/medical-examination',
          },
          {
            label: 'Scores/Klassifikationen',
            icon: 'pi pi-star-o',
            to: '/scores',
          },
          {
            label: 'Labor',
            icon: 'las la-flask',
            to: '/laboratory',
          },
          {
            label: 'Bildgebung',
            icon: 'las la-image',
            to: '/imaging',
          },
          {
            label: 'Epikrise',
            icon: 'lar la-envelope',
            to: '/epicrisis',
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
            to: '/settings',
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
