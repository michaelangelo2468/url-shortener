export default function Hero() {
    return (
        <section className="grid justify-center align-center mt-15">
            <h2 className="text-5xl">Shorten your loooong links:)</h2>
            <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            <div className="flex gap-2">
                <input type="text"  placeholder="Enter the link here" className="border rounded-xl"/>
                <button>Shorten now!</button>
            </div>
        </section>
    )
}