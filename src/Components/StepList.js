import StepLine from "./StepLine";

export default function StepList({ list, deleteClick, editClick }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Дата</td>
          <td>Пройдено км</td>
          <td>Действия</td>
        </tr>
      </thead>
      <tbody>
        {list
          .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
          .map((item) => (
            <StepLine
              key={item.id}
              item={item}
              deleteClick={deleteClick}
              editClick={editClick}
            />
          ))}
      </tbody>
    </table>
  );
}
