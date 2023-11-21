import React, { useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJob, setError } from "../Redux/jobslice";
import Loading from "../Components/Loading";
import RereshButton from "../Components/RereshButton";
import Filter from "../Components/Filter";

const Joblist = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  // 1.refresh için dışarıya çektik fetchData yı
  const fetchData = () => {
    axios
      .get(" http://localhost:4000/jobs ")
      .then((res) => dispatch(setJob(res.data)))
      .catch(() => dispatch(setError()));
  };
  // 2.ardından fetchdata yı useEFFECT İN İÇİNE ALDIK(REFRESH BUTTON)
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='list-page'>
      <Filter />
      <h3 className='job-count'>
        Bulunan ({state.jobs.length}) iş arasından ({state.jobs.length}) tane
        görüntüleniyor
      </h3>
      <section className='job-list'>
        {!state.isLoading && <Loading />}

        {/*Yüklendiyse ve hata yoksa listele varsa uyar  */}
        {state.isLoading && !state.isError ? (
          state.jobs.map((job) => <Card job={job} key={job.id} />)
        ) : (
          <p className='error-msg'>
            <span>Üzgünüz bir hata oluştu</span>
            {/*3. Ardından fetchdatayı handlerefin içine aldık son olarak refreshbutton.jsx e geç (REFRESH BUTTON)*/}
            <RereshButton handleRef={() => fetchData()} />
          </p>
        )}
      </section>
    </div>
  );
};

export default Joblist;
