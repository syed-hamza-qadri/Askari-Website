import Image from "next/image"

export function Gallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4 text-center text-askari-green">Gallery</h2>
        <p className="text-gray-600 text-center mb-8">Explore our luxury homes and construction projects in Sargodha</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/workstation.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/waterfall-between-rocks.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/trees-with-snow.png"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/tree-buds.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/tiger-drinking-water.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/tall-well-preserved-buildings.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/sunny-beautiful-wall.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/stereo-gear.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/rooftop-oasis.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/rocky-beach.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/photographer-holding-camera.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[150px] rounded-lg overflow-hidden">
            <Image
              src="https://cdn.zyrosite.com/cdn-builder-placeholders/instagram/koi-fishes.jpg"
              alt="Gallery Image"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
