import React, { useState } from 'react';
import { Download, Eye, Tag } from 'lucide-react';
interface ImageData {
  id: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
}
interface ImageLibraryProps {
  'data-id'?: string;
}
const imageData: ImageData[] = [{
  id: 'fractional-leadership',
  url: "/fractional_leadership.webp",
  title: 'Fractional Leadership',
  description: 'Team collaboration and puzzle-solving illustration',
  tags: ['leadership', 'teamwork', 'collaboration', 'puzzle'],
  category: 'Leadership'
}, {
  id: 'app-design',
  url: "/app_design.jpg",
  title: 'App Design & Development',
  description: 'Modern app development and design process',
  tags: ['app', 'design', 'development', 'mobile', 'ui/ux'],
  category: 'Design'
}, {
  id: 'growth-mentoring',
  url: "/istockphoto-1692037306-612x612.jpg",
  title: 'Growth & Mentoring',
  description: 'Professional growth and mentoring concepts',
  tags: ['growth', 'mentoring', 'coaching', 'development'],
  category: 'Coaching'
}, {
  id: 'strategic-planning',
  url: "/success-strategy-plan-ahead-win-600nw-2115564866.webp",
  title: 'Strategic Planning',
  description: 'Success strategy and planning ahead concepts',
  tags: ['strategy', 'planning', 'chess', 'success', 'vision'],
  category: 'Strategy'
}, {
  id: 'business-strategy',
  url: "/strategy.jpg",
  title: 'Business Strategy',
  description: 'Strategic thinking with target and chess elements',
  tags: ['business', 'strategy', 'target', 'chess', 'analytics'],
  category: 'Strategy'
}];
export function ImageLibrary({
  'data-id': dataId
}: ImageLibraryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  return <div className="w-full bg-gradient-to-br from-purple-50 to-orange-50 p-8" data-id={dataId}>
      <div className="max-w-7xl mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageData.map((image, index) => <div key={image.id} className={`bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-solid transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer ${index % 3 === 0 ? 'border-purple-300 hover:border-purple-500' : index % 3 === 1 ? 'border-orange-300 hover:border-orange-500' : 'border-lime-300 hover:border-lime-500'} ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`} onClick={() => handleImageClick(image)}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={image.url} alt={image.title} className="w-full h-full object-cover transition-transform hover:scale-110" />
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold text-white ${image.category === 'Leadership' ? 'bg-purple-500' : image.category === 'Design' ? 'bg-orange-500' : image.category === 'Coaching' ? 'bg-lime-500' : 'bg-blue-500'}`}>
                    {image.category}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {image.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {image.tags.slice(0, 3).map(tag => <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>)}
                  {image.tags.length > 3 && <span className="text-xs text-gray-500">
                      +{image.tags.length - 3} more
                    </span>}
                </div>
                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-purple-100 text-purple-700 py-2 px-4 rounded-xl hover:bg-purple-200 transition-colors font-semibold">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-orange-100 text-orange-700 py-2 px-4 rounded-xl hover:bg-orange-200 transition-colors font-semibold">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        {/* Modal */}
        {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={closeModal}>
            <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-auto shadow-2xl border-4 border-purple-300" onClick={e => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedImage.title}
                    </h2>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white ${selectedImage.category === 'Leadership' ? 'bg-purple-500' : selectedImage.category === 'Design' ? 'bg-orange-500' : selectedImage.category === 'Coaching' ? 'bg-lime-500' : 'bg-blue-500'}`}>
                      {selectedImage.category}
                    </div>
                  </div>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                    ×
                  </button>
                </div>
                <img src={selectedImage.url} alt={selectedImage.title} className="w-full rounded-2xl mb-4 shadow-lg" />
                <p className="text-gray-600 mb-4 text-lg">
                  {selectedImage.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedImage.tags.map(tag => <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>)}
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                    <Download className="w-5 h-5" />
                    Download Image
                  </button>
                  <button onClick={closeModal} className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}