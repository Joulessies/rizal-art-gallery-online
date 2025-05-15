import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Palette, GraduationCap, Globe, BookOpen, Pencil } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.2,
      duration: 0.5 
    } 
  })
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-rizal-light-blue">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-4 text-rizal-navy">The Artistic Journey of José Rizal</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Beyond his fame as a writer and revolutionary, José Rizal was a prolific visual artist whose works spanned multiple disciplines.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Jose_Rizal_self_portrait_1883.jpg" 
              alt="José Rizal self-portrait" 
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">José Rizal's self-portrait, 1883</p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-2 text-rizal-navy">Artistic Training</h3>
              <p className="text-gray-700">
                Rizal began developing his artistic talents from a young age under the tutelage of renowned European masters. 
                He studied at the Academia de Dibujo y Pintura in Manila and later continued his artistic education in Madrid and Paris.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-2 text-rizal-navy">Versatile Mastery</h3>
              <p className="text-gray-700">
                His artistic repertoire included sketches, paintings, sculptures, and illustrations. The versatility of his skills allowed him 
                to capture portraits, landscapes, caricatures, and even anatomical studies with remarkable precision.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-2 text-rizal-navy">Art as Expression</h3>
              <p className="text-gray-700">
                For Rizal, art was not merely a hobby but a powerful medium to document society, preserve culture, and express 
                his patriotism. His works often reflected his observations of Filipino life and his experiences abroad.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="bg-white border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-rizal-gold text-4xl font-serif font-bold mb-3">
                    {index === 0 ? '50+' : index === 1 ? '1875' : '3'}
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {index === 0 ? 'Known Artworks' : index === 1 ? 'First Art Studies' : 'Artistic Disciplines'}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0 
                      ? 'Documented sketches, paintings, and sculptures created throughout his lifetime.' 
                      : index === 1 
                      ? 'Began formal art education at the Academia de Dibujo y Pintura in Manila.' 
                      : 'Mastered drawing, painting, and sculpture across his career.'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div 
          className="mt-24 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-3 bg-rizal-gold rounded-full mb-6">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4 text-rizal-navy">Educational Background</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-12">
            Rizal's pursuit of knowledge took him across continents, shaping his artistic sensibilities and intellectual depth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Ateneo Municipal de Manila",
              years: "1872-1877",
              description: "Received a Bachelor of Arts degree with highest honors. It was during these years that Rizal's artistic talents began to flourish under the guidance of Spanish Jesuit teachers."
            },
            {
              title: "Universidad de Santo Tomás",
              years: "1877-1878",
              description: "Studied philosophy and letters while simultaneously taking courses at the Academy of Fine Arts in Manila, where he honed his drawing and painting skills."
            },
            {
              title: "Universidad Central de Madrid",
              years: "1882-1885",
              description: "Earned his Licentiate in Medicine and a degree in Philosophy and Letters. In Madrid, he was exposed to European art movements that greatly influenced his artistic style."
            },
            {
              title: "University of Paris",
              years: "1885-1886",
              description: "Specialized in ophthalmology under Dr. Louis de Wecker. During his time in Paris, he frequented art museums and galleries, studying the works of European masters."
            },
            {
              title: "University of Heidelberg",
              years: "1886-1887",
              description: "Studied under Professor Otto Becker, completing his specialization in ophthalmology. In Germany, Rizal developed a more technical approach to his anatomical drawings."
            },
            {
              title: "Art Studies in Europe",
              years: "1882-1887",
              description: "Beyond his formal education, Rizal immersed himself in the artistic traditions of Spain, France, Germany, and Italy, visiting museums and studying under local artists."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-rizal-navy mb-1">{item.title}</h3>
                <p className="text-sm text-rizal-gold font-medium mb-3">{item.years}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Travels Section */}
        <motion.div 
          className="mt-24 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-3 bg-rizal-navy rounded-full mb-6">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4 text-rizal-navy">Global Influences</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Rizal's extensive travels across Europe and Asia exposed him to diverse artistic traditions and cultural perspectives.
          </p>
        </motion.div>

        <div className="relative mb-24">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rizal-gold"></div>
          {[
            {
              location: "Spain",
              year: "1882-1885",
              impact: "Immersed in Spanish classical art, Rizal studied the works of Diego Velázquez and Francisco Goya, influencing his portrait techniques and use of light and shadow.",
              position: "left"
            },
            {
              location: "France",
              year: "1885-1886",
              impact: "Exposed to French Impressionism and Neo-classicism, which influenced his approach to color and composition in landscape paintings and urban scenes.",
              position: "right"
            },
            {
              location: "Germany",
              year: "1886-1887",
              impact: "German precision and technical mastery influenced Rizal's scientific illustrations and anatomical drawings during his medical studies.",
              position: "left"
            },
            {
              location: "Japan",
              year: "1888",
              impact: "The delicate aesthetics of Japanese art influenced Rizal's line work and his approach to capturing natural elements in his sketches.",
              position: "right"
            },
            {
              location: "London",
              year: "1888",
              impact: "While copying illustrations from the British Museum, Rizal refined his technique in depicting historical scenes and figures.",
              position: "left"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${item.position === "left" ? "justify-end md:pr-12 lg:pr-24" : "md:pl-12 lg:pl-24"}`}
            >
              <div className={`relative z-10 ${item.position === "left" ? "md:mr-12" : "md:ml-12"} bg-white p-6 rounded-lg shadow-md max-w-md`}>
                <div className="absolute top-1/2 transform -translate-y-1/2 bg-rizal-gold rounded-full p-2 border-4 border-white">
                  {item.position === "left" ? (
                    <div className="absolute -right-[46px]">
                      <div className="h-4 w-4 bg-rizal-gold rounded-full"></div>
                    </div>
                  ) : (
                    <div className="absolute -left-[46px]">
                      <div className="h-4 w-4 bg-rizal-gold rounded-full"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-serif font-bold text-rizal-navy mb-1">{item.location}</h3>
                <p className="text-sm text-rizal-gold font-medium mb-3">{item.year}</p>
                <p className="text-gray-700">{item.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Artistic Legacy Section */}
        <motion.div 
          className="mt-24 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-3 bg-rizal-gold rounded-full mb-6">
            <Palette className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4 text-rizal-navy">Artistic Legacy</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-12">
            Rizal's artistic contributions continue to inspire Filipino artists and scholars, establishing a rich heritage of visual expression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-rizal-navy">Preservation Efforts</h3>
              <p className="text-gray-700">
                Today, institutions like the Rizal Museum in Calamba and the National Museum of the Philippines carefully preserve 
                and display Rizal's artwork, ensuring future generations can appreciate his visual contributions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-rizal-navy">Contemporary Influence</h3>
              <p className="text-gray-700">
                Modern Filipino artists continue to draw inspiration from Rizal's techniques, subjects, and 
                his ability to blend Western artistic traditions with Filipino sensibilities and themes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-rizal-navy">Cultural Identity</h3>
              <p className="text-gray-700">
                Rizal's visual art, much like his written works, has become an important element in defining 
                Filipino cultural identity and national pride in the global art scene.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Dapitan_Mi_Retiro_Rock.JPG" 
                alt="Mi Retiro Rock in Dapitan" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <p className="text-sm text-gray-500 mt-1 text-center">Mi Retiro Rock in Dapitan, where Rizal was exiled</p>
            </div>
            <div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Juan_Luna_-_The_Death_of_Cleopatra_-_Google_Art_Project.jpg/800px-Juan_Luna_-_The_Death_of_Cleopatra_-_Google_Art_Project.jpg" 
                alt="Artwork by Juan Luna, Rizal's contemporary" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <p className="text-sm text-gray-500 mt-1 text-center">Juan Luna, Rizal's artist friend</p>
            </div>
            <div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Painting_of_Jose_Rizal.jpg" 
                alt="Modern painting of José Rizal" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <p className="text-sm text-gray-500 mt-1 text-center">Modern interpretation of Rizal</p>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-rizal-navy text-white p-12 rounded-lg my-24 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <BookOpen className="w-12 h-12 text-rizal-gold mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "I have to believe much in God because I have lost my faith in man."
            </blockquote>
            <cite className="block text-rizal-gold text-lg">— José Rizal, in a letter to Ferdinand Blumentritt, 1892</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
