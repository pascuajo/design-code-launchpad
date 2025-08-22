import { BlogPost } from './BlogAdmin';
import { Edit2, Trash2, Eye } from 'lucide-react';

interface BlogPostListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (id: string) => void;
}

export function BlogPostList({ posts, onEdit, onDelete }: BlogPostListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-4">No blog posts yet</div>
        <p className="text-sm text-muted-foreground">Create your first blog post to get started</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-medium text-foreground">Title</th>
              <th className="text-left p-4 font-medium text-foreground">Status</th>
              <th className="text-left p-4 font-medium text-foreground">Author</th>
              <th className="text-left p-4 font-medium text-foreground">Created</th>
              <th className="text-left p-4 font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-border">
                <td className="p-4">
                  <div>
                    <div className="font-medium text-foreground">{post.title}</div>
                    <div className="text-sm text-muted-foreground">/{post.slug}</div>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="p-4 text-foreground">{post.author}</td>
                <td className="p-4 text-muted-foreground">{formatDate(post.created_at)}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {post.status === 'published' && (
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-muted-foreground hover:text-foreground"
                        title="View post"
                      >
                        <Eye size={16} />
                      </a>
                    )}
                    <button
                      onClick={() => onEdit(post)}
                      className="p-1 text-muted-foreground hover:text-foreground"
                      title="Edit post"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(post.id)}
                      className="p-1 text-muted-foreground hover:text-destructive"
                      title="Delete post"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}