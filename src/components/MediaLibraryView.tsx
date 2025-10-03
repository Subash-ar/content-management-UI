import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Search, Upload, Filter, MoreVertical, Download, Trash2, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const mediaItems = [
  { id: 1, type: 'image', name: 'summer-campaign-hero.jpg', date: '2025-02-15', size: '2.4 MB', used: 3 },
  { id: 2, type: 'image', name: 'product-launch.png', date: '2025-02-12', size: '1.8 MB', used: 5 },
  { id: 3, type: 'video', name: 'behind-the-scenes.mp4', date: '2025-02-10', size: '12.3 MB', used: 2 },
  { id: 4, type: 'image', name: 'team-photo.jpg', date: '2025-02-08', size: '3.1 MB', used: 1 },
  { id: 5, type: 'image', name: 'event-highlights.jpg', date: '2025-02-05', size: '2.7 MB', used: 4 },
  { id: 6, type: 'image', name: 'customer-testimonial.png', date: '2025-02-03', size: '1.5 MB', used: 6 },
  { id: 7, type: 'video', name: 'product-demo.mp4', date: '2025-02-01', size: '8.9 MB', used: 7 },
  { id: 8, type: 'image', name: 'infographic.png', date: '2025-01-28', size: '2.2 MB', used: 3 },
  { id: 9, type: 'image', name: 'office-culture.jpg', date: '2025-01-25', size: '3.5 MB', used: 2 },
  { id: 10, type: 'image', name: 'brand-assets.png', date: '2025-01-22', size: '1.9 MB', used: 8 },
  { id: 11, type: 'image', name: 'social-ad.jpg', date: '2025-01-20', size: '2.1 MB', used: 4 },
  { id: 12, type: 'image', name: 'announcement.png', date: '2025-01-18', size: '1.7 MB', used: 2 },
];

export function MediaLibraryView() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Media Library</h1>
          <p className="text-muted-foreground mt-1">Manage your media assets and resources.</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Upload className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-4 mb-6 bg-card border-border">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search media..."
              className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-background text-foreground">
            <option>All Types</option>
            <option>Images</option>
            <option>Videos</option>
          </select>
          <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-background text-foreground">
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Most Used</option>
          </select>
        </div>
      </Card>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mediaItems.map((item) => (
          <Card key={item.id} className="group overflow-hidden bg-card border-border">
            {/* Media Preview */}
            <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
              {item.type === 'image' ? (
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-${1500000000000 + item.id * 10000000}?w=400&h=400&fit=crop`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button className="p-2 bg-card rounded-lg hover:bg-muted">
                  <Eye className="w-4 h-4 text-foreground" />
                </button>
                <button className="p-2 bg-card rounded-lg hover:bg-muted">
                  <Download className="w-4 h-4 text-foreground" />
                </button>
                <button className="p-2 bg-card rounded-lg hover:bg-red-500/20 text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Media Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                </div>
                <button className="p-1 hover:bg-muted rounded">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{item.size}</span>
                <span>Used in {item.used} posts</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm" className="bg-purple-600 text-white border-purple-600">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  );
}
