import { Card } from "./ui/card";
import { TrendingUp, Users, Eye, Heart } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const statsData = [
  { label: 'Total Posts', value: '248', change: '+12%', icon: TrendingUp, color: 'purple' },
  { label: 'Total Followers', value: '48.5K', change: '+8.2%', icon: Users, color: 'blue' },
  { label: 'Engagement Rate', value: '4.8%', change: '+2.1%', icon: Heart, color: 'pink' },
  { label: 'Total Reach', value: '124K', change: '+15%', icon: Eye, color: 'green' },
];

const performanceData = [
  { name: 'Mon', posts: 12, engagement: 4.2 },
  { name: 'Tue', posts: 15, engagement: 5.1 },
  { name: 'Wed', posts: 8, engagement: 3.8 },
  { name: 'Thu', posts: 18, engagement: 6.2 },
  { name: 'Fri', posts: 22, engagement: 7.5 },
  { name: 'Sat', posts: 16, engagement: 5.8 },
  { name: 'Sun', posts: 10, engagement: 4.5 },
];

const platformData = [
  { platform: 'Instagram', posts: 85 },
  { platform: 'Twitter', posts: 62 },
  { platform: 'Facebook', posts: 48 },
  { platform: 'LinkedIn', posts: 35 },
];

const recentPosts = [
  { id: 1, title: 'Summer Campaign Launch', platform: 'Instagram', status: 'Published', engagement: '2.4K' },
  { id: 2, title: 'Product Update Announcement', platform: 'Twitter', status: 'Scheduled', engagement: '-' },
  { id: 3, title: 'Behind the Scenes', platform: 'Facebook', status: 'Published', engagement: '1.8K' },
  { id: 4, title: 'Team Spotlight', platform: 'LinkedIn', status: 'Draft', engagement: '-' },
];

export function DashboardView() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your content.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6 bg-card border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl mt-2 text-foreground">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${
                  stat.color === 'purple' ? 'bg-purple-500/20' :
                  stat.color === 'blue' ? 'bg-blue-500/20' :
                  stat.color === 'pink' ? 'bg-pink-500/20' :
                  'bg-green-500/20'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    stat.color === 'purple' ? 'text-purple-400' :
                    stat.color === 'blue' ? 'text-blue-400' :
                    stat.color === 'pink' ? 'text-pink-400' :
                    'text-green-400'
                  }`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <Card className="p-6 bg-card border-border">
          <h3 className="mb-4 text-foreground">Weekly Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #333' }} />
              <Area type="monotone" dataKey="engagement" stroke="#a78bfa" fillOpacity={1} fill="url(#colorEngagement)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Platform Distribution */}
        <Card className="p-6 bg-card border-border">
          <h3 className="mb-4 text-foreground">Posts by Platform</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={platformData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="platform" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #333' }} />
              <Bar dataKey="posts" fill="#a78bfa" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card className="p-6 bg-card border-border">
        <h3 className="mb-4 text-foreground">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                <div>
                  <p className="text-foreground">{post.title}</p>
                  <p className="text-sm text-muted-foreground">{post.platform}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  post.status === 'Published' ? 'bg-green-500/20 text-green-400' :
                  post.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {post.status}
                </span>
                <span className="text-sm text-muted-foreground w-16 text-right">{post.engagement}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
