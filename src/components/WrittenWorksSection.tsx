
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LiteraryWorksPagination from './LiteraryWorksPagination';

interface WrittenWork {
  id: number;
  title: string;
  year: string;
  description: string;
  category: 'novel' | 'poetry' | 'essay' | 'play';
  imageUrl?: string;
  fullText?: string;
  analysis?: string;
}

const writtenWorks: WrittenWork[] = [
  {
    id: 1,
    title: "Noli Me Tángere",
    year: "1887",
    description: "Rizal's first novel exposes the corruption of Spanish colonial rule in the Philippines, following the story of Juan Crisóstomo Ibarra y Magsalin, who returns home after studying in Europe.",
    category: 'novel',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Noli_me_tangere_first_edition_cover.png",
    fullText: "Noli Me Tángere (Latin for 'Touch Me Not') is a novel written by José Rizal, considered one of the national heroes of the Philippines, during the colonization of the country by Spain to expose the inequities of the Spanish Catholic priests and the ruling government. The title is taken from the Latin words of Jesus 'Noli me tangere' ('Touch me not') spoken to Mary Magdalene after his resurrection. The novel was first published in 1887 in Berlin, Germany. The novel is more commonly referred to by its shortened name Noli. The novel begins with a reception given by Capitan Tiago (Santiago de los Santos) at his house in Calle Anloague (now Juan Luna Street) on the last day of October. The reception or dinner is given in honor of Crisostomo Ibarra, who has just returned to the Philippines after seven years of study in Europe.",
    analysis: "Noli Me Tángere is a scathing indictment of the Catholic Church and Spanish colonial rule in the Philippines. The novel's central themes include the abuse of power, corruption, discrimination, and the struggle for independence. Through characters like Ibarra and María Clara, Rizal explores the Filipino identity and the impact of colonial rule on Filipino society. The novel was revolutionary in its time, inspiring nationalist sentiments among Filipinos and contributing to the Philippine Revolution against Spanish rule."
  },
  {
    id: 2,
    title: "El Filibusterismo",
    year: "1891",
    description: "The sequel to Noli Me Tángere continues Ibarra's story under the disguise of Simoun, who returns with a revolutionary plot against the Spanish colonizers.",
    category: 'novel',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/El_Filibusterismo.jpg",
    fullText: "El Filibusterismo (The Subversive) is the second novel written by José Rizal and the sequel to Noli Me Tángere. It was published in 1891 in Ghent, Belgium. The novel's dark tone departs significantly from the previous novel's relatively hopeful mood. The novel centers on Crisostomo Ibarra, who has returned to the Philippines after a 13-year absence. Driven underground by the Spanish authorities, Ibarra has recently returned from Europe under the identity of Simoun, a wealthy jeweler and confidant of the Captain-General.",
    analysis: "El Filibusterismo is darker and more pessimistic than its predecessor, reflecting Rizal's growing realization that reform within the existing colonial framework might be impossible. The novel advocates for education and the development of Filipino youth as key to the country's future. The character of Simoun, who attempts to catalyze revolution through violence, ultimately fails, suggesting Rizal's ambivalence about revolutionary tactics despite his desire for his country's liberation."
  },
  {
    id: 3,
    title: "Mi Último Adiós",
    year: "1896",
    description: "Rizal's final poem, written on the eve of his execution, expressing his love for his native land and his willingness to die for it.",
    category: 'poetry',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mi_ultimo_adios_manuscript.jpg/800px-Mi_ultimo_adios_manuscript.jpg",
    fullText: "Farewell, dear Fatherland, clime of the sun caress'd,\nPearl of the Orient seas, our Eden lost!\nGladly now I go to give thee this faded life's best,\nAnd were it brighter, fresher, or more blest,\nStill would I give it thee, nor count the cost.\n\nOn the field of battle, 'mid the frenzy of fight,\nOthers have given their lives, without doubt or heed;\nThe place matters not—cypress or laurel or lily white,\nScaffold or open plain, combat or martyrdom's plight,\n'Tis ever the same, to serve our home and country's need.\n\nI die just when I see the dawn break,\nThrough the gloom of night, to herald the day;\nAnd if color is lacking my blood thou shalt take,\nPour'd out at need for thy dear sake,\nTo dye with its crimson the waking ray.\n\nMy dreams, when life first opened to me,\nMy dreams, when the hopes of youth beat high,\nWere to see thy lov'd face, O gem of the Orient sea,\nFrom gloom and grief, from care and sorrow free;\nNo blush on thy brow, no tear in thine eye.\n\nDream of my life, my living and burning desire,\nAll hail! cries the soul that is now to take flight;\nAll hail! And sweet it is for thee to expire;\nTo die for thy sake, that thou mayst aspire;\nAnd sleep in thy bosom eternity's long night.\n\nIf over my grave some day thou seest grow,\nIn the grassy sod, a humble flower,\nDraw it to thy lips and kiss my soul so,\nWhile I may feel on my brow in the cold tomb below\nThe touch of thy tenderness, thy breath's warm power.\n\nLet the moon beam over me soft and serene,\nLet the dawn shed over me its radiant flashes,\nLet the wind with sad lament over me keen;\nAnd if on my cross a bird should be seen,\nLet it trill there its hymn of peace to my ashes.\n\nLet the sun draw the vapors up to the sky,\nAnd heavenward in purity bear my tardy protest;\nLet some kind soul o'er my untimely fate sigh,\nAnd in the still evening a prayer be lifted on high\nFrom thee, O my country, that in God I may rest.\n\nPray for all those that hapless have died,\nFor all who have suffered the unmeasur'd pain;\nFor our mothers that bitterly their woes have cried,\nFor widows and orphans, for captives by torture tried;\nAnd then for thyself that redemption thou mayst gain.\n\nAnd when the dark night wraps the graveyard around,\nWith only the dead in their vigil to see;\nBreak not my repose or the mystery profound,\nAnd perchance thou mayst hear a sad hymn resound;\n'Tis I, O my country, raising a song unto thee.\n\nAnd even my grave is remembered no more,\nUnmark'd by never a cross nor a stone;\nLet the plow sweep through it, the spade turn it o'er,\nThat my ashes may carpet thy earthly floor,\nBefore into nothingness at last they are blown.\n\nThen will oblivion bring to me no care,\nAs over thy vales and plains I sweep;\nThrobbing and cleansed in thy space and air,\nWith color and light, with song and lament I fare,\nEver repeating the faith that I keep.\n\nMy Fatherland ador'd, that sadness to my sorrow lends,\nBeloved Filipinas, hear now my last good-by!\nI give thee all: parents and kindred and friends;\nFor I go where no slave before the oppressor bends,\nWhere faith can never kill, and God reigns e'er on high!\n\nFarewell to you all, from my soul torn away,\nFriends of my childhood in the home dispossessed!\nGive thanks that I rest from the wearisome day!\nFarewell to thee, too, sweet friend that lightened my way;\nBeloved creatures all, farewell! In death there is rest!",
    analysis: "Mi Último Adiós (My Last Farewell) is perhaps Rizal's most famous poem, written on the eve of his execution by firing squad on December 30, 1896. The poem expresses his deep love for his native land and his acceptance of death as a sacrifice for his country's freedom. The poem was written in Spanish and was originally untitled. It wasn't until it was smuggled out of his cell that his friend Mariano Ponce gave it the title \"Mi Último Adiós.\" The poem has been translated into over 100 languages, making it one of the most translated poems in history."
  },
  {
    id: 4,
    title: "To The Filipino Youth",
    year: "1879",
    description: "A poem written when Rizal was only 18, urging the youth to rise to the challenges of nation-building through education and service.",
    category: 'poetry',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jose_Rizal_signature.svg/1280px-Jose_Rizal_signature.svg.png",
    fullText: "Hold high the brow serene,\nO youth, where now you stand;\nLet the bright sheen\nOf your grace be seen,\nFair hope of my fatherland!\n\nCome now, thou genius grand,\nAnd bring down inspiration;\nWith thy mighty hand,\nSwifter than the wind's volation,\nRaise the eager mind to higher station.\n\nThe honor's glorious seat,\nMay their shining feet\nTheir footsteps to thy glory lead;\nTo thy fame unsullied\nThrough virtue's path and thought's highway,\nMay they serve and dignify thee too.\n\nThe Filipino genius bent\nWith wise and faithful mind,\nThe laurel, the well-deserved prize\nOr immortality thy head shall bind.\n\nFair wisdom's gods will stand\nOn Parnassus height,\nWhile the Muses nine will hand\nThe harp that sounds delightfully bright,\nMore precious than graven gold light.\n\nFrom thy high heaven wilt thou come\nTo inspire the Philippines on earth?\nAnd with thy voice sublime\nRaise us from somber death?\n\nThe honor's glorious seat,\nMay their shining feet\nTheir footsteps to thy glory lead;\nTo thy fame unsullied\nThrough virtue's path and thought's highway,\nMay they serve and dignify thee too.",
    analysis: "\"To The Filipino Youth\" (A La Juventud Filipina) was Rizal's first significant literary work, written when he was just 18 years old. The poem won first prize in a literary contest organized by the Manila Lyceum of Art and Literature in 1879. In this piece, Rizal calls on the Filipino youth to use their talents and education for the betterment of the nation. He emphasizes the importance of wisdom, virtue, and artistic expression as tools for national development. The poem reflects Rizal's early belief that education and cultural development were essential components of national identity and progress."
  },
  {
    id: 5,
    title: "The Philippines a Century Hence",
    year: "1889-1890",
    description: "An essay predicting the future of the Philippines in which Rizal foresees the end of Spanish colonialism and speculates on the country's destiny.",
    category: 'essay',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rizal_Bagumbayan_1896.jpg/800px-Rizal_Bagumbayan_1896.jpg",
    fullText: "This essay, originally published in La Solidaridad from September 1889 to January 1890, presents Rizal's analysis of the Philippine situation and his predictions for its future. Beginning with an examination of the country's past, Rizal discusses the historical factors that have shaped Philippine society. He then analyzes the current Spanish colonial administration, highlighting its abuses and inefficiencies. Finally, Rizal presents several possible scenarios for the Philippines' future, including continued Spanish rule (with or without reforms), independence, and colonization by another power. Rizal predicts that without significant reforms, Spain will eventually lose the Philippines, either through revolution or intervention by another colonial power. He argues that Spain's only hope of maintaining its relationship with the Philippines is to implement substantial reforms that would give Filipinos greater rights and political representation.",
    analysis: "\"The Philippines a Century Hence\" demonstrates Rizal's analytical skills and political foresight. Many of his predictions came true, including Spain's loss of the Philippines. However, he did not anticipate the American colonization that followed. The essay reveals Rizal's preference for peaceful reform over violent revolution, though he recognized that revolution might become inevitable if reforms were not implemented. This work is significant for its articulation of Filipino national identity and aspirations for self-determination at a time when such ideas were just beginning to take shape."
  },
  {
    id: 6,
    title: "Filipinas Dentro De Cien Años",
    year: "1889-1890",
    description: "The original Spanish version of 'The Philippines a Century Hence', published in La Solidaridad.",
    category: 'essay',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/La_Solidaridad.jpg/800px-La_Solidaridad.jpg",
    fullText: "Siguiendo nuestra costumbre de hablar claramente y de abordar sin miedo las más arduas cuestiones, vamos a tratar de la suerte futura de Filipinas al cabo de un siglo, para contestar así del mejor modo que podamos al hablando egipcio que, en forma de interrogación, vemos esfinge nos dirige desde las columnas del periódico...",
    analysis: "\"Filipinas Dentro De Cien Años\" is the original Spanish version of Rizal's seminal essay. It was published serially in La Solidaridad, the newspaper of the reform movement in Spain. The essay demonstrates Rizal's mastery of the Spanish language and his ability to engage directly with Spanish readers and policymakers in their own language. By publishing in Spanish, Rizal ensured that his ideas would reach both Spanish authorities and educated Filipinos. The essay established Rizal as a serious political thinker and strengthened his position as a leader of the reform movement."
  },
  {
    id: 7,
    title: "La Indolencia de los Filipinos",
    year: "1890",
    description: "An essay challenging the Spanish perception that Filipinos are inherently lazy, arguing that any apparent indolence is a product of colonial oppression.",
    category: 'essay',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rizal_in_Heidelberg.jpg/800px-Rizal_in_Heidelberg.jpg",
    fullText: "In this essay, Rizal addresses the common Spanish colonial accusation that Filipinos are inherently indolent or lazy. He systematically analyzes this claim from historical, social, and economic perspectives. Rizal begins by acknowledging that there is some truth to the observation that many Filipinos appear to lack industry, but he argues that this is not an inherent racial characteristic. Instead, he attributes this \"indolence\" to several factors: the tropical climate, which naturally requires less constant labor than colder regions; the devastating effects of Spanish colonial policies, which discouraged entrepreneurship and initiative; and the lack of national sentiment under colonial rule, which provided little motivation for hard work when the fruits of labor would benefit foreign rulers. Rizal cites historical evidence that pre-colonial Filipinos were actually quite industrious, engaging in agriculture, trade, and crafts. He argues that Spanish colonization disrupted these patterns through monopolistic economic policies, forced labor, and a repressive social system.",
    analysis: "\"La Indolencia de los Filipinos\" is a masterful refutation of one of the key justifications for continued colonial rule: the supposed incapacity of Filipinos for self-government due to their \"natural laziness.\" Through careful argumentation and historical evidence, Rizal turns this accusation on its head, demonstrating that any observed indolence is actually the result of colonial oppression rather than its justification. This essay demonstrates Rizal's skill in using the tools of rational argument and scientific analysis to challenge colonial narratives. It also reflects his belief that understanding the true causes of social problems was the first step toward solving them."
  },
  {
    id: 8,
    title: "San Euistaquio, Mártir",
    year: "1876",
    description: "One of Rizal's early dramatic works, a play about the life of Saint Eustace, written during his student days.",
    category: 'play',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jose_rizal_ateneo.jpg/800px-Jose_rizal_ateneo.jpg",
    fullText: "This drama, written when Rizal was only fifteen years old, tells the story of Saint Eustace, a Roman general who converts to Christianity after seeing a vision of a cross between a stag's antlers while hunting. After his conversion, Eustace faces numerous trials, including the loss of his wealth, the kidnapping of his wife and sons, and eventually martyrdom under the Emperor Hadrian. The play follows the traditional structure of religious dramas popular in the Philippines during the Spanish colonial period, with an emphasis on the virtues of faith, perseverance, and sacrifice.",
    analysis: "\"San Euistaquio, Mártir\" is significant primarily as an early example of Rizal's literary talents and his education in the Spanish Catholic tradition. Written during his studies at the Ateneo Municipal de Manila, the play demonstrates his early mastery of Spanish and his familiarity with hagiographic literature. While not as politically significant as his later works, this play shows the young Rizal engaging with themes of faith, suffering, and moral integrity that would continue to feature in his more mature writings. It also reflects the strong influence of Catholic education on the young Rizal, an influence that he would later critique but never entirely abandon."
  }
];

const WrittenWorksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WrittenWork | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 6;
  
  const filteredWorks = selectedCategory === 'all' 
    ? writtenWorks 
    : writtenWorks.filter(work => work.category === selectedCategory);

  // Calculate pagination
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = filteredWorks.slice(indexOfFirstWork, indexOfLastWork);
  const totalPages = Math.ceil(filteredWorks.length / worksPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of works section
    window.scrollTo({ top: document.getElementById('written-works')?.offsetTop || 0, behavior: 'smooth' });
  };
  
  const openWorkDetails = (work: WrittenWork) => {
    setSelectedWork(work);
    setDialogOpen(true);
    setActiveTab('overview');
  };
  
  return (
    <section id="written-works" className="py-16 bg-white paper-texture">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="museum-heading text-4xl font-serif font-bold text-rizal-navy mb-4">Literary Works</h2>
          <div className="h-0.5 w-24 bg-rizal-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Beyond his artistic talents, José Rizal was a prolific writer whose literary works sparked the Philippine independence movement and continue to inspire generations. His novels, essays, and poetry critiqued colonial society and advocated for reform.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'all' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
              onClick={() => {
                setSelectedCategory('all');
                setCurrentPage(1);
              }}
            >
              All Works
            </Button>
            <Button 
              variant="outline" 
              className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'novel' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
              onClick={() => {
                setSelectedCategory('novel');
                setCurrentPage(1);
              }}
            >
              Novels
            </Button>
            <Button 
              variant="outline" 
              className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'poetry' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
              onClick={() => {
                setSelectedCategory('poetry');
                setCurrentPage(1);
              }}
            >
              Poetry
            </Button>
            <Button 
              variant="outline" 
              className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'essay' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
              onClick={() => {
                setSelectedCategory('essay');
                setCurrentPage(1);
              }}
            >
              Essays
            </Button>
            <Button 
              variant="outline" 
              className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'play' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
              onClick={() => {
                setSelectedCategory('play');
                setCurrentPage(1);
              }}
            >
              Plays
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-0 group">
                {work.imageUrl ? (
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={work.imageUrl} 
                      alt={work.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 bg-rizal-gold py-1 px-3 text-xs text-white font-medium">
                      {work.year}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-56 bg-rizal-light-blue flex items-center justify-center overflow-hidden">
                    <BookOpen className="w-16 h-16 text-rizal-navy opacity-30" />
                    <div className="absolute top-0 left-0 bg-rizal-gold py-1 px-3 text-xs text-white font-medium">
                      {work.year}
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="text-xs text-rizal-gold uppercase font-medium mb-1">
                    {work.category}
                  </div>
                  <CardTitle className="font-serif">{work.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600">{work.description}</p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    variant="ghost" 
                    className="text-rizal-navy hover:text-rizal-gold"
                    onClick={() => openWorkDetails(work)}
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {filteredWorks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No works found in this category.</p>
          </div>
        )}
        
        {/* Pagination Component */}
        {filteredWorks.length > worksPerPage && (
          <div className="flex justify-center mt-12">
            <LiteraryWorksPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-rizal-gold hover:bg-amber-600 text-rizal-navy px-8 py-6"
            onClick={() => {
              setSelectedCategory('all');
              setCurrentPage(1);
            }}
          >
            Explore All Literary Works
          </Button>
        </motion.div>
      </div>
      
      {/* Dialog for Work Details */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              {selectedWork?.title}
              <span className="ml-2 text-sm font-normal text-rizal-gold">
                ({selectedWork?.year})
              </span>
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 uppercase">
              {selectedWork?.category}
            </DialogDescription>
          </DialogHeader>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4 bg-gray-100">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="fullText">Full Text</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="prose max-w-none">
                <p className="text-gray-700">{selectedWork?.description}</p>
                
                {selectedWork?.analysis && (
                  <>
                    <h3 className="text-xl font-serif mt-6 mb-2 text-rizal-navy">Analysis</h3>
                    <p className="text-gray-700">{selectedWork?.analysis}</p>
                  </>
                )}
                
                {selectedWork?.imageUrl && (
                  <div className="mt-6">
                    <img 
                      src={selectedWork.imageUrl} 
                      alt={selectedWork.title} 
                      className="max-h-60 mx-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="fullText">
              <div className="prose max-w-none">
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  {selectedWork?.fullText ? (
                    <p className="whitespace-pre-line text-gray-700">{selectedWork.fullText}</p>
                  ) : (
                    <p className="text-gray-500 italic">Full text not available for this work.</p>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WrittenWorksSection;
