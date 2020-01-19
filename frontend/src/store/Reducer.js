const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DOC_NAME':
            return {
                ...state,
                doctorName: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'SET_DOCUMENTS_DATA':
            return {
                ...state,
                docsumentsData: action.payload
            };
        case 'INC_BOOKING_STEP':
            return {
                ...state,
                bookingStep: state.bookingStep + 1
            };
        case 'DEC_BOOKING_STEP':
            return {
                ...state,
                bookingStep: state.bookingStep - 1
            };
        case 'SET_DAY':
            return {
                ...state,
                selectedDay: action.payload
            };
        case 'SET_CAT':
            return {
                ...state,
                selectedCat: action.payload
            };
        case 'SET_DOCTOR_DATA':
            return {
                ...state,
                doctorData: action.payload
            };
        case 'SET_SNACK':
            return {
                ...state,
                openSnack: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;