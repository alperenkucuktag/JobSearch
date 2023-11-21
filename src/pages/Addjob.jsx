import React from "react";
import { statusOptions } from "../Constants/İndex";
import { typeOptions } from "../Constants/İndex";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addjob = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newjob = Object.fromEntries(form.entries());

    if (!newjob.type || !newjob.status) {
      toast.info("Lütfen Durum ve Türü seçiniz");
      return;
    }

    newjob.id = v4();
    newjob.date = new Date();
    //işlistesine göndermek için db.json'a post isteği yaptık yani iş ekle formunu tamalayıp iş listesine gönderdik axios ile

    axios
      .post("http://localhost:4000/jobs", newjob)
      .then(() => {
        // işlsitesi yani ansayfaya useNavigate ile sağladık
        navigate("/");
        toast.success("Ekleme işlemi başarılı");
      })
      .catch(() => {
        toast.error("Ekleme İşlemi Başarısız");
      });
  };

  return (
    <div className='add-page'>
      <section className='add-sec'>
        <h2>Yeni iş Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pozisyon</label>
            <input type='text' name='position' required />
          </div>
          <div>
            <label>Şirket</label>
            <input type='text' name='company' required />
          </div>
          <div>
            <label>Lokasyon</label>
            <input type='text' name='location' required />
          </div>
          <div>
            <label>Durum</label>
            <select name='status' defaultValue='' required>
              <option value='' disabled>
                Seçiniz
              </option>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Tür</label>
            <select name='type' defaultValue='' required>
              <option value='' disabled>
                Seçiniz
              </option>
              {typeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button className='btn1' type='submit'>
              Ekle
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Addjob;
