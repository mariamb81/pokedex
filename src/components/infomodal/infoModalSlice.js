import { createSlice } from "@reduxjs/toolkit";
//slice to store the selected pokemon when a card is clicked
const initialState = {
    infoModalData: {},
    modalIsOpen: false,
};
export const infoModalSlice = createSlice({
    name: 'infoModal',
    initialState: initialState,
    reducers: {
        setInfoModal: (state, action) => { state.infoModalData = action.payload },
        clearInfoModal: (state, action) => {},
        setInfoModalOpen: (state, action) => { state.modalIsOpen = true },
        setInfoModalClosed: (state, action) => { state.modalIsOpen = false },
    },
});

//actions
export const { setInfoModal, setInfoModalOpen, clearInfoModal, setInfoModalClosed } = infoModalSlice.actions;

//selector functions
export const selectInfoModal = state => state.infoModal.infoModalData;

export default infoModalSlice.reducer;