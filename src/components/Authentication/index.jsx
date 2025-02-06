export default function Authentication({
  children,
  id,
  sideImage,
  direction,
  quote,
  addClass = "",
}) {
  return (
    <section id={id} className={`section-padding-x pt-24 pb-12 ${addClass}`}>
      <div className="container max-w-screen-sm lg:max-w-screen-lg">
        <div
          className={`flex ${
            direction === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
          } flex-col rounded-lg mx-auto shadow-purple-base shadow-md overflow-hidden h-auto`}
        >
          <div
            className={`h-24 md:h-36 lg:h-auto w-full lg:w-1/2 bg-cover bg-center relative`}
            style={{ backgroundImage: `url('${sideImage}')` }}
          >
            <div className="z-10 absolute from-transparent to-slate-900/50 bg-gradient-to-b w-full h-full"></div>
            <p className="absolute text-light-base font-medium bottom-4 left-4 z-20">
              {quote}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
