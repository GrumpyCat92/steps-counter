import { useState } from "react";
import StepList from "./StepList";
import StepsForm from "./StepsForm";
import shortid from "shortid";

export default function StepsCounter() {
  const [form, setForm] = useState({
    date: "",
    km: 0,
    id: "",
  });
  const [list, setList] = useState([]);

  const addNew = (e) => {
    e.preventDefault();
    if (form.id !== "") {
      //если редактирование элемента
      const i = list.findIndex((item) => item.id === form.id);
      const newList = list;
      newList[i] = { id: form.id, km: form.km, date: form.date };
      setList([...newList]);
    } else {
      //если создание элемента
      const i = list.findIndex((item) => item.date === form.date);
      if (i === -1) {
        //создание новой записи
        setList((prev) => [
          ...prev,
          { date: form.date, km: form.km, id: shortid.generate() },
        ]);
      } else {
        //если с такой датой есть запись - редактирование км
        const newList = list;
        newList[i] = { ...newList[i], km: +newList[i].km + +form.km };
        setList([...newList]);
      }
    }
    //сброс формы
    setForm({
      km: 0,
      date: "",
      id: "",
    });
  };

  const deleteClick = (id) => {
    const i = list.findIndex((item) => item.id == id);
    const newList = list;
    newList.splice(i, 1);
    setList([...newList]);
  };

  const editClick = (id) => {
    const editItem = list.find((item) => item.id == id);
    setForm({
      id: editItem.id,
      km: editItem.km,
      date: editItem.date,
    });
  };

  return (
    <div>
      <StepsForm form={form} setForm={setForm} handleOk={addNew} />
      <StepList list={list} deleteClick={deleteClick} editClick={editClick} />
    </div>
  );
}
