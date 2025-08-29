import { Link } from 'react-router-dom';
import { useFonts } from '../../hooks/useFonts';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}
export function BlogCard({
  post
}: BlogCardProps) {
  const h3Font = useFonts('blog', 'h3');
  const pFont = useFonts('blog', 'p');
  const spanFont = useFonts('blog', 'span');

  return <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-[500px] flex flex-col blog-card" data-component="blog">
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="h-56 overflow-hidden flex-shrink-0">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500 blog" style={spanFont.getFontStyle()}>{post.date}</span>
            <span className="text-sm text-gray-500 blog" style={spanFont.getFontStyle()}>By {post.author}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-foreground blog" style={h3Font.getFontStyle()}>{post.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow blog" style={pFont.getFontStyle()}>
            {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
          </p>
        </div>
      </Link>
    </div>;
}