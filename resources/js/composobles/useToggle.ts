import type { Ref } from 'vue';
import { ref } from "vue";

interface Toggle {
  isOpen: Ref<boolean>;
  toggle: () => void;
  close: () => void;
}

export function useToggle(initialValue: boolean): Toggle {
  const isOpen: Ref<boolean> = ref(initialValue);

  const toggle = (): void => {
    isOpen.value = !isOpen.value;
  };

  const close = (): void => {
    if (isOpen.value) {
      isOpen.value = false;
    }
  };

  return { isOpen, toggle, close };
}
