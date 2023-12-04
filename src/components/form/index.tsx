import { useState } from 'react';

import Button from '../button';

type FormProps = {
  submitFunction: (title: string, pages: number) => void
};

function Form({ submitFunction }: FormProps) {
  const [formData, setFormData] = useState({ title: '', pages: 0 });
  const [errorMessages, setErroMessages] = useState<string[]>([]);

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => (
      {
        ...prevData,
        [target.name]: target.value,
      }
    ));
  }

  function resetForm() {
    setFormData({ title: '', pages: 0 });
  }

  function isFormValid() {
    const errors = [];

    if (formData.title === '') {
      errors.push('O campo Título é obrigatório');
    }

    if (formData.pages <= 0) {
      errors.push('O campo Pages precisa ser um número maior que 0');
    }

    setErroMessages(errors);
    return errors.length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isFormValid()) {
      submitFunction(formData.title, formData.pages);
      resetForm();
      setErroMessages([]);
    }
  }

  return (
    <form
      className="books-form"
      onSubmit={ handleSubmit }
    >
      <input
        type="text"
        placeholder="Tìtulo"
        name="title"
        value={ formData.title }
        onChange={ handleChange }
      />
      <input
        type="number"
        placeholder="Quantidade de páginas"
        name="pages"
        value={ formData.pages }
        onChange={ handleChange }
      />
      {errorMessages.length > 0 && (
        <div className="form-message">
          {errorMessages.map((message) => (
            <p key={ message }>{message}</p>
          ))}
        </div>
      )}
      <Button>
        Adicionar
      </Button>
    </form>
  );
}

export default Form;
