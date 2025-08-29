import { Tag } from 'lucide-react';
import { useFonts } from '../../../hooks/useFonts';

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
  description: 'Exceptional CPO to VP level interim support when you need it, without the full-time commitment',
  tags: ['Startups', 'New Product Launches', 'Interim Leadership'],
  category: 'Leadership'
}, {
  id: 'app-design',
  url: "/app_design.jpg",
  title: 'Product Design & Prototyping',
  description: 'Rapidly turn new concepts and ideas into testable solutions (without derailing your current team\'s roadmap)',
  tags: ['Rapid Prototyping', 'ROI Development', 'New Customer Experiences'],
  category: 'Design'
}, {
  id: 'growth-mentoring',
  url: "/istockphoto-1692037306-612x612.jpg",
  title: 'Product Excellence',
  description: 'Transform your Product function into a lean, world class, and AI-assisted engine of productivity and operational excellence',
  tags: ['AI Enablement', 'Operational Excellence', 'Team Dynamics'],
  category: 'Productivity'
}, {
  id: 'digital-transformation',
  url: "/digtal_transformation.jpg",
  title: 'Digital Transformation',
  description: 'Unlock hidden value automating and modernizing the back-office workflows and platforms that power your business',
  tags: ['New Business Apps', 'Workflow Automation', 'Platform Innovation'],
  category: 'Automation'
}, {
  id: 'business-strategy',
  url: "/success-strategy-plan-ahead-win-600nw-2115564866.webp",
  title: 'Product Strategy',
  description: 'Invaluable, independent and unbiased strategic counsel to fast-track your North Star and achieve aspirational outcomes',
  tags: ['Competitive Advantage', 'New Business Models', 'Strategic Planning'],
  category: 'Strategy'
}, {
  id: 'professional-mentoring',
  url: "/mentoring.jpg",
  title: 'Professional Mentoring',
  description: 'Your empathetic ally for confidential and actionable advice, from someone who has successfully navigated the highs and lows of Product Management at every rank',
  tags: ['Career Growth', 'Team Dynamics', 'Professional Development'],
  category: 'Mentoring'
}];

export function ImageLibrary({
  'data-id': dataId
}: ImageLibraryProps) {
  const h3Font = useFonts('imageLibrary', 'h3');
  const pFont = useFonts('imageLibrary', 'p');
  const pillFont = useFonts('imageLibrary', 'p');
  
  return <div className="w-full bg-gradient-to-br from-purple-50 to-orange-50 p-8 image-library" id="services" data-id={dataId} data-component="imageLibrary">
      <div className="max-w-7xl mx-auto">
        {/* Section Motif - Vertical line with logo and intro */}
        <div className="mb-40 pt-8">
          <div className="relative">
            {/* Vertical Line - positioned to perfectly intersect the gap with fade effects on both ends */}
            <div className="absolute left-[44.4%] top-[-80px] w-px h-64 bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            
            {/* Content Container - elements positioned with line dissecting the gap */}
            <div className="flex items-center justify-center">
              {/* Mountain Logo - positioned very close to left of center line */}
              <div className="w-16 h-16 flex-shrink-0 mr-2">
                <img 
                  src="/Clearmont_mountain_only.png" 
                  alt="Clearmont" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Section Intro - positioned very close to right of center line */}
              <div className="flex-shrink-0 ml-2">
                                  <p className="text-lg font-semibold text-gray-600 uppercase tracking-wide image-library" style={pFont.getFontStyle()}>
                    <span className="handdrawn-highlight">HOW I CAN HELP...</span>
                  </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageData.map((image, index) => <div key={image.id} className={`bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={image.url} alt={image.title} className="w-full h-full object-cover transition-transform hover:scale-110" />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full text-sm font-bold text-white bg-green-800 image-library" style={pillFont.getFontStyle()}>
                    {image.category}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 image-library" style={h3Font.getFontStyle()}>
                  <span className="handdrawn-highlight">{image.title}</span>
                </h3>
                <p className="text-gray-600 text-base mb-4 image-library" style={pFont.getFontStyle()}>
                  {image.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                   {image.tags.map(tag => <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium image-library" style={pillFont.getFontStyle()}>
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
