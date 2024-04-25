import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  keyword: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]; //statedeki tüm dataları dön. ve son datayı da ekle.
    },
    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload === "asc"
            ? a.price - b.price
            : action.payload === "desc"
            ? b.price - a.price
            : null
        ),
      ]; //statedeki tüm dataları dön. ve son datayı da ekle.
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((dt) => dt.id !== action.payload)]; //id değeri actionpayloaddan farklı olanları filtrele.
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((dt) =>
          dt.id === action.payload.id ? { ...dt, ...action.payload } : dt
        ),
      ];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
