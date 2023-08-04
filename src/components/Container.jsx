
const Container = () => {
  return (
    <div className="flex justify-center ">
        <section className="m-auto w-[90%] shadow-lg absolute top-16 pt-4 overflow-hidden rounded-b-lg">
            <div className=" flex flex-col items-center overflow-hidden">
            <input type="text" className="bg-white w-full my-4 py-3 rounded mx-5" placeholder="Create a new todo..."/>
            <article className="w-full rounded-t-lg overflow-hidden divide-y-2">
                <div className="bg-white py-3">Complete online JavaScript course</div>
                <div className="bg-white py-3">Complete online JavaScript course</div>
                <div className="bg-white py-3">Complete online JavaScript course</div>
                <div className="bg-white py-3">Complete online JavaScript course</div>
                <div className="bg-white py-3">Complete online JavaScript course</div>
            </article>
            </div>

        </section>
    </div>
  )
}

export default Container