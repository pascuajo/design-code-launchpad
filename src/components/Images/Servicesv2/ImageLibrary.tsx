import { Tag } from 'lucide-react';
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
  description: 'Exceptional CPO to VP level support when you need it, without the full-time commitment',
  tags: ['Startups', 'New Product Launches', 'Interim Leadership'],
  category: 'Leadership'
}, {
  id: 'app-design',
  url: "/app_design.jpg",
  title: 'Product Design & Rapid Prototyping',
  description: 'Explore new Product ideas and fresh perspectives (without derailing your current Product roadmap)',
  tags: ['ROI Definition', 'Business Case Development', 'Customer UX'],
  category: 'Design'
}, {
  id: 'growth-mentoring',
  url: "/istockphoto-1692037306-612x612.jpg",
  title: 'Product Operations & Scaling',
  description: 'Your trusted partner helping you design and scale world class Product teams and operations',
  tags: ['Team Building', 'Operational Excellence', 'Performance & OKRs'],
  category: 'Productivity'
}, {
  id: 'digital-transformation',
  url: "/digtal_transformation.jpg",
  title: 'Digital Transformation',
  description: 'Scale and transform your cross-functional platform and business apps that power your business',
  tags: ['Agentic AI', 'Cost Reduction', 'Platform Innovation'],
  category: 'Automation'
}, {
  id: 'business-strategy',
  url: "/success-strategy-plan-ahead-win-600nw-2115564866.webp",
  title: 'Product Strategy',
  description: 'Data-driven strategic planning and market positioning',
  tags: ['Competitive Advantage', 'New Business Models', 'Strategic Planning'],
  category: 'Strategy'
}, {
  id: 'professional-mentoring',
  url: "/mentoring.jpg",
  title: 'Professional Mentoring',
  description: 'Life, work, career - it can all be overwhelming! Supporting over 200 product professionals with confidential mentorship and guidance.',
  tags: ['Career Ladder', 'Team Dynamics', 'Skills Development'],
  category: 'Mentoring'
}];
export function ImageLibrary({
  'data-id': dataId
}: ImageLibraryProps) {
  return <div className="w-full bg-gradient-to-br from-purple-50 to-orange-50 p-8" id="services" data-id={dataId}>
      <div className="max-w-7xl mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageData.map((image, index) => <div key={image.id} className={`bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-solid transform transition-all hover:scale-105 hover:shadow-2xl ${index % 3 === 0 ? 'border-purple-300 hover:border-purple-500' : index % 3 === 1 ? 'border-orange-300 hover:border-orange-500' : 'border-lime-300 hover:border-lime-500'} ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={image.url} alt={image.title} className="w-full h-full object-cover transition-transform hover:scale-110" />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full text-sm font-bold text-white bg-green-800">
                    {image.category}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  <span className="handdrawn-highlight">{image.title}</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {image.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                   {image.tags.map(tag => <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                       <Tag className="w-3 h-3" />
                       {tag}
                     </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}
