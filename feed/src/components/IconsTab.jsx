export default function IconsTab({ Icon, header, para }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4">
      <div className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl md:w-1/6 text-primary hover:text-secondary transition-all duration-300 hover:scale-105">
        <Icon />
      </div>
      <div className="flex flex-col items-start text-start gap-2 w-5/6">
        <h2 className="text-lg xl:text-2xl font-semibold">{header}</h2>
        <p className="text-sm xl:text-lg font-normal">{para}</p>
      </div>
    </div>
  );
}
