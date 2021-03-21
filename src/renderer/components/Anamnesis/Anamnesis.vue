<template>
  <div class="p-card main-container">
    <div class="header-container p-d-flex p-ai-center">
      <h4 class="p-ml-2">
        Anamnese
      </h4>
    </div>
    <ScrollPanel class="scroll-container custombar">
      <div class="p-m-2">
        <!--        <Card-->
        <!--          v-for="mainItem in anamnesisTextdataModel.mainItems"-->
        <!--          :key="mainItem.mainText"-->
        <!--          class="p-mb-3"-->
        <!--        >-->
        <!--          <template #subtitle>-->
        <!--            {{ mainItem.mainText }}-->
        <!--          </template>-->
        <!--          <template #content>-->
        <!--            <div-->
        <!--              class="p-d-flex wrap"-->
        <!--            >-->
        <!--              <Button-->
        <!--                v-for="subitem in mainItem.subItems"-->
        <!--                :key="subitem.subText"-->
        <!--                class="p-button-outlined p-button-sm p-mr-2"-->
        <!--              >-->
        <!--                {{ subitem.subText }}-->
        <!--              </Button>-->
        <!--            </div>-->
        <!--          </template>-->
        <!--        </Card>-->
        <w-card
          v-for="mainItem in anamnesisTextdataModel.mainItems"
          :key="mainItem.mainText"
          shadow
          class="mb2 custom-card"
        >
          <p class="title5">
            {{ mainItem.mainText }}
          </p>
          <w-divider class="my2" />
          <w-flex wrap>
            <w-button
              v-for="subitem in mainItem.subItems"
              :key="subitem.subText"
              class="mr1 mb1"
              outline
              md
              tile
            >
              {{ subitem.subText }}
            </w-button>
          </w-flex>
        </w-card>
      </div>

      <!--      <div>{{ anamnesisTextdataModel.navigationText }}</div>-->
      <!--      <div v-for="mainItem in anamnesisTextdataModel.mainItems">-->
      <!--        {{ mainItem.mainText }}-->
      <!--        <div v-for="subitem in mainItem.subItems">-->
      <!--          {{ subitem.subText }} / {{ subitem.subItemAssociatedForm }}-->
      <!--          <div v-for="popupitem in subitem.popupItems">-->
      <!--            {{ popupitem.popupText }} / {{ popupitem.popupAssociatedForm }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </ScrollPanel>
    <div class="textarea-container">
      <div class="w-flex row p-input-filled">
        <Textarea class="textarea grow p-card" />
        <div class="w-flex column justify-end ml3">
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-sm p-button-raised mb1"
          />
          <Button
            icon="pi pi-download"
            class="p-button-rounded p-button-sm p-button-raised"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import { useTextdataService } from '../../services/Textdataservice';
import ScrollPanel from 'primevue/scrollpanel';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

export default defineComponent({
  name: 'Anamnese',
  components: {
    ScrollPanel, Textarea, Button,
  },
  setup() {
    const { anamnesisTextdataModel, getAnamnesisTextdata } = useTextdataService();
    getAnamnesisTextdata();

    return {
      anamnesisTextdataModel,
    };
  },
});
</script>

<style scoped lang="scss">
#root {
  height: 100%;
  width: 100%;
}
.main-container {
  height: 100%;
  width: 100%;
  border-style: solid;
  border-width: 0.1rem;
  border-color: var(--surface-500);
}
.header-container {
  height: 40px;
  width: 100%;
  background-color: var(--surface-d);
  border-bottom-color: var(--surface-500);
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
}
.scroll-container {
  width: 100%;
  height: calc(100vh - 500px);
}
.textarea-container {
  width: 100%;
  padding: 0.5rem;
  border-top-color: var(--surface-500);
  border-top-style: solid;
  border-top-width: 0.1rem;
}
.textarea {
  width: 100%;
  height: 315px
}
::v-deep(.p-scrollpanel) {
  &.custombar {
    .p-scrollpanel-wrapper {
      border-right: 9px solid var(--surface-b);
    }

    .p-scrollpanel-bar {
      background-color: var(--surface-400);
      border-radius: 4em 4em;
      opacity: 1;
      transition: background-color .2s;
    }
  }
}
.custom-card {
  background-color: #F5F5F5;
}
</style>
