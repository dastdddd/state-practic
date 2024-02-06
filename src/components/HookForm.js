import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  //register- состояние//handleSubmit-функция//errors-ощибка//reset-очистка

  const onSubmit1 = (form) => {
    console.log(form);
    console.log(form.firstName);
    reset(); //очистка input после ввода
  };

  return (
    <div className="hook-form">
      <form
        onSubmit={handleSubmit(onSubmit1)}
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "30%",
          margin: "50px auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <input
          {...register("lastName", { required: "поле обьязательно пополнить" })}
          type="text"
          placeholder="lastName"
          //required - это поле обрабатывает если пусто
        />
        {
          errors.lastName && <span>{errors.lastName.message}</span>
          //если input поле не заполнено выводятся эти ощибки
        }
        <input
          {...register("firstName", {
            required: "поле обьязательно пополнить",
          })}
          type="text"
          placeholder="firstName"
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="email"
        />
        {/*required:true если ошибки не задали то хотябы должен быть true */}
        {
          errors.email && <span>ERRORS</span>
          //Другой вариант незаполнения input но лучше через message
        }
        <input
          {...register("password", {
            required: "поле обьязательно пополнить",
            
            minLength: {
              value: 8,
              message: "минимально 8 символов",
              //minLength - эта поле обрабатывает если не 8 количество
            },
          })}
          type="text"
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button style={{ padding: "5px" }}>register</button>
        {/* required:true - ощибки проверяет */}
      </form>
    </div>
  );
};

export default HookForm;
