import React from "react";

export default function Educations() {
  return (
    <>
      <div className="text-white my-4">
        <p className="text-[40px] font-bold flex justify-center">Educations</p>
        <p className="flex justify-center">
          My Educations There are many variations of passages of Lorem Ipsum
          available, but the majority{" "}
        </p>
        <p className="flex justify-center">
          have suffered alteration in some form, by injected
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 bg-black bg-slate-700 text-white p-8">
        <div className="col-span-3 font-semibold">
          Unverstity Of Agriculture
          <div className="flex text-[12px] mt-6">
            <p>Student</p>
            <p className="mx-5 bg-yellow-500 py-1 px-3">jan 2017 - Dec 2021</p>
          </div>
        </div>
        <div className="col-span-9 font-semibold">
          Certificate Of Agriculture
          <p className="mt-6 text-[12px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default.
          </p>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-12 gap-4 bg-black bg-slate-700 text-white p-8 border-b-2">
        <div className="col-span-3 font-semibold">
            ITI  Minya Universtiy
          <div className="flex text-[12px] mt-6">
            <p>Student</p>
            <p className="mx-5 bg-yellow-500 py-1 px-3">1 Mar 2022 - 1 Jul 2023</p>
          </div>
        </div>
        <div className="col-span-9 font-semibold">
            Certificate Of MEARN Track
          <p className="mt-6 text-[12px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default.
          </p>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-12 gap-4 bg-black bg-slate-700 text-white p-8 border-b-2">
        <div className="col-span-3 font-semibold">
          Diploma Of Biochemstriy
          <div className="flex text-[12px] mt-6">
            <p>Student</p>
            <p className="mx-5 bg-yellow-500 py-1 px-3">Oct 2021 - Jun 2022</p>
          </div>
        </div>
        <div className="col-span-9 font-semibold">
          Certificate Of Biochemstriy
          <p className="mt-6 text-[12px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default.
          </p>
        </div>
      </div>
    </>
  );
}
