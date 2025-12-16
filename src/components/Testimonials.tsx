import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'College Student',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'SpineTech transformed my posture in just 2 weeks. I no longer have back pain after long study sessions!',
    rating: 5
  },
  {
    name: 'Rohan Patel',
    role: 'Software Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'As someone who codes 8+ hours daily, this belt is a game-changer. The gentle reminders keep me conscious of my posture.',
    rating: 5
  },
  {
    name: 'Ananya Singh',
    role: 'Content Creator',
    image: 'https://images.pexels.com/photos/3765144/pexels-photo-3765144.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Comfortable, stylish, and actually works. I wear it during filming and forget it is even there!',
    rating: 5
  },
  {
    name: 'Arjun Thapa',
    role: 'Fitness Enthusiast',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The real-time feedback helped me correct my form. My gym performance has improved significantly!',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Real Results, Real People
          </h2>
          <p className="text-lg text-gray-400">
            Join thousands of users improving their posture daily
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-8 sm:p-12">
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex gap-1 justify-center sm:justify-start mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <p className="text-lg sm:text-xl text-gray-300 mb-4 italic">
                          "{testimonial.quote}"
                        </p>

                        <div>
                          <p className="text-xl font-bold text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-cyan-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-cyan-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-cyan-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
