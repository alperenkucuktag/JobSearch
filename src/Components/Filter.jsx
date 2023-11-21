import React, { useRef } from "react";
import { sortOptions, statusOptions, typeOptions } from "../Constants/İndex";
import { useDispatch } from "react-redux";
import {
  clearFilters,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortjob,
} from "../Redux/jobslice";

const Filter = () => {
  const dispatch = useDispatch(null);
  //useref seçiniz e getirir yani sıfırlar 1. aşama
  const searchRef = useRef(null);
  const statusRef = useRef(null);
  const typeRef = useRef(null);
  const sortRef = useRef(null);
  const handleChange = (e) => {
    dispatch(filterBySearch(e.target.value));
  };

  //TODO FORM ELEMANLARINI SIFIRLA
  const handleReset = (e) => {
    dispatch(clearFilters());
    //2.aşama
    searchRef.current.value = "";
    sortRef.current.value = "Seçiniz";
    typeRef.current.value = "Seçiniz";
    statusRef.current.value = "Seçiniz";
  };

  return (
    <section className='filter-sec'>
      <h2>Filtreleme Formu</h2>
      <form>
        <div>
          <label>Şirket</label>

          <input
            /* 3.aşama*/ ref={searchRef}
            onChange={handleChange}
            type='search'
          />
        </div>

        {/* Selectler */}
        <div>
          <label>Durum</label>
          <select
            ref={statusRef}
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
          >
            <option selected disabled>
              Seçiniz
            </option>
            {statusOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Tür</label>
          <select
            ref={typeRef}
            onChange={(e) => dispatch(filterByType(e.target.value))}
          >
            <option selected disabled>
              Seçiniz
            </option>
            {typeOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Sırala</label>
          <select
            ref={sortRef}
            onChange={(e) => dispatch(sortjob(e.target.value))}
          >
            <option value='' disabled>
              Seçiniz
            </option>
            {sortOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={handleReset} className='btn1' type='button'>
            Sıfırla
          </button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
