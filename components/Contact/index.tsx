'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

type FormState = {
  succeeded: boolean;
  submitting: boolean;
  errors: { email?: string[]; message?: string[]; name?: string[] };
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgzezrn");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = (name: string, email: string, message: string) => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = form.value;
    const email = form.email.value;
    const message = form.message.value;

    const errors = validateForm(name, email, message);

    if (Object.keys(errors).length === 0) {
      handleSubmit(e);
    } else {
      setFormErrors(errors);
    }
  };


  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              {isSubmitted ? (
                <div className="text-center">
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Message Envoyé avec succès !
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    Merci pour votre message, notre équipe de support reviendra vers vous rapidement.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Números de contacto
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    Nuestro equipo de soporte se comunicará con usted por correo electrónico.

                  </p>
                  <form onSubmit={handleFormSubmit}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Su nombre
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          />
                          {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Tu correo electrónico                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          />
                          {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Tu mensaje
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Enter your Message"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          ></textarea>
                          {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                        Enviar mensaje                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
