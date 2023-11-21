import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mainJobs: [],
  jobs: [],
  isLoading: false, //veriler yüklendimi
  isError: false, //hata var mı
};

const jobslice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJob: (state, action) => {
      (state.jobs = action.payload),
        (state.mainJobs = action.payload),
        (state.isLoading = true),
        (state.isError = false);
    },
    setError: (state) => {
      (state.isError = true), (state.isLoading = true), (state.isError = true);
    },
    filterBySearch: (state, action) => {
      //arama terimini küçük harfe çevirme
      const query = action.payload.toLowerCase();
      //arama terimini güncelleme
      const filter = state.mainJobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );

      //state'i güncelleme
      state.jobs = filter;
    },

    filterByStatus: (state, action) => {
      const filtred = state.mainJobs.filter(
        (job) => job.status === action.payload
      );
      state.jobs = filtred;
    },
    filterByType: (state, action) => {
      const filtreds = state.mainJobs.filter(
        (job) => job.type === action.payload
      );
      state.jobs = filtreds;
    },
    sortjob: (state, action) => {
      switch (action.payload) {
        // localcompare tarayıcının diline göre harfleri karşılaştırır
        //metin ifadelerini a-z ye sıralama
        case "a-z":
          state.jobs.sort((a, b) => a.company.localeCompare(b.company));
          break;
        case "z-a":
          // b ile a nın yerini değiştirdik
          state.jobs.sort((a, b) => b.company.localeCompare(a.company));
          break;
        case "En Yeni":
          state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "En Eski":
          state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
      }
    },
    clearFilters: (state) => {
      state.jobs = state.mainJobs;
    },
  },
});
// Aksiyonları export etme
export const {
  setJob,
  setError,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortjob,
  clearFilters,
} = jobslice.actions;
//createslice ın oluşturduğu reducer'ı export etme
export default jobslice.reducer;
