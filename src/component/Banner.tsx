export default function Banner() {
  return (
    <div className="w-screen h-[720px] py-24 px-26 flex flex-wrap justify-between items-end bg-[url(/images/banner1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-white text-[120px] font-big-shoulders">
          GO-KARTS
        </h1>
        <div className="max-w-[552.25 px] flex justify-between">
          <p className="text-white mt-4 max-w-[347 px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus, nec ultrices urna scelerisque. Nam sit amet
            nisi nec velit aliquet ultricies. Donec nec nunc nec nunc.
          </p>
          <button className="w-[162.25px] h-[49px] [clip-path:polygon(15%_0%,_100%_0%,_85%_100%,_0%_100%)] border-[2px] border-[#d9d9d9] ">
            <div className="left-[28px] top-[14.50px] absolute text-[#d9d9d9] text-base font-medium font-['Space Grotesk']">
              Find out more
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
