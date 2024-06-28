export const emailRegEx = /^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u;

export const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;

export const phoneRegEx = /^\+?[1-9]\d{1,14}$/;

export const onlyLettersRegEx =
  /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;

export const locationRegEx =
  /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇґҐ]+)*,\s*[a-zA-Zа-яА-ЯіІїЇґҐ'’\s-]+$/;
