export default function Banner() {
  return (
    <div className="w-screen h-[720px] py-24 px-26 flex flex-wrap justify-between items-end bg-[url(/images/banner1.jpg)] bg-cover bg-center bg-no-repeat">
      {/* left  */}
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-white text-[120px] font-big-shoulders">
          GO-KARTS
        </h1>
        <div className="max-w-[552.25px] flex justify-between">
          <p className="text-white mt-4 max-w-[347px]">
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
      {/* right  */}
      <div className="w-[573px] flex flex-col items-end gap-[100px]">
        <div className="flex flex-col items-end gap-[-20px]">
          <div className="flex justify-center items-center gap-2.5 bg-[#d9d9d9] pl-3 pr-1 pt-1 pb-1 rounded-[50px]">
            <span className="font-bold text-base text-[#292929]">
              +420737878891
            </span>
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#e30613] px-3 py-1.5 rounded-[50px]">
              <svg className="w-3.5 h-3.5"></svg>
            </div>
          </div>
          <img className="w-[87px] h-[87px] object-cover"></img>
        </div>
      </div>
    </div>
  );
}
