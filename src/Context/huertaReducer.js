export const huertaReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTUALIZAR_HUERTA':
            return {
                ...state,
                huerta: payload
            }

    }
}