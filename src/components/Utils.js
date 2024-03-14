export const saveToLocalStorage = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
  };
  
  export const loadFromLocalStorage = () => {
    const data = localStorage.getItem('formData');
    return JSON.parse(data);
  };
  