import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ContactUs from '../components/ContactUs';


const HomePage = () => {
  return (
    <div className="bg-gray-100 shadow-blue-600 shadow-xl">
      <main className="container mx-auto p-4">
        <section className="text-center mt-8 flex flex-col items-center">
          <h2 className="text-6xl font-bold mb-4">Agencia especializada en Educacion</h2>
          <p className="mb-8 text-2xl text-[#828282]">Planea tus clases ahora</p>
          <button className="bg-black text-white py-2 px-4 rounded mb-8">Ver planes</button>
          <img 
            className="mt-5" 
            src="https://s3-alpha-sig.figma.com/img/aae5/6601/b799e0f3b956c09ed9506456efc6f225?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gX~eCw3cjRC57qeX07SmV~zGIn1TQM3jIUWvb~R7KoQNCGCG21FPpzSwrdhn0DULFm37IuxW6n1Q~qYQ53IQ9JDvnOAiNtMQnTr3LZVkd75KOrgh0GeAdBzEVI2BaXwZDatnYtiUn4Lk4kAzBK0TnwaF1nb7Puk2IX4LISG2XbPpu8OXanluz-5qgA9yz-N7Sjrd5CUIEv0HKPC~TfaE36g70bePrK92OfVrS54fzNoZwySMWTU1RUf6g8kW0fbDG~t34vH-~TTmMP6j8TCT9lafJdcK1-8fxBoTl95SaAW0ndn~t6M129tJc9ZgkGmTNhYHiTYO37cheFoNfOjMdA__" 
            alt="Education"
          />
        </section>
        <section className="mt-8">
          <h3 className="text-4xl font-bold mb-10 text-center mt-10">Beneficios de Usar TutorLabs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded p-6">
              <h4 className="text-2xl font-bold mb-2 text-gray-700">Acceso a Tutores Expertos</h4>
              <p>Obtén acceso a una red de tutores altamente calificados y con experiencia en diversas materias.</p>
            </div>
            <div className="bg-white shadow-lg rounded p-6">
              <h4 className="text-2xl font-bold mb-2 text-gray-700">Flexibilidad de Horarios</h4>
              <p>Programa sesiones de tutoría en los horarios que más te convengan, adaptándose a tu agenda.</p>
            </div>
            <div className="bg-white shadow-lg rounded p-6">
              <h4 className="text-2xl  font-bold mb-2 text-gray-700">Aprendizaje Personalizado</h4>
              <p>Recibe atención individualizada que se adapta a tus necesidades y objetivos de aprendizaje.</p>
            </div>
            <div className="text-center mt-8 mb-10 col-start-2">
            <HashLink to="/register-student" className="bg-black text-white p-[15px] rounded  ">Registrarme</HashLink>
          </div>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-4xl font-bold mb-5 text-center mt-10">Sponsors</h3>
          <p className="font-normal text-2xl text-[#828282] mb-10 text-center mt-10">Project Managers</p>
          <div className="sm:flex  sm:flex-col sm:gap-[20px] sm:items-center md:flex md:flex-row md:justify-around mt-5 md:gap-x-8">
            <div className="p-4 bg-white shadow-lg rounded w-[413px] h-[192px] flex justify-center items-center">
              <img 
                className="w-[324px] h-[128px]" 
                src="https://s3-alpha-sig.figma.com/img/4379/6060/fa111fdb6ad766e4c1fa8a17a5e3bfda?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWcpIKB37UwOknmOPjR5gdhyi8bXzlW0gDguRbL9U7qSCNYbJ~uLdLIfsqxaYz2u1Lr8GPB~5UudBd7rE8qKyrW8AMH6VTJQfsN3SMBik7Cvuh2zGRyESst8hWBCwAHUoprFofQqpNkkXOcRmAvbVVUkXxB3hlIumr5xy4i5Rv8XofOL4TNOQOMK5ZknynYwlQu1Wbz-bPB-A2IsNKpE-gUbgiibKWc1LoZAQmnAMGzRQSDQcVywZFp4p-ENVFY9PfkyIb4zWwdYh2MQZ8rKTgBCsvaUJU~8Wb1wPLwxdcKl4P1hHVjbDrK3dO--8SfeleYancPqpvYvOdPLvAc3Tg__" 
                alt="Sponsor 1"
              />
            </div>
            <div className="p-4 bg-white shadow-lg rounded w-[413px] h-[192px] flex justify-center items-center">
              <img 
                className="w-[316px] h-[94px]" 
                src="https://s3-alpha-sig.figma.com/img/30ce/7f9a/251712ecdd851c157209241c7b5dad9f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dp-98A-Eyzf1w5DR3NgqrxfcL8aqDxUttq-SBbL2RUmhE3kMRDD1dT1QBz7Yfn4rQWzfIvarEisHozQQhfJrndTeMpPrxplL3DGhzI4UDtJdKDMir8QKwW7gIeVNp7t-zaMw9dJVJnfGI~6NZJbRzR0uGHU2jMS0bS8-EhcktJBV08jlobh1BvDlddoijwGiyEJ80m2qxatDQdcc9bV7KA5vOs~nW26xrqZ57oSnv3HKAILJLJTQeA27iVNG40O8Ww~-Gg0DojI6dujjKN1i~HMYfbkLQxjhQp4zuDgTsfEURH6BiEIJLJAOEuRf~ZEaWLBaGgRY9GeJTDVENNYECg__" 
                alt="Sponsor 2"
              />
            </div>
            <div className="p-4 bg-white shadow-lg rounded w-[413px] h-[192px] flex justify-center items-center">
              <img 
                className="w-[180px] h-[185px] object-cover object-center"  
                src="https://s3-alpha-sig.figma.com/img/ae3b/84a7/62d40966697fff82306781a00a55389c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0VvBCVMaUOhRH2UokANVkjHVxp1oiZtrYNwVhav46twm6jYw53UrXKh3pA1tVjlMPRqt8CXdQAJ9YK7bzwGwoO2bqzP8AP~4xIOMxsCZ3xijK77gTOqiuCk6Mhe9PpVhBOVSTbaj5cP-YuY7XcIYuPGkG1f57SbA1jHVBsSmEnIusqHzfkfoGUNnZSc13neD-fjNDH0W0JbLavgM9e2UJS1i4ilzjqu3AxgO7PPsS~Abej5cPLS9H1NZhju-udknGGp-UhwmZEO4YACxo1gqWyzfoUa67rm3DGYKSKP6pcTN5BpGff9N2OA0~wy9ON10IGk5MkAp0OWppu165w~gw__" 
                alt="Sponsor 3"
              />
            </div>
          </div>
        </section>
        <section>
  <ContactUs />
        </section>
      </main>

    </div>
  );
};

export default HomePage;
