import {motion} from 'motion/react';
import {Star, Play, Quote, Users, TrendingUp, Award, Check, Video, Phone, ArrowRight} from 'lucide-react';
import {useState} from 'react';
import rebeccaVideo from '../assets/videos/Rebecca.mp4';
import stephenVideo from '../assets/videos/Stephen.mov';
import suzanneVideo from '../assets/videos/Suzanne.mp4';
import rebeccaImage from '../assets/images/Rebecca.jpg';
import stephenImage from '../assets/images/Stephen.jpg';
import suzanneImage from '../assets/images/Suzanne.jpg';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

interface TestimonialsProps {
    onNavigate: (page: Page) => void;
}

export function Testimonials({onNavigate}: TestimonialsProps) {
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
    const [activeFilter] = useState('all');

    const videoTestimonials = [
        {
            id: 1,
            name: 'Suzanne Wright',
            role: 'Founder, The Connection Rebellion',
            thumbnail: suzanneImage,
            videoUrl: suzanneVideo,
            rating: 5,
            category: 'va-support',
            preview: 'The team is highly skilled and guides in absolute detail. Highly recommended...',
        },
        {
            id: 2,
            name: 'Rebecca Bertoldi',
            role: 'Digital Marketing Consultant',
            thumbnail: rebeccaImage,
            videoUrl: rebeccaVideo,
            rating: 5,
            category: 'va-support',
            preview: 'Top notch communication and deliver excellent quality services...',
        },
        {
            id: 3,
            name: 'Stephen Bakarich',
            role: 'Founder, Aspire Artist Academy',
            thumbnail: stephenImage,
            videoUrl: stephenVideo,
            rating: 5,
            category: 'va-support',
            preview: 'The VA support team is absolutely phenomenal. Highly recommended...',
        },
    ];

    const writtenTestimonials = [
        {
            name: 'Janelle Mcalister',
            role: 'CEO, Tech Innovations',
            rating: 5,
            text: "I wish I could give Haris and his team a 10+ Star review. Everyone was professional. Haris was understanding and patient with my situation, he did not make me feel bad and when I became emotional throughout the process. The level of care and expertise was beyond exceptional.",
            date: 'December 2023',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
            verified: true,
        },
        {
            name: 'Sarah Williams',
            role: 'Marketing Director',
            rating: 5,
            text: "Haris was great and took his time with me to make sure everything was setup correctly. I love MevanAI and highly recommend! The attention to detail and customer service is unmatched in the industry.",
            date: 'January 2024',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
            verified: true,
        },
        {
            name: 'Kaream Mills',
            role: 'Founder, Digital Agency',
            rating: 5,
            text: "This team is a GOD SEND!! Their work acumen is out of this world! They made my work come into fruition. I'm definitely going to be a repeat customer. My family & friends will be customers. If you're looking to grow your agency, trust them with your projects!",
            date: 'November 2023',
            avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80',
            verified: true,
        },
        {
            name: 'Terherah Harris',
            role: 'Business Owner',
            rating: 5,
            text: "Haris, Waiz and the team at Mevan have been fantastic out of the gate. They have provided support for our agency that we needed and we are excited about the partnership moving forward! The results speak for themselves.",
            date: 'October 2023',
            avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80',
            verified: true,
        },
        {
            name: 'Michael Chen',
            role: 'E-commerce Director',
            rating: 5,
            text: "The AI chatbot has increased our customer satisfaction by 85%. The team's expertise in automation is remarkable. They understood our needs perfectly and delivered a solution that exceeded expectations.",
            date: 'December 2023',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
            verified: true,
        },
        {
            name: 'Emily Rodriguez',
            role: 'Operations Manager',
            rating: 5,
            text: "Our virtual assistant from Mevan AI has been a game-changer. Highly skilled, reliable, and always goes above and beyond. We've saved countless hours and improved our efficiency dramatically.",
            date: 'January 2024',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
            verified: true,
        },
    ];

    const stats = [
        {icon: Users, value: '150+', label: 'Happy Clients', gradient: 'from-cyan-500 to-teal-500'},
        {icon: Star, value: '4.9/5', label: 'Average Rating', gradient: 'from-teal-500 to-cyan-500'},
        {icon: TrendingUp, value: '98%', label: 'Satisfaction Rate', gradient: 'from-teal-500 to-cyan-500'},
        {icon: Award, value: '200+', label: 'Projects Completed', gradient: 'from-cyan-500 to-teal-500'},
    ];


    const filteredVideos = activeFilter === 'all'
        ? videoTestimonials
        : videoTestimonials.filter(v => v.category === activeFilter);

    return (
        <div className="relative pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: 0.2}}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-full mb-8"
                        >
                            <Star className="w-4 h-4 text-cyan-400 fill-cyan-400"/>
                            <span className="text-sm text-gray-300">Trusted by 150+ Happy Clients</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Client Success Stories
              </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Don't just take our word for it. Hear directly from our clients about their experience
                            working with Mevan AI and the transformative results they've achieved.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                whileHover={{scale: 1.05, y: -5}}
                                className="relative group"
                            >
                                <div
                                    className={`absolute inset-0 bg-linear-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}></div>
                                <div
                                    className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                                    <div
                                        className={`w-12 h-12 mx-auto mb-4 bg-linear-to-r ${stat.gradient} rounded-xl flex items-center justify-center`}>
                                        <stat.icon className="w-6 h-6 text-white"/>
                                    </div>
                                    <div
                                        className={`text-4xl font-bold bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials Section */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Video Testimonials
              </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Watch our clients share their success stories and experiences
                        </p>
                    </motion.div>

                    {/* Video Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredVideos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedVideo(video.id)}
                            >
                                <div
                                    className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div
                                    className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                                    {/* Video Thumbnail */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div
                                            className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                                        {/* Play Button */}
                                        <motion.div
                                            whileHover={{scale: 1.1}}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <div className="relative">
                                                <div
                                                    className="absolute inset-0 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                                                <div
                                                    className="relative w-20 h-20 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                                                    <Play className="w-8 h-8 text-white ml-1" fill="white"/>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Video Badge */}
                                        <div
                                            className="absolute top-4 right-4 px-3 py-1.5 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full flex items-center gap-2">
                                            <Video className="w-4 h-4 text-white"/>
                                            <span className="text-white text-sm font-medium">Video</span>
                                        </div>
                                    </div>

                                    {/* Video Info */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/50">
                                                <img
                                                    src={video.thumbnail}
                                                    alt={video.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-white font-semibold">{video.name}</h3>
                                                <p className="text-gray-400 text-sm">{video.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-1 mb-3">
                                            {[...Array(video.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400"/>
                                            ))}
                                        </div>

                                        <p className="text-gray-400 text-sm line-clamp-2">{video.preview}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Written Testimonials Section */}
            <section className="relative py-24 bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Written Reviews
              </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Read detailed reviews from our satisfied clients
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {writtenTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                whileHover={{y: -8}}
                                className="relative group"
                            >
                                <div
                                    className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div
                                    className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col">
                                    {/* Quote Icon */}
                                    <div className="mb-4">
                                        <div
                                            className="w-12 h-12 bg-linear-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                                            <Quote className="w-6 h-6 text-white"/>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400"/>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-300 leading-relaxed mb-6 grow">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                        <div
                                            className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/50">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                                {testimonial.verified && (
                                                    <div
                                                        className="w-5 h-5 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                                                        <Check className="w-3 h-3 text-white"/>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                            <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
                        <div
                            className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                className="text-center"
                            >
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span
                      className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Join Our Growing Family of Satisfied Clients
                  </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
                                    Experience the same exceptional service and results. Let's transform your business
                                    together with our AI-powered solutions.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                                    {[
                                        {label: 'Response Time', value: '< 2 Hours'},
                                        {label: 'Client Retention', value: '95%'},
                                        {label: 'Project Success', value: '98%'},
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{scale: 1.05}}
                                            className="bg-linear-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6"
                                        >
                                            <div
                                                className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                                                {item.value}
                                            </div>
                                            <div className="text-gray-400">{item.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.button
                                    onClick={() => onNavigate('contact')}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="relative group pt-8"
                                >
                                    <div
                                        className="absolute inset-0 bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                    <div
                                        className="relative bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2">
                                        <Phone className="w-5 h-5"/>
                                        Start Your Success Story
                                        <motion.div
                                            animate={{x: [0, 5, 0]}}
                                            transition={{duration: 1.5, repeat: Infinity}}
                                        >
                                            <ArrowRight className="w-5 h-5"/>
                                        </motion.div>
                                    </div>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={() => setSelectedVideo(null)}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-4xl w-full bg-linear-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl overflow-hidden"
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            ×
                        </button>

                        <div className="aspect-video bg-black">
                            <video
                                src={videoTestimonials.find(v => v.id === selectedVideo)?.videoUrl}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="p-6">
                            {videoTestimonials.find(v => v.id === selectedVideo) && (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {videoTestimonials.find(v => v.id === selectedVideo)?.name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {videoTestimonials.find(v => v.id === selectedVideo)?.role}
                                    </p>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
