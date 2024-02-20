export default function Section({...props}) {
  return (
    <section className="py-[3rem] container px-6">
        <h1 className="font-inter text-dark text-[2rem] lg:text-[3rem] font-bold text-center mb-[2rem]"> {props.title} </h1>
        {props.children}
    </section>
  )
}
