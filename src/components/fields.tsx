const Fields = () => {
  return (
    <section>
      <h2>Добавить технологию</h2>
      <div className="grid">
        <label htmlFor="name-field">Название</label>
        <input
          type="text"
          id="name-field"
          name="name-field"
          placeholder="Введите название"
          className="px-2 py-1"
        />
        <label htmlFor="discription-field">Описание</label>
        <input
          type="text"
          id="discription-field"
          name="discription-field"
          placeholder="Введите описание"
          className="px-2 py-1 border-solid "
        />
      </div>
    </section>
  );
};

export default Fields;
