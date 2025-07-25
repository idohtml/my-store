import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] max-w-7xl mx-auto px-4 py-16 gap-8">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-gray-900">
          Summer Collection 2024
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-xl">
          Refresh your wardrobe with the latest arrivals for Men, Women, and
          Kids. Discover premium styles, bold colors, and exclusive deals for
          the season.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="/products">Shop Now</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8"
          >
            <a href="/products/sale">View Sale</a>
          </Button>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/images/hero-fashion.jpg" // Replace with your own image
          alt="Featured Fashion"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover max-h-[400px] w-auto"
          priority
        />
      </div>
      {/* Optional: Decorative background shapes */}
      <div className="absolute -z-10 left-0 top-0 w-full h-full pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[40vw] bg-gradient-to-br from-pink-100 via-blue-100 to-transparent rounded-full blur-3xl opacity-40" />
      </div>
    </section>
  );
}
