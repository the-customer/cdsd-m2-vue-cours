import {
    ref
} from "vue";
import {
    productService
} from "../services/product.service";

export function useApi(apiFn) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const execute = async (...args) => {
        loading.value = true;
        error.value = null;
        try {
            data.value = await apiFn(...args);
            return data;
        } catch (e) {
            error.value = e;
            throw e;
        } finally {
            loading.value = false;
        }
    }

    return {
        execute,
        data,
        error,
        loading
    }

}