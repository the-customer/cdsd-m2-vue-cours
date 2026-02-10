import {
    defineStore
} from "pinia";

export const useUiStore = defineStore('ui', {
    state: () => ({
        loading: false,
        toasts: [] //{id,type,message}
    }),

    actions: {
        setLoading(v) {
            this.loading = v
        },
        toast(message, type = 'info') {
            const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
            this.toasts.push({
                id,
                type,
                message
            });

            //
            setTimeout(() => {
                this.toasts = this.toasts.filter(t => t.id !== id);
            }, 2500)
        }
    }
})