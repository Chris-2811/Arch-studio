import { useState } from 'react';
import arrow from '@/assets/icons/icon-arrow.svg';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  interface Errors {
    name?: string;
    email?: string;
    message?: string;
  }

  function validateForm() {
    let isValid = true;
    const newErrors: Errors = {};

    if (!formData.name) {
      isValid = false;
      newErrors.name = "can't be empty";
    } else {
      newErrors.name = '';
    }

    if (!formData.email) {
      isValid = false;
      newErrors.email = "can't be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Invalid email format';
    } else {
      newErrors.email = '';
    }

    if (!formData.message) {
      isValid = false;
      newErrors.message = "can't be empty";
    } else {
      newErrors.message = '';
    }

    setErrors(newErrors);

    return isValid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (validateForm()) {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } else {
      console.log('form is not valid');
      return;
    }
  }

  function handleInputChange(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section className="mt-[4.75rem] md:mt-[12.5rem] lg:mt-[10rem] mb-[8.5rem]">
      <div className="myContainer xl:flex justify-between">
        <h2 className="md:max-w-[473px] lg:min-w-[350px]">
          Connect <br className="md:hidden lg:block" /> with us
        </h2>
        <form onSubmit={handleSubmit} className="relative lg:w-full">
          <div className="form-control pb-[1.3125rem] pt-[2.6125rem] md:pt-[3.75rem] border-b border-dark-blue flex items-center xl:pt-0">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="block text-xl w-full outline-none pl-[2.125rem] placeholder:text-grey-200 text-dark-blue"
            />
            {errors.name && (
              <small className="min-w-fit text-red text-lg font-bold tracking-tight">
                {errors.name}
              </small>
            )}
          </div>
          <div className="form-control pb-[1.3125rem] pt-[2.6125rem] border-b border-dark-blue flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="block text-xl w-full outline-none pl-[2.125rem] placeholder:text-grey-200 text-dark-blue"
            />
            {errors.email && (
              <small className="min-w-fit text-red text-lg font-bold tracking-tight">
                {errors.email}
              </small>
            )}
          </div>
          <div className="form-control relative w-full max-h-[126px] flex-items-center">
            <textarea
              placeholder="Message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full resize-none  border-b border-dark-blue text-xl outline-none pl-[2.125rem] placeholder:text-grey-200 text-dark-blue  pt-[2.6125rem]"
            ></textarea>
            {errors.message && (
              <small className="absolute right-0 bottom-4 min-w-fit text-red text-lg font-bold tracking-tight">
                {errors.message}
              </small>
            )}
          </div>
          <button className="bg-dark-blue grid place-items-center w-20 h-20 ml-auto hover:bg-grey-300">
            <img src={arrow} alt="arrow" />
          </button>

          {submitted && (
            <small className="absolute bottom-8 text-green-500 font-bold text-lg ">
              Your form has been submitted!
            </small>
          )}
        </form>
      </div>
    </section>
  );
}

export default Form;
