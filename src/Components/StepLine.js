export default function StepLine({ item, deleteClick, editClick }) {
  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.km}</td>
      <td>
        <button
          className="material-icons md-48"
          onClick={() => deleteClick(item.id)}
        >
          delete
        </button>
        <button
          className="material-icons md-48"
          onClick={() => editClick(item.id)}
        >
          mode_edit
        </button>
      </td>
    </tr>
  );
}
