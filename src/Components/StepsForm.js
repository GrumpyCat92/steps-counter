export default function StepsForm({ form, setForm, handleOk }) {
  const changeDate = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      date: target.value,
    }));
  };
  const changeKm = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      km: target.value,
    }));
  };

  const changeId = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      id: target.id,
    }));
  };
  return (
    <form onSubmit={handleOk}>
      <input
        id="date"
        type="date"
        value={form.date}
        onChange={changeDate}
      ></input>
      <input id="km" type="number" value={form.km} onChange={changeKm}></input>
      <input type="hidden" value={form.id} onChange={changeId}></input>
      <button type="submit">OK</button>
    </form>
  );
}
