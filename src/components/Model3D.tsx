export default function Model3D() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore SpineTech in 3D
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Rotate, zoom, and view the belt from every angle. Check sensor placement and belt fit.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 fade-in">
          <div className="w-full flex justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-8">
            <iframe
              src="https://app.sloyd.ai/embed/wf5biobm?width=800&height=600&fullscreen=true&mode=live"
              className="w-full max-w-4xl aspect-video rounded-lg"
              style={{ minHeight: '500px' }}
              frameBorder="0"
              allowFullScreen
              title="SpineTech 3D Model"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
