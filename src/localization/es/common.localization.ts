import locCommon from 'src/localization/en/common.localization';
import type { DeepPartial } from 'src/types/utils';

export default {
  booleanOptions: {
    yes: 'Si',
    no: 'No',
  },
  actions: {
    ok: 'Ok',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    save: 'Guardar',
    apply: 'Aplicar',
    close: 'Cerrar',
    search: 'Buscar',
    clear: 'Limpiar',
    sync: 'Sincronizar',
    add: 'Añadir',
    remove: 'Eliminar',
    addAll: 'Añadir Todo',
    removeAll: 'Eliminar Todo',
    filter: 'Filtrar',
  },
} satisfies DeepPartial<typeof locCommon>;
