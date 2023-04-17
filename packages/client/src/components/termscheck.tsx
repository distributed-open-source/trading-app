import { useState } from "react";

export default function Termcheck() {

  const [showModal, setShowModal] = useState(false);
  const [isChecked,setChecked]=useState(false);

  return (
    <>
      <div className="m-2">
      <input 
        type="checkbox" 
        name="terms" 
        className="mr-2" 
        checked={isChecked}
        onChange={()=>setChecked(!isChecked)}
      />
        <span>By registering i accept all</span>
        <a
          href="#"
          className="font-bold text-sm hover:underline ml-1 mr-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
         terms (Modal)
        </a>
        and 
        <a  className="font-bold text-sm hover:underline ml-1" 
          href="/terms"
          target="_blank"
        > 
         conditions
        </a>
      </div>
      {showModal &&
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl sm:m-4">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-slate-900 outline-none focus:outline-none p-4">
                <div className="flex justify-between border-b border-solid pb-2 mb-4">
                  <h2 className="font-bold">Terms and conditions</h2>
                  <button
                    onClick={() => setShowModal(false)}
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  </button>
                </div>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab recusandae, vel necessitatibus repudiandae harum facilis officiis earum obcaecati quam sunt rerum totam nam eos consequatur facere nisi laudantium cum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio officiis provident, accusamus at enim eius. Similique repellendus dicta rerum praesentium consequuntur delectus ab accusamus, ipsam laboriosam ea nam fugiat.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex explicabo amet harum maiores minima odio tempore ea, voluptate labore odit quaerat saepe voluptas, nulla fugit impedit ad vel sapiente error!
                </div>
                <h3 className="text-md font-bold">1 . Test</h3>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab recusandae, vel necessitatibus repudiandae harum facilis officiis earum obcaecati quam sunt rerum totam nam eos consequatur facere nisi laudantium cum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio officiis provident, accusamus at enim eius. Similique repellendus dicta rerum praesentium consequuntur delectus ab accusamus, ipsam laboriosam ea nam fugiat.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex explicabo amet harum maiores minima odio tempore ea, voluptate labore odit quaerat saepe voluptas, nulla fugit impedit ad vel sapiente error!
                </div>
                <div className="flex items-start justify-center p-5">
                  
                  <button
                    className="text-red-500 flex items-center font-bold uppercase px-6 py-2 text-sm rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Close
                  </button>
                  <button
                    className="text-emerald-500 flex items-center font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        setShowModal(false);
                        setChecked(true);
                      }
                    }
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      }
    </>
  );
}
